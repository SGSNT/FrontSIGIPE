import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { ProfessordetailsComponent } from '../../professor/professordetails/professordetails.component';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Professor } from '../../../models/professor';
import { ProfessorService } from '../../../services/professor.service';

@Component({
  selector: 'app-professorlist',
  standalone: true,
  imports: [ProfessordetailsComponent, MdbModalModule],
  templateUrl: './professorlist.component.html',
  styleUrl: './professorlist.component.scss'
})
export class ProfessorlistComponent {
  lista: Professor[] = [];
  professorEdit: Professor = new Professor();
  
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalProfessorDetalhe") modalProfessorDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  professorService = inject(ProfessorService);

  constructor(){
    this.findAll();
  }

  findAll(){
    this.professorService.findAll().subscribe(
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
  deleteById(professor: Professor){
    Swal.fire({
      title: "Tem certeza que quer excluir a função "+professor.nome+"?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não (Cancelar)`
    }).then((result) => {
      if (result.isConfirmed) {
        this.professorService.delete(professor.idPessoa).subscribe(
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
    this.professorEdit = new Professor();
    this.modalRef = this.modalService.open(this.modalProfessorDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  edit(professor: Professor){
    this.professorEdit = Object.assign({}, professor);
    this.modalRef = this.modalService.open(this.modalProfessorDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }

  retornoDetalhe(professor: Professor){
    this.findAll();
    this.modalRef.close();
  }
}
