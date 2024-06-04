import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { FrameComponent } from './components/layout/estrutura/frame/frame.component';
import { DemandasdisponiveisalunoComponent } from './components/aluno/demanda/demandasdisponiveisaluno/demandasdisponiveisaluno.component';
import { DemandasdisponiveiscoordenacaocursoComponent } from './components/coordenacaocurso/demanda/demandasdisponiveiscoordenacaocurso/demandasdisponiveiscoordenacaocurso.component';
import { DashboardComponent } from './components/coordenacaoextensao/dashboard/dashboard/dashboard.component';
import { DemandasdisponiveisprofessorComponent } from './components/professor/demanda/demandasdisponiveisprofessor/demandasdisponiveisprofessor.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'professor', component: FrameComponent, children: [
        {path: 'demandas-disponiveis', component: DemandasdisponiveisprofessorComponent}
    ]},
    {path: 'aluno', component: FrameComponent, children: [
        {path: 'demandas-disponiveis', component: DemandasdisponiveisalunoComponent}
    ]},
    {path: 'coordenacao-extensao', component: FrameComponent, children: [
        {path: 'dashboard', component: DashboardComponent}
    ]},
    {path: 'coordenacao-curso', component: FrameComponent, children: [
        {path: 'demandas-disponiveis', component:DemandasdisponiveiscoordenacaocursoComponent}
    ]},
];
