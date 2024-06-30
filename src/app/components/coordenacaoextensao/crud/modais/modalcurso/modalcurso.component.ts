import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CursoService } from '../../../../../services/curso.service';
import { Router } from '@angular/router';
import { Curso } from '../../../../../models/curso';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modalcurso',
  standalone: true,
  imports: [FormsModule, MdbFormsModule ],
  templateUrl: './modalcurso.component.html',
  styleUrl: './modalcurso.component.scss',
})
export class ModalcursoComponent {
  cursoService = inject(CursoService);
  router = inject(Router);

  @Input('curso')
  curso: Curso = new Curso();
  @Output('retorno')
  retorno: EventEmitter<any> = new EventEmitter();

  save() {
    // update
    if (this.curso.id > 0) {
      this.cursoService.update(this.curso, this.curso.id).subscribe({
        next: (objetoEditado) => {
          let mensagem = "Nome: " + objetoEditado.nome + ". Periodos: "+ objetoEditado.quantidadePeriodos + ". Coordenadores:";
          objetoEditado.coordenadores.forEach(coordenador => {
            mensagem += " " + coordenador.nome + ",";
          });
          Swal.fire({
            title: "Curso editado!",
            text: mensagem,
            icon: "success"
          });
          this.retorno.emit(this.curso);
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
      this.cursoService.save(this.curso).subscribe({
        next: (objetoSalvo) => {
          let mensagem = "Nome: " + objetoSalvo.nome + ". Periodos: "+ objetoSalvo.quantidadePeriodos + ". Coordenadores:";
          objetoSalvo.coordenadores.forEach(coordenador => {
            mensagem += " " + coordenador.nome + ",";
          });
          Swal.fire({
            title: "Curso salvo!",
            text: mensagem,
            icon: "success"
          });
          this.retorno.emit(this.curso);
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
    if (confirm('Tem certeza? Você deseja excluir o curso ' + this.curso.nome)) {
      this.cursoService.delete(this.curso.id).subscribe({
        next: (cursoDeletado) => {
          Swal.fire({
            title: 'Curso salvo!',
            text: 'Curso: ' + cursoDeletado.nome + ' deletado com sucesso.',
            icon: 'success',
          });
          this.retorno.emit(cursoDeletado);
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
