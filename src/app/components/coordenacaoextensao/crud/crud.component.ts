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
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { ModalcursoComponent } from './modais/modalcurso/modalcurso.component';
import { ModaltipoinstituicaoComponent } from './modais/modaltipoinstituicao/modaltipoinstituicao.component';
import { ModalstatusdemandaComponent } from './modais/modalstatusdemanda/modalstatusdemanda.component';
import { ModalcoordenadorextensaoComponent } from './modais/modalcoordenadorextensao/modalcoordenadorextensao.component';
import { Turma } from '../../../models/turma';
import { TurmaService } from '../../../services/turma.service';
import { ModalcoordenadorcursoComponent } from './modais/modalcoordenadorcurso/modalcoordenadorcurso.component';
import { CoordenadorcursoService } from '../../../services/coordenadorcurso.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    MdbAccordionModule,
    ModalcursoComponent,
    MdbModalModule,
    ModaltipoinstituicaoComponent,
    ModalstatusdemandaComponent,
    ModalcoordenadorextensaoComponent,
    ModalcoordenadorcursoComponent
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  // primeira camada
  listaCursos: Curso[] = [];
  listaTipos: Tipoinstituicao[] = [];
  listaStatus: Statusdemanda[] = [];
  listaCoordenadorExtensao: Coordenadorextensao[] = [];
  //segunda camada
  listaTurmas: Turma[] = [];
  // terceira camada
  listaCoordenadorCurso: Coordenadorcurso[] = [];

  //primeira camada
  cursoSelect!: Curso;
  tipoSelect!: Tipoinstituicao;
  statusSelect!: Statusdemanda;
  coordendaorExtensaoSelect!: Coordenadorextensao;
  //segunda camada
  turmaSelect!: Turma;
  // terceira camada
  coordenadorCursoSelect!: Coordenadorcurso;

  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS
  @ViewChild('modalCurso')
  modalCurso!: TemplateRef<any>; //enxergar o bloco de html da modal de curso
  @ViewChild('modalTipoinstituicao')
  modalTipoinstituicao!: TemplateRef<any>;
  @ViewChild('modalCoordenadorExtensao')
  modalCoordenadorExtensao!: TemplateRef<any>;
  @ViewChild('modalStatusDemanda')
  modalStatusDemanda!: TemplateRef<any>;
  @ViewChild('modalCoordenadorCurso')
  modalCoordenadorCurso!: TemplateRef<any>;

  modalService = inject(MdbModalService); //serve para eu conseguir abrir a modal... pelo TS
  cursoService = inject(CursoService);
  tipoService = inject(TipoinstituicaoService);
  statusService = inject(StatusdemandaService);
  coordenadorExtensaoService = inject(CoordenadorextensaoService);
  turmaService = inject(TurmaService);
  coordenadorCursoService = inject(CoordenadorcursoService);

  constructor() {
    this.findAllAll();
  }

  // métodos findAll
  findAllAll() {
    this.cursoSelect = new Curso();
    this.tipoSelect = new Tipoinstituicao();
    this.coordendaorExtensaoSelect = new Coordenadorextensao();
    this.statusSelect = new Statusdemanda();

    this.turmaSelect = new Turma();

    this.coordenadorCursoSelect = new Coordenadorcurso();

    this.findAllCurso();
    this.findAllTipo();
    this.findAllStatus();
    this.findAllCoordenadorExtensao();
    this.findAllTurma();
    this.findAllCoordenadorCurso();
  }

  findAllCurso() {
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
  findAllTurma() {
    this.turmaService.findAll().subscribe({
      next: (listaRecebida) => {
        this.listaTurmas = listaRecebida;
      },
      error: (erro) => {
        console.clear();
        console.log(erro);
        Swal.fire({
          title: 'Ocorreu um erro',
          text: 'Mais informações no console da aplicação',
          icon: 'error',
        });
      },
    });
  }
  findAllCoordenadorCurso() {
    this.coordenadorCursoService.findAll().subscribe({
      next: (listaRecebida) => {
        this.listaCoordenadorCurso = listaRecebida;
      },
      error: (erro) => {
        console.clear();
        console.log(erro);
        Swal.fire({
          title: 'Ocorreu um erro',
          text: 'Mais informações no console da aplicação',
          icon: 'error',
        });
      },
    });
  }

  voltaModal(e: object) {
    this.findAllAll();
    this.modalRef.close();
  }

  // métodos save
  saveCurso() {
    this.cursoSelect = new Curso();
    this.modalRef = this.modalService.open(this.modalCurso);
  }
  saveTipo() {
    this.tipoSelect = new Tipoinstituicao();
    this.modalRef = this.modalService.open(this.modalTipoinstituicao);
  }
  saveStatus() {
    this.statusSelect = new Statusdemanda();
    this.modalRef = this.modalService.open(this.modalStatusDemanda);
  }
  saveCoordenadorExtensao() {
    this.coordendaorExtensaoSelect = new Coordenadorextensao();
    this.modalRef = this.modalService.open(this.modalCoordenadorExtensao);
  }
  gerarTurmas() {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Esta operação irá deletar todas as turmas salvas no sistema',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Gerar turmas',
      customClass: {
        container: 'custom-swal-container', // classe personalizada para o container do SweetAlert2
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.turmaService.gerarTurmas().subscribe({
          next: (turmasGeradas) => {
            Swal.fire({
              title: 'Turmas geradas!',
              text: 'Turmas criadas com sucesso.',
              icon: 'success',
            });
            this.findAllTurma();
          },
          error: (erro) => {
            console.clear();
            console.log(erro);
            Swal.fire({
              title: 'Ocorreu um erro',
              text: 'Mais informações no console da aplicação',
              icon: 'error',
            });
          },
        });
      }
    });
  }
  saveCoordenadorCurso() {
    this.coordenadorCursoSelect = new Coordenadorcurso();
    this.modalRef = this.modalService.open(this.modalCoordenadorCurso);
  }

  // métodos de update
  updateCurso(curso: Curso) {
    this.cursoSelect = Object.assign({}, curso);
    this.modalRef = this.modalService.open(this.modalCurso);
  }
  updateTipo(tipo: Tipoinstituicao) {
    this.tipoSelect = Object.assign({}, tipo);
    this.modalRef = this.modalService.open(this.modalTipoinstituicao);
  }
  updateStatus(status: Statusdemanda) {
    this.statusSelect = Object.assign({}, status);
    this.modalRef = this.modalService.open(this.modalStatusDemanda);
  }
  updateCoordenadorExtensao(coordenadorExtensao: Coordenadorextensao) {
    this.coordendaorExtensaoSelect = Object.assign({}, coordenadorExtensao);
    this.modalRef = this.modalService.open(this.modalCoordenadorExtensao);
  }
  updateCoordenadorCurso(coordenadorCurso: Coordenadorcurso) {
    this.coordenadorCursoSelect = Object.assign({}, coordenadorCurso);
    this.modalRef = this.modalService.open(this.modalCoordenadorCurso);
  }
}
