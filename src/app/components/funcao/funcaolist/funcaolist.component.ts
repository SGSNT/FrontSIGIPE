import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Funcao } from '../../../models/funcao';
import { FuncaoService } from '../../../services/funcao.service';
import Swal from 'sweetalert2';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { FuncaodetailsComponent } from '../funcaodetails/funcaodetails.component';

@Component({
  selector: 'app-funcaolist',
  standalone: true,
  imports: [FuncaodetailsComponent, MdbModalModule],
  templateUrl: './funcaolist.component.html',
  styleUrl: './funcaolist.component.scss'
})
export class FuncaolistComponent {
  lista: Funcao[] = [];
  funcaoEdit: Funcao = new Funcao();
  
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalFuncaoDetalhe") modalFuncaoDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  funcaoService = inject(FuncaoService);

  constructor(){
    this.findAll();
  }

  findAll(){
    this.funcaoService.findAll().subscribe(
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
  deleteById(funcao: Funcao){
    Swal.fire({
      title: "Tem certeza que quer excluir a função "+funcao.nome+"?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Sim",
      denyButtonText: `Não (Cancelar)`
    }).then((result) => {
      if (result.isConfirmed) {
        this.funcaoService.delete(funcao.idFuncao).subscribe(
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
    this.funcaoEdit = new Funcao();
    this.modalRef = this.modalService.open(this.modalFuncaoDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  edit(funcao: Funcao){
    this.funcaoEdit = Object.assign({}, funcao);
    this.modalRef = this.modalService.open(this.modalFuncaoDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }

}
