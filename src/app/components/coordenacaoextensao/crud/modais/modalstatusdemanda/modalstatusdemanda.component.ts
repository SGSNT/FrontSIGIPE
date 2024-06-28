import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { StatusdemandaService } from '../../../../../services/statusdemanda.service';
import { Router } from '@angular/router';
import { Statusdemanda } from '../../../../../models/statusdemanda';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modalstatusdemanda',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './modalstatusdemanda.component.html',
  styleUrl: './modalstatusdemanda.component.scss'
})
export class ModalstatusdemandaComponent {
  statusdemandaService = inject(StatusdemandaService);
  router = inject(Router);

  @Input('status')
  status: Statusdemanda = new Statusdemanda();
  @Output('retorno')
  retorno: EventEmitter<any> = new EventEmitter();

  save() {
    // update
    if (this.status.id > 0) {
      this.statusdemandaService.update(this.status, this.status.id).subscribe({
        next: (objetoEditado) => {
          let mensagem = "Nome: " + objetoEditado.nome;
          Swal.fire({
            title: "Statusdemanda editado!",
            text: mensagem,
            icon: "success"
          });
          this.retorno.emit(this.status);
        },
        error: (erro) => {
          console.clear();
          console.log(erro);
          Swal.fire({
            title: 'Ocorreu um erro',
            text: 'Mais informações no console da aplicação',
            icon: 'error',
          });
        },
      });
    }
    // save
    else {
      this.statusdemandaService.save(this.status).subscribe({
        next: (objetoSalvo) => {
          let mensagem = "Nome: " + objetoSalvo.nome;
          Swal.fire({
            title: "Statusdemanda salvo!",
            text: mensagem,
            icon: "success"
          });
          this.retorno.emit(this.status);
        },
        error: (erro) => {
          console.clear();
          console.log(erro);
          Swal.fire({
            title: 'Ocorreu um erro',
            text: 'Mais informações no console da aplicação',
            icon: 'error',
          });
        },
      });
    }
  }
  deleteById() {
    if (confirm('Tem certeza? Você deseja excluir o statusdemanda ' + this.status.nome)) {
      this.statusdemandaService.delete(this.status.id).subscribe({
        next: (statusdemandaDeletado) => {
          Swal.fire({
            title: 'Statusdemanda salvo!',
            text: 'Statusdemanda: ' + statusdemandaDeletado.nome + ' deletado com sucesso.',
            icon: 'success',
          });
          this.retorno.emit(statusdemandaDeletado);
        },
        error: (erro) => {
          console.clear();
          console.log(erro);
          Swal.fire({
            title: 'Ocorreu um erro',
            text: 'Mais informações no console da aplicação',
            icon: 'error',
          });
        },
      });
    }
  }

}
