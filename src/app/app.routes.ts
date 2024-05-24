import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { FrameComponent } from './components/layout/estrutura/frame/frame.component';
import { InstituicaolistComponent } from './components/instituicaolist/instituicaolist.component';
import { InstituicaodetailsComponent } from './components/instituicaodetails/instituicaodetails.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login',pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'estrutura', component: FrameComponent},
    {path:'instituicao',component: InstituicaolistComponent},
    {path: 'instituicao/save',component: InstituicaodetailsComponent},
    {path: 'instituicao/update/:idInstituicao',component: InstituicaodetailsComponent}
];
