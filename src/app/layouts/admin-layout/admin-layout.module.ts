import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { user_profileComponent } from '../../user_profile/user_profile.component';
import { FormationComponent } from '../../formations/formations.component';
import { examensComponent } from '../../examens/examens.component';
import { IconsComponent } from '../../icons/icons.component';
import{ArchiveMaterielComponent} from '../../archive-materiel/archive-materiel.component';
import {ArchiveExamenComponent} from '../../archive-examen/archive-examen.component'
import { offresComponent } from '../../offres/offres.component';
import { sallesComponent } from '../../salles/salles.component';
import { utilisateursComponent } from '../../utilisateurs/utilisateurs.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { materielsComponent } from 'app/materiels/materiels.component';

import{ArchiveSalleComponent} from 'app/archive_salle/archive_salle.component';
import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule, CheckBoxAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
 
import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';

import { HttpModule } from '@angular/http'; 

@NgModule({
  imports: [
    HttpModule, ScheduleAllModule, RecurrenceEditorAllModule,   
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
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    user_profileComponent,
    FormationComponent,
    examensComponent,
    IconsComponent,
    offresComponent,
    sallesComponent,
    NotificationsComponent,
    UpgradeComponent,
    materielsComponent,
    ArchiveSalleComponent,
    ArchiveMaterielComponent,
    ArchiveExamenComponent,
  ]
})

export class AdminLayoutModule {}
