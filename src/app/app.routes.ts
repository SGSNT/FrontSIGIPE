import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { FrameComponent } from './components/layout/estrutura/frame/frame.component';
import { DemandantelistComponent } from './components/demandante/demandantelist/demandantelist.component';
import { DemandantedetailsComponent } from './components/demandante/demandantedetails/demandantedetails.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login',pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'estrutura', component: FrameComponent},
    {path: 'demandante',component: DemandantelistComponent},
    {path: 'demandante/save',component:DemandantedetailsComponent},
    {path: 'demandante/update/:idDemandante',component:DemandantedetailsComponent}
];
