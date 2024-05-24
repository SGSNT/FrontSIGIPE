import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Coordenadorcurso } from '../../../models/coordenadorcurso';
import { CoordenadorcursoService } from '../../../services/coordenadorcurso.service';

@Component({
  selector: 'app-coordenadorcursodetails',
  standalone: true,
  imports: [MdbFormsModule, MdbModalModule, FormsModule],
  templateUrl: './coordenadorcursodetails.component.html',
  styleUrl: './coordenadorcursodetails.component.scss'
})
export class CoordenadorcursodetailsComponent {
  @Input('coordenadorCurso') coordenadorCurso: Coordenadorcurso = new Coordenadorcurso();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  coordenadorCursoService = inject(CoordenadorcursoService);

  router = inject(Router);
  router2 = inject(ActivatedRoute);
  
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalPessoas") modalPessoas!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS
  
  constructor(){}

  save(){
    if(this.coordenadorCurso.idPessoa>0){
      this.coordenadorCursoService.update(this.coordenadorCurso, this.coordenadorCurso.idPessoa).subscribe(
        {
          next: mensagem =>{
            Swal.fire({
              title: "Sucesso",
              text: mensagem,
              icon: "success"
            });
            this.router.navigate(['admin/coordenadorCurso'], { state: { coordenadorCursoNova: this.coordenadorCurso } });
            this.retorno.emit(this.coordenadorCurso);
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
      this.coordenadorCursoService.save(this.coordenadorCurso).subscribe(
        {
          next: mensagem=>{
            Swal.fire({
              title: "Sucesso",
              text: mensagem,
              icon: "success"
            });
            this.router.navigate(['admin/coordenadorCurso'], { state: { coordenadorCursoNova: this.coordenadorCurso } });
            this.retorno.emit(this.coordenadorCurso);
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
