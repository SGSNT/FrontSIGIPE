import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CoordenadorextensaoService } from '../../../../../services/coordenadorextensao.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';
import { Coordenadorextensao } from '../../../../../models/coordenadorextensao';

@Component({
  selector: 'app-modalcoordenadorextensao',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './modalcoordenadorextensao.component.html',
  styleUrl: './modalcoordenadorextensao.component.scss'
})
export class ModalcoordenadorextensaoComponent {
  coordenadorextensaoService = inject(CoordenadorextensaoService);
  router = inject(Router);

  @Input('coordenadorextensao')
  coordenador: Coordenadorextensao = new Coordenadorextensao();
  @Output('retorno')
  retorno: EventEmitter<any> = new EventEmitter();

  save() {
    // update
    if (this.coordenador.id > 0) {
      this.coordenadorextensaoService.update(this.coordenador, this.coordenador.id).subscribe({
        next: (objetoEditado) => {
          let mensagem = "Nome: " + objetoEditado.nome + ". Cpf: "+ objetoEditado.cpf;
          Swal.fire({
            title: "Coordenadorextensao editado!",
            text: mensagem,
            icon: "success"
          });
          this.retorno.emit(this.coordenador);
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
      this.coordenadorextensaoService.save(this.coordenador).subscribe({
        next: (objetoSalvo) => {
          let mensagem = "Nome: " + objetoSalvo.nome + ". Cpf: "+ objetoSalvo.cpf;
          Swal.fire({
            title: "Coordenadorextensao salvo!",
            text: mensagem,
            icon: "success"
          });
          this.retorno.emit(this.coordenador);
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
    if (confirm('Tem certeza? Você deseja excluir o coordenadorextensao ' + this.coordenador.nome)) {
      this.coordenadorextensaoService.delete(this.coordenador.id).subscribe({
        next: (coordenadorextensaoDeletado) => {
          Swal.fire({
            title: 'Coordenadorextensao salvo!',
            text: 'Coordenadorextensao: ' + coordenadorextensaoDeletado.nome + ' deletado com sucesso.',
            icon: 'success',
          });
          this.retorno.emit(coordenadorextensaoDeletado);
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
