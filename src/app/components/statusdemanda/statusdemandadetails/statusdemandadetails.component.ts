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
import { ActivatedRoute, Router } from '@angular/router';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { FuncaolistComponent } from '../../funcao/funcaolist/funcaolist.component';
import { Statusdemanda } from '../../../models/statusdemanda';
import { StatusdemandaService } from '../../../services/statusdemanda.service';

@Component({
  selector: 'app-statusdemandadetails',
  standalone: true,
  imports: [MdbFormsModule, MdbModalModule, FormsModule, FuncaolistComponent],
  templateUrl: './statusdemandadetails.component.html',
  styleUrl: './statusdemandadetails.component.scss'
})
export class StatusdemandadetailsComponent {
  @Input('statusDemanda') statusDemanda: Statusdemanda = new Statusdemanda();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  statusDemandaService = inject(StatusdemandaService);

  router = inject(Router);
  router2 = inject(ActivatedRoute);

  // modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  // @ViewChild('modalFuncao') modalFuncao!: TemplateRef<any>; //enxergar o bloco de html da modal
  // modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  constructor() {
    let id = this.router2.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    } else {
      if (this.statusDemanda.idStatusDemanda > 0) this.findById(id);
    }
  }

  findById(id: number) {
    this.statusDemandaService.findById(id).subscribe({
      next: (retorno) => {
        this.statusDemanda = retorno;
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
    if (this.statusDemanda.idStatusDemanda > 0) {
      this.statusDemandaService.update(this.statusDemanda, this.statusDemanda.idStatusDemanda).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/statusDemanda'], {
            state: { statusDemandaNova: this.statusDemanda },
          });
          this.retorno.emit(this.statusDemanda);
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
      this.statusDemandaService.save(this.statusDemanda).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/statusDemanda'], {
            state: { statusDemandaNova: this.statusDemanda },
          });
          this.retorno.emit(this.statusDemanda);
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
