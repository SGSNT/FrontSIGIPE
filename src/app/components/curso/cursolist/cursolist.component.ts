import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { CursodetailsComponent } from '../cursodetails/cursodetails.component';
import { Curso } from '../../../models/curso';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-cursolist',
  standalone: true,
  imports: [CursodetailsComponent],
  templateUrl: './cursolist.component.html',
  styleUrl: './cursolist.component.scss'
})
export class CursolistComponent {
  lista: Curso[] = [];
  cursoEdit: Curso = new Curso();
  
  modalService = inject(MdbModalService); 
  @ViewChild("modalCursoDetalhe") modalCursoDetalhe!: TemplateRef<any>; 
  modalRef!: MdbModalRef<any>; 

  cursoService = inject(CursoService);

  constructor(){
    this.findAll();
  }

  findAll(){
    this.cursoService.findAll().subscribe(
      {
        next: listaService =>{
          this.lista = listaService;
        },
        error: erro =>{
          Swal.fire({
            title: "Houve um erro",
            text: "Mais informações ",
            icon: "error"
          });
          console.log(erro);
        }
      }
    );
  }
  deleteById(curso: Curso){
    Swal.fire({
      title: "Tem certeza que quer excluir a função "+curso.nome+"?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não (Cancelar)`
    }).then((result) => {
      if (result.isConfirmed) {
        this.cursoService.delete(curso.idCurso).subscribe(
          {
            next: mensagem =>{
              this.findAll();
              Swal.fire({
                title: "Sucesso",
                text: mensagem,
                icon: "success"
              });
            },
            error: erro =>{
              Swal.fire({
                title: "Houve um erro",
                text: "Mais informações no console",
                icon: "error"
              });
              console.log(erro);
            }
          }
        );
      }
    });
  }
  new(){
    this.cursoEdit = new Curso();
    this.modalRef = this.modalService.open(this.modalCursoDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  edit(curso: Curso){
    this.cursoEdit = Object.assign({}, curso);
    this.modalRef = this.modalService.open(this.modalCursoDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }

  retornoDetalhe(curso: Curso){
    this.findAll();
    this.modalRef.close();
  }
}
