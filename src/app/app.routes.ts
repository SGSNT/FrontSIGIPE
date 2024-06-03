import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { FrameComponent } from './components/layout/estrutura/frame/frame.component';
import { TestagemComponent } from './components/testagem/testagem.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: FrameComponent, children: [
        {path: "teste", component: TestagemComponent}
    ]}
];
