import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { user_profileComponent } from '../../user_profile/user_profile.component';
import { FormationComponent } from '../../formations/formations.component';
import { examensComponent } from '../../examens/examens.component';
import { IconsComponent } from '../../icons/icons.component';
import { offresComponent } from '../../offres/offres.component';
import { sallesComponent } from '../../salles/salles.component';
import { utilisateursComponent } from '../../utilisateurs/utilisateurs.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { materielsComponent } from '../../materiels/materiels.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {ArchiveSalleComponent} from '../../archive_salle/archive_salle.component';
import{ArchiveMaterielComponent} from '../../archive-materiel/archive-materiel.component';
import {ArchiveExamenComponent} from '../../archive-examen/archive-examen.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: user_profileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'offres',
    //         component: offresComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'examens',
    //         component: examensComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user_profile',   component: user_profileComponent },
    { path: 'formations',     component: FormationComponent },
    { path: 'examens',     component: examensComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'offres',           component: offresComponent },
    { path: 'salles',           component: sallesComponent },
    { path: 'utilisateurs',           component: utilisateursComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'materiels',  component: materielsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    {path: 'archiveSalle' ,component:ArchiveSalleComponent},
    {path:'archiveMateriels', component:ArchiveMaterielComponent},
    {path:'archiveExamen', component:ArchiveExamenComponent},

];
