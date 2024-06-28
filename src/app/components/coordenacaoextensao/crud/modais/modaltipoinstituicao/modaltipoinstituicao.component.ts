import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TipoinstituicaoService } from '../../../../../services/tipoinstituicao.service';
import { Router } from '@angular/router';
import { Tipoinstituicao } from '../../../../../models/tipoinstituicao';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modaltipoinstituicao',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './modaltipoinstituicao.component.html',
  styleUrl: './modaltipoinstituicao.component.scss'
})
export class ModaltipoinstituicaoComponent {
  tipoinstituicaoService = inject(TipoinstituicaoService);
  router = inject(Router);

  @Input('tipo')
  tipo: Tipoinstituicao = new Tipoinstituicao();
  @Output('retorno')
  retorno: EventEmitter<any> = new EventEmitter();

  save() {
    // update
    if (this.tipo.id > 0) {
      this.tipoinstituicaoService.update(this.tipo, this.tipo.id).subscribe({
        next: (objetoEditado) => {
          let mensagem = "Nome: " + objetoEditado.nome;
          Swal.fire({
            title: "Tipoinstituicao editado!",
            text: mensagem,
            icon: "success"
          });
          this.retorno.emit(this.tipo);
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
      this.tipoinstituicaoService.save(this.tipo).subscribe({
        next: (objetoSalvo) => {
          let mensagem = "Nome: " + objetoSalvo.nome;
          Swal.fire({
            title: "Tipoinstituicao salvo!",
            text: mensagem,
            icon: "success"
          });
          this.retorno.emit(this.tipo);
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
    if (confirm('Tem certeza? Você deseja excluir o tipoinstituicao ' + this.tipo.nome)) {
      this.tipoinstituicaoService.delete(this.tipo.id).subscribe({
        next: (tipoinstituicaoDeletado) => {
          Swal.fire({
            title: 'Tipoinstituicao salvo!',
            text: 'Tipoinstituicao: ' + tipoinstituicaoDeletado.nome + ' deletado com sucesso.',
            icon: 'success',
          });
          this.retorno.emit(tipoinstituicaoDeletado);
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
