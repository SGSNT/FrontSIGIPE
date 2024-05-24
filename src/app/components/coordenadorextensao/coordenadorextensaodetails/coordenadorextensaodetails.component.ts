import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Coordenadorextensao } from '../../../models/coordenadorextensao';
import { CoordenadorextensaoService } from '../../../services/coordenadorextensao.service';

@Component({
  selector: 'app-coordenadorextensaodetails',
  standalone: true,
  imports: [MdbFormsModule, MdbModalModule, FormsModule],
  templateUrl: './coordenadorextensaodetails.component.html',
  styleUrl: './coordenadorextensaodetails.component.scss'
})
export class CoordenadorextensaodetailsComponent {
  @Input('coordenadorExtensao') coordenadorExtensao: Coordenadorextensao = new Coordenadorextensao();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  coordenadorExtensaoService = inject(CoordenadorextensaoService);

  router = inject(Router);
  router2 = inject(ActivatedRoute);
  
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalCoordenadorExtensaoDetalhe") modalCoordenadorExtensaoDetalhe!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS
  
  constructor(){}

  save(){
    if(this.coordenadorExtensao.idPessoa>0){
      this.coordenadorExtensaoService.update(this.coordenadorExtensao, this.coordenadorExtensao.idPessoa).subscribe(
        {
          next: mensagem =>{
            Swal.fire({
              title: "Sucesso",
              text: mensagem,
              icon: "success"
            });
            this.router.navigate(['admin/coordenadorExtensao'], { state: { coordenadorExtensaoNova: this.coordenadorExtensao } });
            this.retorno.emit(this.coordenadorExtensao);
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
    }else{
      this.coordenadorExtensaoService.save(this.coordenadorExtensao).subscribe(
        {
          next: mensagem=>{
            Swal.fire({
              title: "Sucesso",
              text: mensagem,
              icon: "success"
            });
            this.router.navigate(['admin/coordenadorExtensao'], { state: { coordenadorExtensaoNova: this.coordenadorExtensao } });
            this.retorno.emit(this.coordenadorExtensao);
          },
          error: erro=>{
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
  }

}
