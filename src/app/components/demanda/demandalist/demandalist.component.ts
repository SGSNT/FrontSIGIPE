import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { Demanda } from '../../../models/demanda';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Instituicao } from '../../../models/instituicao';
import { Tipoinstituicao } from '../../../models/tipoinstituicao';
import { Demandante } from '../../../models/demandante';
import { Statusdemanda } from '../../../models/statusdemanda';
import { DemandaService } from '../../../services/demanda.service';
import Swal from 'sweetalert2';
import { DemandadetailsComponent } from '../demandadetails/demandadetails.component';


@Component({
  selector: 'app-demandalist',
  standalone: true,
  imports: [MdbModalModule, DemandadetailsComponent],
  templateUrl: './demandalist.component.html',
  styleUrl: './demandalist.component.scss'
})
export class DemandalistComponent {
  /*lista: Demanda[] = [];
  demandaEdit: Demanda = new Demanda(
    0,0,"","","","",[], new Instituicao(
      0,'','','','','', new Tipoinstituicao(
        0,  '', []
      ), [], []
    ), new Demandante(
      0, '', '', '', new Instituicao(
        0,'','','','','', new Tipoinstituicao(
          0,  '', []
        ), [], []
      ), []
    ), new Statusdemanda(
      0, '', []
    ), []
  );

  //ELEMENTOS DA MODAL
  modalService = inject(MdbModalService); // para conseguir abrir a modal
  @ViewChild("modalDemandaDetalhe") modalDemandaDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  demandaService = inject(DemandaService);

  constructor() {
    this.listAll();

    let demandaNovo = history.state.demandaNovo;
    let demandaEditado = history.state.demandaEditado;

    if (demandaNovo != null) {
      demandaNovo.id = 555;
      this.lista.push(demandaNovo);
    }

    if (demandaEditado != null) {
      let indice = this.lista.findIndex((x) => {
        return x.id == demandaEditado.id;
      });
      this.lista[indice] = demandaEditado;
    }
  }

  listAll(){

    this.demandaService.listAll().subscribe({
      next: lista => { //quando o back retornar o que se espera
        this.lista = lista;
      },
      error: erro => { //quando ocorrer qualquer erro (badrequest, exceptions..)
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });

  }

  deleteById(Demanda: Demanda) {
    Swal.fire({
      title: 'Tem certeza que deseja deletar este registro?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {


        this.demandaService.delete(Demanda.id).subscribe({
          next: mensagem => { //quando o back retornar o que se espera
            Swal.fire({
              title: mensagem,
              icon: 'success',
              confirmButtonText: 'Ok',
            });

            this.listAll();
          },
          error: erro => { //quando ocorrer qualquer erro (badrequest, exceptions..)
            Swal.fire({
              title: 'Ocorreu um erro',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        });


      }
    });
  }

  new(){
    this.demandaEdit = new Demanda(
      0,0,"","","","",[], new Instituicao(
        0,'','','','','', new Tipoinstituicao(
          0,  '', []
        ), [], []
      ), new Demandante(
        0, '', '', '', new Instituicao(
          0,'','','','','', new Tipoinstituicao(
            0,  '', []
          ), [], []
        ), []
      ), new Statusdemanda(
        0, '', []
      ), []
    );
    this.modalRef = this.modalService.open(this.modalDemandaDetalhe);
  }

  edit(Demanda: Demanda){
    this.demandaEdit = Object.assign({}, Demanda); //clonando pra evitar referência de objeto
    this.modalRef = this.modalService.open(this.modalDemandaDetalhe);
  }

  retornoDetalhe(Demanda: Demanda){
    this.listAll();
    this.modalRef.close();
  }*/
  lista: Demanda[] = [];
}
