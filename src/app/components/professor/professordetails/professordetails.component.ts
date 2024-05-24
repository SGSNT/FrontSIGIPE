import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Professor } from '../../../models/professor';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import { ProfessorService } from '../../../services/professor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-professordetails',
  standalone: true,
  imports: [MdbFormsModule, MdbModalModule, FormsModule],
  templateUrl: './professordetails.component.html',
  styleUrl: './professordetails.component.scss'
})
export class ProfessordetailsComponent {
  @Input('professor') professor: Professor = new Professor();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  professorService = inject(ProfessorService);

  router = inject(Router);
  router2 = inject(ActivatedRoute);
  
  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild("modalPessoas") modalPessoas!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS
  
  constructor(){}

  save(){
    if(this.professor.idPessoa>0){
      this.professorService.update(this.professor, this.professor.idPessoa).subscribe(
        {
          next: mensagem =>{
            Swal.fire({
              title: "Sucesso",
              text: mensagem,
              icon: "success"
            });
            this.router.navigate(['admin/professor'], { state: { professorNova: this.professor } });
            this.retorno.emit(this.professor);
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
      this.professorService.save(this.professor).subscribe(
        {
          next: mensagem=>{
            Swal.fire({
              title: "Sucesso",
              text: mensagem,
              icon: "success"
            });
            this.router.navigate(['admin/professor'], { state: { professorNova: this.professor } });
            this.retorno.emit(this.professor);
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
