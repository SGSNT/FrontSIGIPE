import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Demanda } from '../../../models/demanda';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { DemandaService } from '../../../services/demanda.service';
import Swal from 'sweetalert2';
import { DemandadetailsComponent } from '../demandadetails/demandadetails.component';

@Component({
  selector: 'app-demandalist',
  standalone: true,
  imports: [DemandadetailsComponent],
  templateUrl: './demandalist.component.html',
  styleUrl: './demandalist.component.scss'
})
export class DemandalistComponent {

  lista: Demanda[] = [];
  demandaEdit: Demanda = new Demanda;

  modalService = inject(MdbModalService); 
  @ViewChild("modalDemandaDetalhe") modalDemandaDetalhe!: TemplateRef<any>; 
  modalRef!: MdbModalRef<any>; 

  demandaService= inject(DemandaService);

  constructor(){
    this.findAll();
  }

  
  findAll(){
    this.demandaService.findAll().subscribe(
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
  deleteById(demanda: Demanda){
    Swal.fire({
      title: "Tem certeza que quer excluir a demanda?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não`
    }).then((result) => {
      if (result.isConfirmed) {
        this.demandaService.delete(demanda.idDemanda).subscribe(
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
    this.demandaEdit = new Demanda();
    this.modalRef = this.modalService.open(this.modalDemandaDetalhe);
  }
  edit(demanda: Demanda){
    this.demandaEdit = Object.assign({}, demanda);
    this.modalRef = this.modalService.open(this.modalDemandaDetalhe);
  }

  retornoDetalhe(demanda:Demanda){
    this.findAll();
    this.modalRef.close();
  }
}
