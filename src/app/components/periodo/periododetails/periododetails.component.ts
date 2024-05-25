import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Periodo } from '../../../models/periodo';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import { PeriodoService } from '../../../services/periodo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-periododetails',
  standalone: true,
  imports: [MdbFormsModule, MdbModalModule, FormsModule],
  templateUrl: './periododetails.component.html',
  styleUrl: './periododetails.component.scss',
})
export class PeriododetailsComponent {
  @Input('periodo') periodo: Periodo = new Periodo();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  periodoService = inject(PeriodoService);

  router = inject(Router);
  router2 = inject(ActivatedRoute);

  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild('modalPessoas') modalPessoas!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  constructor() {}

  save() {
    if (this.periodo.idPeriodo > 0) {
      this.periodoService
        .update(this.periodo, this.periodo.idPeriodo)
        .subscribe({
          next: (mensagem) => {
            Swal.fire({
              title: 'Sucesso',
              text: mensagem,
              icon: 'success',
            });
            this.router.navigate(['admin/periodo'], {
              state: { periodoNova: this.periodo },
            });
            this.retorno.emit(this.periodo);
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
    } else {
      this.periodoService.save(this.periodo).subscribe({
        next: mensagem => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/periodo'], {
            state: { periodoNova: this.periodo },
          });
          this.retorno.emit(this.periodo);
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
  }
}
