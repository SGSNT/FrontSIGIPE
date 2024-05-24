import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { FrameComponent } from './components/layout/estrutura/frame/frame.component';
import { FuncaolistComponent } from './components/funcao/funcaolist/funcaolist.component';
import { PessoalistComponent } from './components/pessoa/pessoalist/pessoalist.component';
import { AlunolistComponent } from './components/aluno/alunolist/alunolist.component';
import { ProfessorlistComponent } from './components/professor/professorlist/professorlist.component';
import { CoordenadorcursolistComponent } from './components/coordenadorcurso/coordenadorcursolist/coordenadorcursolist.component';
import { CoordenadorextensaolistComponent } from './components/coordenadorextensao/coordenadorextensaolist/coordenadorextensaolist.component';
import { CursolistComponent } from './components/curso/cursolist/cursolist.component';
import { Demanda } from './models/demanda';
import { DemandalistComponent } from './components/demanda/demandalist/demandalist.component';
import { DemandantelistComponent } from './components/demandante/demandantelist/demandantelist.component';
import { GrupolistComponent } from './components/grupo/grupolist/grupolist.component';
import { StatusdemandalistComponent } from './components/statusdemanda/statusdemandalist/statusdemandalist.component';
import { StatuspessoalistComponent } from './components/statuspessoa/statuspessoalist/statuspessoalist.component';
import { TipoinstituicaolistComponent } from './components/tipoinstituicao/tipoinstituicaolist/tipoinstituicaolist.component';
import { InstituicaolistComponent } from './components/instituicao/instituicaolist/instituicaolist.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: FrameComponent, children: [
        {path: 'pessoa', component: PessoalistComponent},
        {path: 'funcao', component: FuncaolistComponent},
        {path: 'aluno', component: AlunolistComponent},
        {path: 'professor', component: ProfessorlistComponent},
        {path: 'coordenadorCurso', component: CoordenadorcursolistComponent},
        {path: 'coordenadorExtensao', component: CoordenadorextensaolistComponent},
        {path: 'curso', component: CursolistComponent},
        {path: 'demanda', component: DemandalistComponent},
        {path: 'demandante', component: DemandantelistComponent},
        {path: 'grupo', component: GrupolistComponent},
        {path: 'instituicao', component: InstituicaolistComponent},
        {path: 'statusDemanda', component: StatusdemandalistComponent},
        {path: 'statusPessoa', component: StatuspessoalistComponent},
        {path: 'tipoInstituicao', component: TipoinstituicaolistComponent}
    ]}
];
