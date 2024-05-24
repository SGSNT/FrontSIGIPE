import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Aluno } from '../../../models/aluno';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../../../services/aluno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alunodetails',
  standalone: true,
  imports: [MdbFormsModule, MdbModalModule, FormsModule],
  templateUrl: './alunodetails.component.html',
  styleUrl: './alunodetails.component.scss',
})
export class AlunodetailsComponent {
  @Input('aluno') aluno: Aluno = new Aluno();
  @Output('retorno') retorno: EventEmitter<any> = new EventEmitter();

  alunoService = inject(AlunoService);

  router = inject(Router);
  router2 = inject(ActivatedRoute);

  modalService = inject(MdbModalService); //eu conseguir abrir a modal... pelo TS
  @ViewChild('modalPessoas') modalPessoas!: TemplateRef<any>; //enxergar o bloco de html da modal
  modalRef!: MdbModalRef<any>; //conseguir fechar a modal aberta pelo TS

  constructor() {}

  save() {
    if (this.aluno.idPessoa > 0) {
      this.alunoService.update(this.aluno, this.aluno.idPessoa).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/aluno'], {
            state: { alunoNova: this.aluno },
          });
          this.retorno.emit(this.aluno);
        },
        error: (erro) => {
          Swal.fire({
            title: 'Houve um erro',
            text: 'Mais informações ',
            icon: 'error',
          });
          console.log(erro);
        },
      });
    } else {
      this.alunoService.save(this.aluno).subscribe({
        next: (mensagem) => {
          Swal.fire({
            title: 'Sucesso',
            text: mensagem,
            icon: 'success',
          });
          this.router.navigate(['admin/aluno'], {
            state: { alunoNova: this.aluno },
          });
          this.retorno.emit(this.aluno);
        },
        error: (erro) => {
          Swal.fire({
            title: 'Houve um erro',
            text: 'Mais informações ',
            icon: 'error',
          });
          console.log(erro);
        },
      });
    }
  }
}
