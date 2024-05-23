import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Funcao } from '../../../models/funcao';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import { FuncaoService } from '../../../services/funcao.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-funcaodetails',
  standalone: true,
  imports: [MdbFormsModule, MdbModalModule, FormsModule],
  templateUrl: './funcaodetails.component.html',
  styleUrl: './funcaodetails.component.scss'
})
export class FuncaodetailsComponent {
  @Input('funcao') funcao: Funcao = new Funcao();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  funcaoService = inject(FuncaoService);

  router = inject(Router);
  router2 = inject(ActivatedRoute);
  
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalPessoas") modalPessoas!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS
  
  constructor(){}

  save(){
    if(this.funcao.idFuncao>0){
      this.funcaoService.update(this.funcao, this.funcao.idFuncao).subscribe(
        {
          next: mensagem =>{
            Swal.fire({
              title: "Sucesso",
              text: mensagem,
              icon: "success"
            });
            this.router.navigate(['admin/carros'], { state: { funcaoNova: this.funcao } });
            this.retorno.emit(this.funcao);
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

    }
  }

  abrirModalPessoas(){
    this.modalService.open(this.modalPessoas);
  }
}
