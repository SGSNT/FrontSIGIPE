import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { Demanda } from '../../../models/demanda';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { DemandaService } from '../../../services/demanda.service';
import Swal from 'sweetalert2';
import { Instituicao } from '../../../models/instituicao';
import { Tipoinstituicao } from '../../../models/tipoinstituicao';
import { Demandante } from '../../../models/demandante';
import { Statusdemanda } from '../../../models/statusdemanda';

@Component({
  selector: 'app-demandadetails',
  standalone: true,
  imports: [],
  templateUrl: './demandadetails.component.html',
  styleUrl: './demandadetails.component.scss'
})
export class DemandadetailsComponent {


  @Input("demanda") demanda: Demanda = new Demanda(
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
  @Output("retorno") retorno = new EventEmitter<any>();
  router = inject(ActivatedRoute);
  router2 = inject(Router);

    //ELEMENTOS DA MODAL
    modalService = inject(MdbModalService); // para conseguir abrir a modal
    @ViewChild("modalMarcas") modalMarcas!: TemplateRef<any>;
    @ViewChild("modalAcessorios") modalAcessorios!: TemplateRef<any>;
    modalRef!: MdbModalRef<any>;

  demandaService = inject(DemandaService);

  constructor(){
    let id = this.router.snapshot.params['id'];
    if(id > 0){
      this.findById(id);
    }else{
      if(this.demanda.id > 0)
        this.findById(id);
    }
  }

  findById(id: number){

    this.demandaService.findById(id).subscribe({
      next: retorno => {
        this.demanda = retorno;
      },
      error: erro => {
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });

  }

  save(){
    if(this.demanda.id > 0){

      this.demandaService.update(this.demanda, this.demanda.id).subscribe({
        next: mensagem => {
          Swal.fire({
            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.router2.navigate(['admin/demandas'], { state: { demandaEditado: this.demanda } });
          this.retorno.emit(this.demanda);
        },
        error: erro => {
          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      });

    }else{

      this.demandaService.save(this.demanda).subscribe({
        next: mensagem => {
          Swal.fire({
            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.router2.navigate(['admin/demandas'], { state: { demandaNovo: this.demanda } });
          this.retorno.emit(this.demanda);
        },
        error: erro => {
          Swal.fire({
            title: 'Ocorreu um erro',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      });

    }


  }




  buscarMarca(){
    this.modalRef = this.modalService.open(this.modalMarcas, {modalClass: 'modal-lg'});
  }

  buscarAcessorio(){
    this.modalRef = this.modalService.open(this.modalAcessorios, {modalClass: 'modal-lg'});
  }
/*
  retornoMarca(marca: Marca){
    this.demanda.marca = marca;
    this.modalRef.close();
  }

  retornoAcessorio(acessorio: Acessorio){
    if(this.demanda.acessorios == null)
      this.demanda.acessorios = [];

    this.demanda.acessorios.push(acessorio);
    this.modalRef.close();
  }


  desvincularAcessorioDemanda(acessorio: Acessorio){
    let posicao = this.demanda.acessorios.findIndex(x => {return x.id == acessorio.id});
    this.demanda.acessorios.splice(posicao, 1);
  }*/

}
