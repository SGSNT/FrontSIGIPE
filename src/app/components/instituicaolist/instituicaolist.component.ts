import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { InstituicaodetailsComponent } from '../instituicaodetails/instituicaodetails.component';
import { Instituicao } from '../../models/instituicao';
import { InstituicaoService } from '../../services/instituicao.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instituicaolist',
  standalone: true,
  imports: [RouterLink,MdbModalModule,InstituicaodetailsComponent],
  templateUrl: './instituicaolist.component.html',
  styleUrl: './instituicaolist.component.scss'
})
export class InstituicaolistComponent {

  lista: Instituicao[]=[];
  instituicaoEdit: Instituicao = new Instituicao(0,'','','','','');

  modalService = inject(MdbModalService);
  @ViewChild("modalInstituicaoDetalhe") modalInstituicaoDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  instituicaoService = inject(InstituicaoService);

  constructor(){

    this.listAll();

    let novaInstituicao = history.state.novaInstituicao;
    let editInstituicao = history.state.editInstituicao;

    if(novaInstituicao != null){

      novaInstituicao.id = 555;
      this.lista.push(novaInstituicao);

    }

    if(editInstituicao != null){

      let indice = this.lista.findIndex((i) => {
        return i.idInstituicao == editInstituicao.id;
      })

      this.lista[indice] = editInstituicao;
    }
  }

  listAll(){

    this.instituicaoService.listAll().subscribe({
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

  delete(instituicao: Instituicao){

    Swal.fire({

      title: 'Tem certeza que deseja excluir está  instituição ?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: 'Não',
    }).then((result) => {

      if(result.isConfirmed){

        this.instituicaoService.delete(instituicao.idInstituicao).subscribe({

          next: mensagem => {

            Swal.fire({


              title: mensagem,
              icon: 'success',
              confirmButtonText: 'OK',
            });

            this.listAll();

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

     this.instituicaoEdit = new Instituicao(0,'','','','','');
     this.modalRef = this.modalService.open(this.modalInstituicaoDetalhe);
  }
  

 update(instituicao: Instituicao){

  this.instituicaoEdit = Object.assign({},instituicao);
  this.modalRef = this.modalService.open(this.modalInstituicaoDetalhe);
 }

 retunDetail(instituicao: Instituicao){

  this.listAll();
  this.modalRef.close();
 }

}
