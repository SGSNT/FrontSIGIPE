import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { Demanda } from '../../../models/demanda';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import { DemandaService } from '../../../services/demanda.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demandadetails',
  standalone: true,
  imports: [MdbFormsModule, MdbModalModule, FormsModule],
  templateUrl: './demandadetails.component.html',
  styleUrl: './demandadetails.component.scss'
})
export class DemandadetailsComponent {

  @Input('demanda') demanda : Demanda = new Demanda();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  demandaService = inject(DemandaService);

  router = inject (Router);
  router2 = inject(ActivatedRoute);

  modalService = inject(MdbModalService);
  @ViewChild('modalFuncao') modalFuncao !: TemplateRef<any>;
  modalRef!: MdbModalRef <any>;

  constructor() {
    let id = this.router2.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    } else {
      if (this.demanda.idDemanda > 0) this.findById(id);
    }
  }

  findById(id: number) {
    this.demandaService.findById(id).subscribe({
      next: (retorno) => {
        this.demanda = retorno;
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
  save() {
    if (this.demanda.idDemanda > 0) {
      this.demandaService.update(this.demanda, this.demanda.idDemanda).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/demanda'], {
            state: { demandaNova: this.demanda },
          });
          this.retorno.emit(this.demanda);
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
    } else {
      this.demandaService.save(this.demanda).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/demanda'], {
            state: { demandaNova: this.demanda },
          });
          this.retorno.emit(this.demanda);
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
  }
}
