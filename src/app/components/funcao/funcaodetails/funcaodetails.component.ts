import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Funcao } from '../../../models/funcao';
import { Router } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';

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

  router = inject(Router);
  
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalPessoas") modalPessoas!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS
  
  constructor(){}

  save(){
    this.retorno.emit(this.funcao);
    this.router.navigate(['admin/editoras'])
  }

  abrirModalPessoas(){
    this.modalService.open(this.modalPessoas);
  }
}
