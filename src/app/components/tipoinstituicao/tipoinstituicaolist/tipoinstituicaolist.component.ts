import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Tipoinstituicao } from '../../../models/tipoinstituicao';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { TipoinstituicaoService } from '../../../services/tipoinstituicao.service';
import Swal from 'sweetalert2';
import { TipoinstituicaodetailsComponent } from '../tipoinstituicaodetails/tipoinstituicaodetails.component';

@Component({
  selector: 'app-tipoinstituicaolist',
  standalone: true,
  imports: [TipoinstituicaodetailsComponent],
  templateUrl: './tipoinstituicaolist.component.html',
  styleUrl: './tipoinstituicaolist.component.scss'
})
export class TipoinstituicaolistComponent {

  lista: Tipoinstituicao[] = [];
  tipoInstituicaoEdit: Tipoinstituicao = new Tipoinstituicao;

  modalService = inject(MdbModalService); 
  @ViewChild("modalTipoInstituicaoDetalhe") modalTipoInstituicaoDetalhe!: TemplateRef<any>; 
  modalRef!: MdbModalRef<any>; 

  tipoInstituicaoService = inject(TipoinstituicaoService);

  constructor(){
    this.findAll();
  }

  findAll(){
    this.tipoInstituicaoService.findAll().subscribe(
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

  deleteById(tipoInstituicao: Tipoinstituicao){
    Swal.fire({
      title: "Tem certeza que quer excluir?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não`
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoInstituicaoService.delete(tipoInstituicao.idTipoInstituicao).subscribe(
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
    this.tipoInstituicaoEdit = new Tipoinstituicao();
    this.modalRef = this.modalService.open(this.modalTipoInstituicaoDetalhe);
  }
  edit(tipoInstituicao: Tipoinstituicao){
    this.tipoInstituicaoEdit = Object.assign({}, tipoInstituicao);
    this.modalRef = this.modalService.open(this.modalTipoInstituicaoDetalhe);
  }
  
  retornoDetalhe(tipoInstituicao:Tipoinstituicao){
    this.findAll();
    this.modalRef.close();
  }
}
