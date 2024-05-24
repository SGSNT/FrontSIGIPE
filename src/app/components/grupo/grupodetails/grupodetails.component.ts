import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { Grupo } from '../../../models/grupo';
import { GrupoService } from '../../../services/grupo.service';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-grupodetails',
  standalone: true,
  imports: [MdbFormsModule, MdbModalModule, FormsModule],
  templateUrl: './grupodetails.component.html',
  styleUrl: './grupodetails.component.scss',
})
export class GrupodetailsComponent {
  @Input('grupo') grupo: Grupo = new Grupo();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  grupoService = inject(GrupoService);

  router = inject(Router);
  router2 = inject(ActivatedRoute);

  modalService = inject(MdbModalService); 
  modalRef!: MdbModalRef<any>; 

  constructor() {
    let id = this.router2.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    } else {
      if (this.grupo.idGrupo > 0) this.findById(id);
    }
  }

  findById(id: number) {
    this.grupoService.findById(id).subscribe({
      next: (retorno) => {
        this.grupo = retorno;
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
    if (this.grupo.idGrupo > 0) {
      this.grupoService.update(this.grupo, this.grupo.idGrupo).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/grupo'], {
            state: { grupoNova: this.grupo },
          });
          this.retorno.emit(this.grupo);
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
      this.grupoService.save(this.grupo).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/grupo'], {
            state: { grupoNova: this.grupo },
          });
          this.retorno.emit(this.grupo);
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
