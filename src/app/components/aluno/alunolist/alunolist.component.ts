import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { AlunodetailsComponent } from '../../aluno/alunodetails/alunodetails.component';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Aluno } from '../../../models/aluno';
import { AlunoService } from '../../../services/aluno.service';
@Component({
  selector: 'app-alunolist',
  standalone: true,
  imports: [AlunodetailsComponent],
  templateUrl: './alunolist.component.html',
  styleUrl: './alunolist.component.scss'
})
export class AlunolistComponent {
  lista: Aluno[] = [];
  alunoEdit: Aluno = new Aluno();
  
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalAlunoDetalhe") modalAlunoDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  alunoService = inject(AlunoService);

  constructor(){
    this.findAll();
  }

  findAll(){
    this.alunoService.findAll().subscribe(
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
  deleteById(aluno: Aluno){
    Swal.fire({
      title: "Tem certeza que quer excluir a função "+aluno.nome+"?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não (Cancelar)`
    }).then((result) => {
      if (result.isConfirmed) {
        this.alunoService.delete(aluno.idPessoa).subscribe(
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
    this.alunoEdit = new Aluno();
    this.modalRef = this.modalService.open(this.modalAlunoDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  edit(aluno: Aluno){
    this.alunoEdit = Object.assign({}, aluno);
    this.modalRef = this.modalService.open(this.modalAlunoDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }

  retornoDetalhe(aluno: Aluno){
    this.findAll();
    this.modalRef.close();
  }

}
