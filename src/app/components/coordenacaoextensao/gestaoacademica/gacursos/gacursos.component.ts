import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Curso } from '../../../../models/curso';
import { CursoService } from '../../../../services/curso.service';
import Swal from 'sweetalert2';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ModalgacursosComponent } from './modalgacursos/modalgacursos.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';

@Component({
  selector: 'app-gacursos',
  standalone: true,
  imports: [
    MdbFormsModule,
    FormsModule,
    MdbModalModule,
    ModalgacursosComponent,
    MdbAccordionModule
  ],
  templateUrl: './gacursos.component.html',
  styleUrl: './gacursos.component.scss',
})
export class GacursosComponent {
  cursoService = inject(CursoService);
  modalService = inject(MdbModalService); //serve para eu conseguir abrir a modal... pelo TS

  cursos: Curso[] = [];
  cursoEdit!: Curso;
  @ViewChild('modalCadastrarCurso')
  modalCadastrarCurso!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  constructor() {
    this.findAll();
  }

  findAll() {
    this.cursoService.findAll().subscribe({
      next: (listaCursos) => {
        this.cursos = listaCursos;
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

  save() {
    this.cursoEdit = new Curso();
    this.modalRef = this.modalService.open(this.modalCadastrarCurso); //usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  update(curso: Curso){
    this.cursoEdit = Object.assign({}, curso);
    this.modalRef = this.modalService.open(this.modalCadastrarCurso); //usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  recarregaCursos(curso: Curso) {
    this.findAll();
    this.modalRef.close();
  }

  deleteById(curso: Curso) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você deseja excluir o curso ' + curso.nome,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cursoService.delete(curso.id).subscribe({
          next: (cursoDeletado) => {
            this.findAll();
            Swal.fire({
              title: "Curso salvo!",
              text: "Curso: " + cursoDeletado.nome + " deletado com sucesso.",
              icon: "success"
            });
          },
          error: (erro) => {
            console.clear();
            console.log(erro);
            Swal.fire({
              title: 'Ocorreu um erro',
              text: 'Mais informações no console da aplicação',
              icon: 'error',
            });
          },
        });
      }
    });
  }
  criarTurmas(){
    console.log("Sem implementação");
  }
}
