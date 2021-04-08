import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { user_profileComponent } from './user_profile/user_profile.component';
import { FormationComponent } from './formations/formations.component';
import { examensComponent } from './examens/examens.component';
import { IconsComponent } from './icons/icons.component';
import { offresComponent } from './offres/offres.component';
import {ArchiveSalleComponent} from './archive_salle/archive_salle.component';
import { sallesComponent } from './salles/salles.component';
import { utilisateursComponent } from './utilisateurs/utilisateurs.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { materielsComponent } from './materiels/materiels.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BrowserModule } from '@angular/platform-browser';

import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule, CheckBoxAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';    

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule,TimePickerModule } from '@syncfusion/ej2-angular-calendars';
 
import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { ScheduleAllModule, RecurrenceEditorAllModule ,DayService,WorkWeekService,MonthService, MonthAgendaService, WeekService, AgendaService,EventSettingsModel,ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import { HttpModule } from '@angular/http'; 


import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ArchiveMaterielComponent } from './archive-materiel/archive-materiel.component';
import { ArchiveExamenComponent } from './archive-examen/archive-examen.component';
import { FormateurComponent } from './formateur/formateur.component';

@NgModule({
  imports: [
    CommonModule, HttpModule, ScheduleAllModule, RecurrenceEditorAllModule,   
    NumericTextBoxAllModule, 
    TextBoxAllModule,
     DatePickerAllModule,
      TimePickerAllModule, 
      DateTimePickerAllModule, 
      CheckBoxAllModule,   
      ToolbarAllModule, 
      DropDownListAllModule, 
      ContextMenuAllModule, 
      MaskedTextBoxModule, 
      UploaderAllModule, 
      MultiSelectAllModule,   
      TreeViewModule, 
      ButtonAllModule, 
      DropDownButtonAllModule, 
      SwitchAllModule, 
      ReactiveFormsModule,
      
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_offres_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    FormateurComponent,
   

  ],
  providers: [DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService,
    AgendaService,
    MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
