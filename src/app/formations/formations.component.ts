import { Component,OnInit, ViewEncapsulation} from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs ,AgendaService, ActionEventArgs, ToolbarActionArgs, ExportOptions, ExcelExportService, ScheduleComponent  } from '@syncfusion/ej2-angular-schedule';
import { DatePicker } from '@syncfusion/ej2-angular-calendars';
import { ItemModel } from '@syncfusion/ej2-angular-navigations';
import { salles } from 'app/salles/salles.component';
import { Formateur } from 'app/formateur/formateur.component';
import {FormationsService} from './formations.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  providers: [DayService, WeekService, WorkWeekService, MonthService,AgendaService],
  encapsulation: ViewEncapsulation.None
})  
export class FormationComponent implements OnInit  {
     

  formations: Formations[];
  salles: salles[];
  formateurs: Formateur[];
  constructor(private formationService: FormationsService){}
  ngOnInit() {

    this.formationService.getAllFormation().subscribe((data: Formations[]) => {
      console.log(data);
      this.formations=data;
    });

   this.getFormateur();
   this.getSalle();
  
  }


  public getSalle(): void {
    this.formationService.getAllSalle().subscribe((data: salles[]) => {
      console.log(data);
      this.salles=data;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

test=this.getSalle();

public getFormateur(): void {
  this.formationService.getAllFormateur().subscribe((data: Formateur[]) => {
    console.log(data);
    this.formateurs=data;
  },
  (error: HttpErrorResponse) => {
    alert(error.message);
  }
);
}


  public scheduleObj: ScheduleComponent;
  public selectedDate: Date = new Date;
  public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
  public showQuickInfo: Boolean = true;
  //public currentView: View = 'Week';
  public onActionBegin(args: ActionEventArgs & ToolbarActionArgs): void {
    if (args.requestType === 'toolbarItemRendering') {
      const exportItem: ItemModel = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
        text: 'Excel Export', cssClass: 'e-excel-export', click: this.onExportClick.bind(this)
      };
      args.items.push(exportItem);
    }
  }
  public onExportClick(): void {
    const exportValues: ExportOptions = { fields: ['Id', 'Subject', 'StartTime', 'EndTime', 'Location'] };
    this.scheduleObj.exportToExcel(exportValues);
  }
  addclick(args:ActionEventArgs):void{
      if (args.requestType=="eventCreate"){
        console.log("i am here 2")
        //INSERT HERE
      }
     

  }
  onPopupOpen(args: PopupOpenEventArgs): void {
      console.log(args)
    if (args.type === 'Editor') {    
        
        let startElement: HTMLInputElement = args.element.querySelector('#StartTime') as HTMLInputElement;
        if (!startElement.classList.contains('e-datepicker')) {
            new DatePicker({ value: new Date(startElement.value) || new Date() }, startElement);
        }
        let endElement: HTMLInputElement = args.element.querySelector('#EndTime') as HTMLInputElement;
        if (!endElement.classList.contains('e-datepicker')) {
            new DatePicker({ value: new Date(endElement.value) || new Date() }, endElement);
        }

        let formateurElement: HTMLInputElement = args.element.querySelector('#formateur') as HTMLInputElement;
        if (!formateurElement.classList.contains('e-dropdownlist')) {
            let dropDownListObject: DropDownList = new DropDownList({
                placeholder: 'Choisir un formateur', value: formateurElement.value,
                dataSource: ['New', 'Requested', 'Confirmed']
            });
            dropDownListObject.appendTo(formateurElement);
            formateurElement.setAttribute('name', 'formateur');
        }

        let salleElement: HTMLInputElement = args.element.querySelector('#salle') as HTMLInputElement;
        if (!salleElement.classList.contains('e-dropdownlist')) {
            let dropDownListObject: DropDownList = new DropDownList({
                placeholder: 'Choisir une salle', value: salleElement.value,
               
            });
            dropDownListObject.appendTo(salleElement);
            salleElement.setAttribute('name', 'salle');
        }
    }
}
}

export class Formations {
  id: number;
  libelle: string;
  specialite: string;
  dateDeb: Date;
  dateFin:Date
  prix:number;
  support_cours:string;
  formateur:Formateur;
  salle:salles;

  }
  


/*

let statusElement: HTMLInputElement = args.element.querySelector('#EventType') as HTMLInputElement;
        if (!statusElement.classList.contains('e-dropdownlist')) {
            let dropDownListObject: DropDownList = new DropDownList({
                placeholder: 'Choose status', value: statusElement.value,
                dataSource: ['New', 'Requested', 'Confirmed']
            });
            dropDownListObject.appendTo(statusElement);
            statusElement.setAttribute('name', 'EventType');
        }
*/

