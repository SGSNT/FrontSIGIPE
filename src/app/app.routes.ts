import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { FrameComponent } from './components/layout/estrutura/frame/frame.component';
import { FuncaolistComponent } from './components/funcao/funcaolist/funcaolist.component';
import { PessoalistComponent } from './components/pessoa/pessoalist/pessoalist.component';
import { AlunolistComponent } from './components/aluno/alunolist/alunolist.component';
import { ProfessorlistComponent } from './components/professor/professorlist/professorlist.component';
import { CoordenadorcursolistComponent } from './components/coordenadorcurso/coordenadorcursolist/coordenadorcursolist.component';
import { CoordenadorextensaolistComponent } from './components/coordenadorextensao/coordenadorextensaolist/coordenadorextensaolist.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: FrameComponent, children: [
        {path: 'funcao', component: FuncaolistComponent},
        {path: 'pessoa', component: PessoalistComponent},
        {path: 'aluno', component: AlunolistComponent},
        {path: 'professor', component: ProfessorlistComponent},
        {path: 'coordenadorCurso', component: CoordenadorcursolistComponent},
        {path: 'coordenadorExtensao', component: CoordenadorextensaolistComponent}
    ]}
];
