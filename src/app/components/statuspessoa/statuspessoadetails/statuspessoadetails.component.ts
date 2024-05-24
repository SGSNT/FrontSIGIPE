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
import { Statuspessoa } from '../../../models/statuspessoa';
import { StatuspessoaService } from '../../../services/statuspessoa.service';

@Component({
  selector: 'app-statuspessoadetails',
  standalone: true,
  imports: [MdbFormsModule, MdbModalModule, FormsModule, FuncaolistComponent],
  templateUrl: './statuspessoadetails.component.html',
  styleUrl: './statuspessoadetails.component.scss',
})
export class StatuspessoadetailsComponent {
  @Input('statusPessoa') statusPessoa: Statuspessoa = new Statuspessoa();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  statusPessoaService = inject(StatuspessoaService);

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
      if (this.statusPessoa.idStatusPessoa > 0) this.findById(id);
    }
  }

  findById(id: number) {
    this.statusPessoaService.findById(id).subscribe({
      next: (retorno) => {
        this.statusPessoa = retorno;
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
    if (this.statusPessoa.idStatusPessoa > 0) {
      this.statusPessoaService
        .update(this.statusPessoa, this.statusPessoa.idStatusPessoa)
        .subscribe({
          next: (mensagem) => {
            Swal.fire({
              title: 'Sucesso',
              text: mensagem,
              icon: 'success',
            });
            this.router.navigate(['admin/statusPessoa'], {
              state: { statusPessoaNova: this.statusPessoa },
            });
            this.retorno.emit(this.statusPessoa);
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
      this.statusPessoaService.save(this.statusPessoa).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/statusPessoa'], {
            state: { statusPessoaNova: this.statusPessoa },
          });
          this.retorno.emit(this.statusPessoa);
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
