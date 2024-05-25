import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Demandante } from '../../../models/demandante';
import { DemandanteService } from '../../../services/demandante.service';
import Swal from 'sweetalert2';
import { DemandantelistComponent } from '../demandantelist/demandantelist.component';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-demandantedetails',
  standalone: true,
  imports: [DemandantelistComponent,FormsModule,MdbFormsModule],
  templateUrl: './demandantedetails.component.html',
  styleUrl: './demandantedetails.component.scss'
})
export class DemandantedetailsComponent {

  @Input("Demandante") Demandante: Demandante = new Demandante(0,'','','');
  @Output("return") return = new EventEmitter<any>();
  router = inject(ActivatedRoute);
  router2 = inject(Router);

  modalService = inject(MdbModalService);
  modalRef!: MdbModalRef<any>;

  demandanteService = inject(DemandanteService);

  constructor(){

    let id = this.router.snapshot.params['id'];
    if(id > 0){
      this.findById(id);
    }else{
      if(this.Demandante.idDemandante > 0)
        this.findById(id);
    }
  }

  findById(id: number){

    this.demandanteService.findById(id).subscribe({
      next: retorno => {
        this.Demandante = retorno;
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

    if(this.Demandante.idDemandante > 0){

      this.demandanteService.update(this.Demandante,this.Demandante.idDemandante).subscribe({

        next: mensagem => {

          Swal.fire({

            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',

          });

            this.router2.navigate(['/demandantelist'], {state: {demandanteEdit: this.Demandante}});
            this.return.emit(this.Demandante);
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

      this.demandanteService.save(this.Demandante).subscribe({

        next: mensagem => {
          
          Swal.fire({

            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.router2.navigate(['/demandantelist'], {state: {demandanteEdit: this.Demandante}});
          this.return.emit(this.Demandante);
        }
      });
    }

  }
}

