import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { FrameComponent } from './components/layout/estrutura/frame/frame.component';
import { FuncaolistComponent } from './components/funcao/funcaolist/funcaolist.component';
import { FuncaodetailsComponent } from './components/funcao/funcaodetails/funcaodetails.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: FrameComponent, children: [
        {path: 'funcao', component: FuncaolistComponent},
        {path: 'funcao/new', component: FuncaodetailsComponent}
    ]}
];
