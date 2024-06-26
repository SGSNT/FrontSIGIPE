import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { CursoService } from '../../../../../services/curso.service';
import { Curso } from '../../../../../models/curso';
import { Coordenadorextensao } from '../../../../../models/coordenadorextensao';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalgacursos',
  standalone: true,
  imports: [FormsModule, MdbFormsModule],
  templateUrl: './modalgacursos.component.html',
  styleUrl: './modalgacursos.component.scss',
})
export class ModalgacursosComponent {
  cursoService = inject(CursoService);
  router = inject(Router);

  @Input('curso')
  curso: Curso = new Curso();
  @Output('retorno')
  retorno: EventEmitter<any> = new EventEmitter();

  save() {
    if (this.curso.id <= 0) {
      this.cursoService.update(this.curso, this.curso.id).subscribe({
        next: cursoSalvo => {
          let mensagem = "Nome: " + cursoSalvo.nome + ". Periodos: "+ cursoSalvo.quantidadePeriodos + ". Coordenadores:";
          cursoSalvo.coordenadores.forEach(coordenador => {
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
    } else {
      this.cursoService.save(this.curso).subscribe({
        next: (cursoSalvo) => {
          let mensagem = "Nome: " + cursoSalvo.nome + ". Periodos: "+ cursoSalvo.quantidadePeriodos + ". Coordenadores:";
          cursoSalvo.coordenadores.forEach(coordenador => {
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
