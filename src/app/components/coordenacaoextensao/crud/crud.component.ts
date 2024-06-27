import { Component, inject } from '@angular/core';
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

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [MdbAccordionModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  listaCursos: Curso[] = [];
  listaTipos: Tipoinstituicao[] = [];
  listaStatus: Statusdemanda[] = [];
  listaCoordenadorExtensao: Coordenadorextensao[] = [];

  cursoService = inject(CursoService);
  tipoService = inject(TipoinstituicaoService);
  statusService = inject(StatusdemandaService);
  coordenadorExtensaoService = inject(CoordenadorextensaoService);

  constructor() {
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
}
