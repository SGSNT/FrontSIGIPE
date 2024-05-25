import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Grupo } from '../../../models/grupo';
import { GrupoService } from '../../../services/grupo.service';
import { GrupodetailsComponent } from '../grupodetails/grupodetails.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-grupolist',
  standalone: true,
  imports: [GrupodetailsComponent],
  templateUrl: './grupolist.component.html',
  styleUrl: './grupolist.component.scss'
})
export class GrupolistComponent {

  lista: Grupo[] = [];
  grupoEdit: Grupo = new Grupo();
  
  modalService = inject(MdbModalService); 
  @ViewChild("modalGrupoDetalhe") modalGrupoDetalhe!: TemplateRef<any>; 
  modalRef!: MdbModalRef<any>; 

  grupoService = inject(GrupoService);

  constructor(){
    this.findAll();
  }

  findAll(){
    this.grupoService.findAll().subscribe(
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
  deleteById(grupo: Grupo){
    Swal.fire({
      title: "Tem certeza que quer excluir a função "+grupo.nome+"?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não (Cancelar)`
    }).then((result) => {
      if (result.isConfirmed) {
        this.grupoService.delete(grupo.idGrupo).subscribe(
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
    this.grupoEdit = new Grupo();
    this.modalRef = this.modalService.open(this.modalGrupoDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  edit(grupo: Grupo){
    this.grupoEdit = Object.assign({}, grupo);
    this.modalRef = this.modalService.open(this.modalGrupoDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }

  retornoDetalhe(grupo: Grupo){
    this.findAll();
    this.modalRef.close();
  }
}
