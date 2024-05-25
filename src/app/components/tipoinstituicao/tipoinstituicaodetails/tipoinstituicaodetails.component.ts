import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { Tipoinstituicao } from '../../../models/tipoinstituicao';
import { TipoinstituicaoService } from '../../../services/tipoinstituicao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-tipoinstituicaodetails',
  standalone: true,
  imports: [MdbFormsModule, MdbModalModule, FormsModule],
  templateUrl: './tipoinstituicaodetails.component.html',
  styleUrl: './tipoinstituicaodetails.component.scss'
})
export class TipoinstituicaodetailsComponent {

  @Input('tipoinstituicao') tipoInstituicao : Tipoinstituicao = new Tipoinstituicao();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  tipoInstituicaoService = inject(TipoinstituicaoService);

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
      if (this.tipoInstituicao.idTipoInstituicao > 0) this.findById(id);
    }
  }

  findById(id: number) {
    this.tipoInstituicaoService.findById(id).subscribe({
      next: (retorno) => {
        this.tipoInstituicao = retorno;
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
    if (this.tipoInstituicao.idTipoInstituicao > 0) {
      this.tipoInstituicaoService.update(this.tipoInstituicao, this.tipoInstituicao.idTipoInstituicao).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/tipoInstituicao'], {
            state: { tipoInstituicaoNova: this.tipoInstituicao },
          });
          this.retorno.emit(this.tipoInstituicao);
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
      this.tipoInstituicaoService.save(this.tipoInstituicao).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/tipoInstituicao'], {
            state: { tipoInstituicaoNova: this.tipoInstituicao },
          });
          this.retorno.emit(this.tipoInstituicao);
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
