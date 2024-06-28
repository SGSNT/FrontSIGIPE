import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { Curso } from '../../../models/curso';
import { Coordenadorcurso } from '../../../models/coordenadorcurso';
import { Tipoinstituicao } from '../../../models/tipoinstituicao';
import { Statusdemanda } from '../../../models/statusdemanda';
import { Coordenadorextensao } from '../../../models/coordenadorextensao';
import { CursoService } from '../../../services/curso.service';
import { TipoinstituicaoService } from '../../../services/tipoinstituicao.service';
import { StatusdemandaService } from '../../../services/statusdemanda.service';
import { CoordenadorextensaoService } from '../../../services/coordenadorextensao.service';
import Swal from 'sweetalert2';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalcursoComponent } from './modais/modalcurso/modalcurso.component';
import { ModaltipoinstituicaoComponent } from './modais/modaltipoinstituicao/modaltipoinstituicao.component';
import { ModalstatusdemandaComponent } from './modais/modalstatusdemanda/modalstatusdemanda.component';
import { ModalcoordenadorextensaoComponent } from './modais/modalcoordenadorextensao/modalcoordenadorextensao.component';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [MdbAccordionModule, ModalcursoComponent, MdbModalModule, ModaltipoinstituicaoComponent, ModalstatusdemandaComponent, ModalcoordenadorextensaoComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  listaCursos: Curso[] = [];
  listaTipos: Tipoinstituicao[] = [];
  listaStatus: Statusdemanda[] = [];
  listaCoordenadorExtensao: Coordenadorextensao[] = [];

  cursoSelect!: Curso;
  tipoSelect!: Tipoinstituicao;
  statusSelect!: Statusdemanda;
  coordendaorExtensaoSelect!: Coordenadorextensao;

  
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS
  @ViewChild('modalCurso')
  modalCurso!: TemplateRef<any>; //enxergar o bloco de html da modal de curso
  @ViewChild('modalTipoinstituicao')
  modalTipoinstituicao!: TemplateRef<any>; 
  @ViewChild('modalCoordenadorExtensao')
  modalCoordenadorExtensao!: TemplateRef<any>; 
  @ViewChild('modalStatusDemanda')
  modalStatusDemanda!: TemplateRef<any>; 

  modalService = inject(MdbModalService); //serve para eu conseguir abrir a modal... pelo TS
  cursoService = inject(CursoService);
  tipoService = inject(TipoinstituicaoService);
  statusService = inject(StatusdemandaService);
  coordenadorExtensaoService = inject(CoordenadorextensaoService);

  constructor() {
    this.findAllAll();
  }

  // métodos findAll
  findAllAll(){
    this.cursoSelect = new Curso;
    this.tipoSelect = new Tipoinstituicao;
    this.coordendaorExtensaoSelect = new Coordenadorextensao;
    this.statusSelect = new Statusdemanda;

    this.findAllCursos();
    this.findAllTipo();
    this.findAllStatus();
    this.findAllCoordenadorExtensao();
  }

  findAllCursos() {
    this.cursoService.findAll().subscribe({
      next: (listaRecebida) => {
        this.listaCursos = listaRecebida;
      },
      error: (erro) => {
        console.log(erro);
        Swal.fire({
          title: 'Ocorreu um erro',
          text: 'Mais informações no console da aplicação',
          icon: 'error',
        });
      },
    });
  }

  findAllTipo() {
    this.tipoService.findAll().subscribe({
      next: (listaRecebida) => {
        this.listaTipos = listaRecebida;
      },
      error: (erro) => {
        console.log(erro);
        Swal.fire({
          title: 'Ocorreu um erro',
          text: 'Mais informações no console da aplicação',
          icon: 'error',
        });
      },
    });
  }

  findAllStatus() {
    this.statusService.findAll().subscribe({
      next: (listaRecebida) => {
        this.listaStatus = listaRecebida;
      },
      error: (erro) => {
        console.log(erro);
        Swal.fire({
          title: 'Ocorreu um erro',
          text: 'Mais informações no console da aplicação',
          icon: 'error',
        });
      },
    });
  }

  findAllCoordenadorExtensao() {
    this.coordenadorExtensaoService.findAll().subscribe({
      next: (listaRecebida) => {
        this.listaCoordenadorExtensao = listaRecebida;
      },
      error: (erro) => {
        console.log(erro);
        Swal.fire({
          title: 'Ocorreu um erro',
          text: 'Mais informações no console da aplicação',
          icon: 'error',
        });
      },
    });
  }

  voltaModal(e: object){
    this.findAllAll();
    this.modalRef.close();
  }

  // métodos save
  saveCurso(){
    this.cursoSelect = new Curso();
    this.modalRef = this.modalService.open(this.modalCurso);
  }
  saveTipo(){
    this.tipoSelect = new Tipoinstituicao();
    this.modalRef = this.modalService.open(this.modalTipoinstituicao);
  }
  saveStatus(){
    this.statusSelect = new Statusdemanda();
    this.modalRef = this.modalService.open(this.modalStatusDemanda);
  }
  saveCoordenadorExtensao(){
    this.coordendaorExtensaoSelect = new Coordenadorextensao();
    this.modalRef = this.modalService.open(this.modalCoordenadorExtensao);
  }

  // métodos de update
  updateCurso(curso: Curso){
    this.cursoSelect = Object.assign({}, curso);
    this.modalRef = this.modalService.open(this.modalCurso);
  }
  updateTipo(tipo: Tipoinstituicao){
    this.tipoSelect = Object.assign({}, tipo);
    this.modalRef = this.modalService.open(this.modalTipoinstituicao);
  }
  updateStatus(status: Statusdemanda){
    this.statusSelect = Object.assign({}, status);
    this.modalRef = this.modalService.open(this.modalStatusDemanda);
  }
  updateCoordenadorExtensao(coordenadorExtensao: Coordenadorextensao){
    this.coordendaorExtensaoSelect = Object.assign({}, coordenadorExtensao);
    this.modalRef = this.modalService.open(this.modalCoordenadorExtensao);
  }
}
