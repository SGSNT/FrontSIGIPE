import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { CoordenadorextensaodetailsComponent } from '../coordenadorextensaodetails/coordenadorextensaodetails.component';
import { Coordenadorextensao } from '../../../models/coordenadorextensao';
import { CoordenadorextensaoService } from '../../../services/coordenadorextensao.service';

@Component({
  selector: 'app-coordenadorextensaolist',
  standalone: true,
  imports: [CoordenadorextensaodetailsComponent, MdbModalModule],
  templateUrl: './coordenadorextensaolist.component.html',
  styleUrl: './coordenadorextensaolist.component.scss'
})
export class CoordenadorextensaolistComponent {
  lista: Coordenadorextensao[] = [];
  coordenadorExtensaoEdit: Coordenadorextensao = new Coordenadorextensao();
  
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalCoordenadorExtensaoDetalhe") modalCoordenadorExtensaoDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  coordenadorExtensaoService = inject(CoordenadorextensaoService);

  constructor(){
    this.findAll();
  }

  findAll(){
    this.coordenadorExtensaoService.findAll().subscribe(
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
  deleteById(coordenadorExtensao: Coordenadorextensao){
    Swal.fire({
      title: "Tem certeza que quer excluir a função "+coordenadorExtensao.nome+"?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não (Cancelar)`
    }).then((result) => {
      if (result.isConfirmed) {
        this.coordenadorExtensaoService.delete(coordenadorExtensao.idPessoa).subscribe(
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
    this.coordenadorExtensaoEdit = new Coordenadorextensao();
    this.modalRef = this.modalService.open(this.modalCoordenadorExtensaoDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  edit(coordenadorExtensao: Coordenadorextensao){
    this.coordenadorExtensaoEdit = Object.assign({}, coordenadorExtensao);
    this.modalRef = this.modalService.open(this.modalCoordenadorExtensaoDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }

  retornoDetalhe(coordenadorExtensao: Coordenadorextensao){
    this.findAll();
    this.modalRef.close();
  }

}
