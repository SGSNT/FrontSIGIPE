import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { DemandantedetailsComponent } from '../demandantedetails/demandantedetails.component';
import { Demandante } from '../../../models/demandante';
import { DemandanteService } from '../../../services/demandante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demandantelist',
  standalone: true,
  imports: [RouterLink,MdbModalModule,DemandantedetailsComponent],
  templateUrl: './demandantelist.component.html',
  styleUrl: './demandantelist.component.scss'
})
export class DemandantelistComponent {

  lista: Demandante[]=[];
  demandanteEdit: Demandante = new Demandante();

  modalService = inject(MdbModalService);
  @ViewChild("modalDemandanteDetalhe") modalDemandanteDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  demandanteService = inject(DemandanteService);

  constructor(){

    this.findAll();

    let novoDemandante = history.state.novoDemandante;
    let editDemandante = history.state.editDemandante;

    if(novoDemandante != null){

      novoDemandante.id = 555;
      this.lista.push(novoDemandante);

    }

    if(editDemandante != null){

      let indice = this.lista.findIndex((i) => {
        return i.idDemandante == editDemandante.id;
      })

      this.lista[indice] = editDemandante;
    }
  }
 
  findAll(){

    this.demandanteService.findAll().subscribe({
      next:lista => {
        this.lista = lista;
      },

      error: erro => {

        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    });
  }

  delete(demandante: Demandante){

    Swal.fire({

      title: 'Tem certeza que deseja excluir este demandante ?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: 'Não',
    }).then((result) => {

      if(result.isConfirmed){

        this.demandanteService.delete(demandante.idDemandante).subscribe({

          next: mensagem => {

            Swal.fire({


              title: mensagem,
              icon: 'success',
              confirmButtonText: 'OK',
            });

            this.findAll();

            },

            error: erro => {

              Swal.fire({


                title: 'Ocorreu um erro',
                icon: 'error',
                confirmButtonText: 'OK',
              
              });
            }
            
          });

        }
    })

  }


  save(){

     this.demandanteEdit = new Demandante();
     this.modalRef = this.modalService.open(this.modalDemandanteDetalhe);
  }
  

 update(demandante: Demandante){

  this.demandanteEdit = Object.assign({},demandante);
  this.modalRef = this.modalService.open(this.modalDemandanteDetalhe);
 }

 returnDetail(demandante: Demandante){

  this.findAll();
  this.modalRef.close();
 }

}



