import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { Curso } from '../../../models/curso';
import { CursoService } from '../../../services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-cursodetails',
  standalone: true,
  imports: [MdbFormsModule, MdbModalModule, FormsModule],
  templateUrl: './cursodetails.component.html',
  styleUrl: './cursodetails.component.scss'
})
export class CursodetailsComponent {
  @Input('curso') curso: Curso = new Curso();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  cursoService = inject(CursoService);

  router = inject(Router);
  router2 = inject(ActivatedRoute);

  modalService = inject(MdbModalService); 
  @ViewChild('modalFuncao') modalFuncao!: TemplateRef<any>; 
  modalRef!: MdbModalRef<any>;

  constructor() {
    let id = this.router2.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    } else {
      if (this.curso.idCurso > 0) this.findById(id);
    }
  }

  findById(id: number) {
    this.cursoService.findById(id).subscribe({
      next: (retorno) => {
        this.curso = retorno;
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
    if (this.curso.idCurso > 0) {
      this.cursoService.update(this.curso, this.curso.idCurso).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/curso'], {
            state: { cursoNova: this.curso },
          });
          this.retorno.emit(this.curso);
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
      this.cursoService.save(this.curso).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/curso'], {
            state: { cursoNova: this.curso },
          });
          this.retorno.emit(this.curso);
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
