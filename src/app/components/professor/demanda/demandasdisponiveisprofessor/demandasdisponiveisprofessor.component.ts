import { Component, inject } from '@angular/core';
import { CardgridComponent } from '../../cardgrid/cardgrid.component';
import Swal from 'sweetalert2';
import { DemandaService } from '../../../../services/demanda.service';
/*import { Demanda } from '../../../../models/demanda';
import { Grupo } from '../../../../models/grupo';
import { Instituicao } from '../../../../models/instituicao';
import { Tipoinstituicao } from '../../../../models/tipoinstituicao';
import { Demandante } from '../../../../models/demandante';
import { Statusdemanda } from '../../../../models/statusdemanda';
import { Curso } from '../../../../models/curso';*/

import { Demanda } from '../../../../models/demanda';
import { Professor } from '../../../../models/professor';
import { SearchbarComponent } from '../../../layout/searchbar/searchbar.component';

@Component({
  selector: 'app-demandasdisponiveisprofessor',
  standalone: true,
  imports: [CardgridComponent, SearchbarComponent],
  templateUrl: './demandasdisponiveisprofessor.component.html',
  styleUrl: './demandasdisponiveisprofessor.component.scss',
})
export class DemandasdisponiveisprofessorComponent {
  /*listaDemandas: Demanda[] = [];

  demandaService = inject(DemandaService);

  constructor() {
    console.log(this.listaDemandas);
  }

  findAllDemandas() {
    this.demandaService.findAll().subscribe({
      next: (listaService) => {
        this.listaDemandas = listaService;
      },
      error: (erro) => {
        Swal.fire({
          title: 'Houve um erro',
          text: 'Mais informações no console da aplicação',
          icon: 'error',
        });
        console.log(erro);
      },
    });
  }*/

  user!: Professor;
  listaDemandas: Demanda[] = [];

  constructor() {
    this.user = new Professor();
  }
}
