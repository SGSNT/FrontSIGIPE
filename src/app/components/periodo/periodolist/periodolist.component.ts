import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { PeriododetailsComponent } from '../../periodo/periododetails/periododetails.component';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { Periodo } from '../../../models/periodo';
import { PeriodoService } from '../../../services/periodo.service';

@Component({
  selector: 'app-periodolist',
  standalone: true,
  imports: [PeriododetailsComponent, MdbModalModule],
  templateUrl: './periodolist.component.html',
  styleUrl: './periodolist.component.scss',
})
export class PeriodolistComponent {
  lista: Periodo[] = [];
  periodoEdit: Periodo = new Periodo();

  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild('modalPeriodoDetalhe') modalPeriodoDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  periodoService = inject(PeriodoService);

  constructor() {
    this.findAll();
  }

  findAll() {
    this.periodoService.findAll().subscribe({
      next: (listaService) => {
        this.lista = listaService;
      },
      error: (erro) => {
        Swal.fire({
          title: 'Houve um erro',
          text: 'Mais informações ',
          icon: 'error',
        });
        console.log(erro);
      },
    });
  }
  deleteById(periodo: Periodo) {
    Swal.fire({
      title: 'Tem certeza que quer excluir a função ' + periodo.periodo + '?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Sim',
      denyButtonText: `Não (Cancelar)`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.periodoService.deleteById(periodo.idPeriodo).subscribe({
          next: (mensagem) => {
            this.findAll();
            Swal.fire({
              title: 'Sucesso',
              text: mensagem,
              icon: 'success',
            });
          },
          error: (erro) => {
            Swal.fire({
              title: 'Houve um erro',
              text: 'Mais informações no console',
              icon: 'error',
            });
            console.log(erro);
          },
        });
      }
    });
  }
  new() {
    this.periodoEdit = new Periodo();
    this.modalRef = this.modalService.open(this.modalPeriodoDetalhe); //usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  edit(periodo: Periodo) {
    this.periodoEdit = Object.assign({}, periodo);
    this.modalRef = this.modalService.open(this.modalPeriodoDetalhe); //usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }

  retornoDetalhe(periodo: Periodo) {
    this.findAll();
    this.modalRef.close();
  }
}
