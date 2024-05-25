import { Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { InstituicaolistComponent } from '../instituicaolist/instituicaolist.component';
import { Instituicao } from '../../models/instituicao';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { InstituicaoService } from '../../services/instituicao.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instituicaodetails',
  standalone: true,
  imports: [InstituicaolistComponent,FormsModule,MdbFormsModule],
  templateUrl: './instituicaodetails.component.html',
  styleUrl: './instituicaodetails.component.scss'
})
export class InstituicaodetailsComponent {

  @Input("Instituicao") Instituicao: Instituicao = new Instituicao();
  @Output("return") return = new EventEmitter<any>();
  router = inject(ActivatedRoute);
  router2 = inject(Router);

  modalService = inject(MdbModalService);
  modalRef!: MdbModalRef<any>;

  instituicaoService = inject(InstituicaoService);

  constructor(){

    let id = this.router.snapshot.params['id'];
    if(id > 0){
      this.findById(id);
    }else{
      if(this.Instituicao.idInstituicao > 0)
        this.findById(id);
    }
  }

  findById(id: number){

    this.instituicaoService.findById(id).subscribe({
      next: retorno => {
        this.Instituicao = retorno;
      },
      error: erro => {
        Swal.fire({
          title: 'Ocorreu um erro',
          icon: 'error',
          confirmButtonText:'Ok',
        });
      }
    })
  }

  save(){

    if(this.Instituicao.idInstituicao > 0){

      this.instituicaoService.update(this.Instituicao,this.Instituicao.idInstituicao).subscribe({

        next: mensagem => {

          Swal.fire({

            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',

          });

            this.router2.navigate(['/instituicaolist'], {state: {instituicaoEdit: this.Instituicao}});
            this.return.emit(this.Instituicao);
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

      this.instituicaoService.save(this.Instituicao).subscribe({

        next: mensagem => {
          
          Swal.fire({

            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.router2.navigate(['/instituicaolist'], {state: {instituicaoEdit: this.Instituicao}});
          this.return.emit(this.Instituicao);
        }
      });
    }

  }
}
