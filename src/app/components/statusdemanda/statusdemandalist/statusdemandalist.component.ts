import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { StatusdemandadetailsComponent } from '../statusdemandadetails/statusdemandadetails.component';
import { Statusdemanda } from '../../../models/statusdemanda';
import { StatusdemandaService } from '../../../services/statusdemanda.service';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-statusdemandalist',
  standalone: true,
  imports: [StatusdemandadetailsComponent, MdbModalModule],
  templateUrl: './statusdemandalist.component.html',
  styleUrl: './statusdemandalist.component.scss'
})
export class StatusdemandalistComponent {
  lista: Statusdemanda[] = [];
  statusDemandaEdit: Statusdemanda = new Statusdemanda();
  
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalStatusDemandaDetalhe") modalStatusDemandaDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  statusDemandaService = inject(StatusdemandaService);

  constructor(){
    this.findAll();
  }

  findAll(){
    this.statusDemandaService.findAll().subscribe(
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
  deleteById(statusDemanda: Statusdemanda){
    Swal.fire({
      title: "Tem certeza que quer excluir a função "+statusDemanda.nome+"?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sim",
      denyButtonText: `Não (Cancelar)`
    }).then((result) => {
      if (result.isConfirmed) {
        this.statusDemandaService.delete(statusDemanda.idStatusDemanda).subscribe(
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
    this.statusDemandaEdit = new Statusdemanda();
    this.modalRef = this.modalService.open(this.modalStatusDemandaDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }
  edit(statusDemanda: Statusdemanda){
    this.statusDemandaEdit = Object.assign({}, statusDemanda);
    this.modalRef = this.modalService.open(this.modalStatusDemandaDetalhe);//usa modalService para abrir o trecho observado por modalDetalher e salva uma referência ao modal em modalRef
  }

  retornoDetalhe(statusDemanda: Statusdemanda){
    this.findAll();
    this.modalRef.close();
  }
}
