import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';
import { CoordenadorcursoService } from '../../../../../services/coordenadorcurso.service';
import { Coordenadorcurso } from '../../../../../models/coordenadorcurso';
import { Curso } from '../../../../../models/curso';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-modalcoordenadorcurso',
  standalone: true,
  imports: [
    FormsModule,
    MdbFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './modalcoordenadorcurso.component.html',
  styleUrl: './modalcoordenadorcurso.component.scss',
})
export class ModalcoordenadorcursoComponent {
  coordenadorCursoService = inject(CoordenadorcursoService);
  router = inject(Router);

  cursoNomeSelect!: string;

  @Input('coordenadorCurso')
  coordenadorCurso: Coordenadorcurso = new Coordenadorcurso();
  @Input('listaCursos')
  listaCursos: Curso[] = [];
  @Output('retorno')
  retorno: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    if (this.coordenadorCurso.curso !== undefined) {
      this.cursoNomeSelect = this.coordenadorCurso.curso.nome;
    }
  }

  save() {
    this.atualizaCurso();
    // update
    if (this.coordenadorCurso.id > 0) {
      this.coordenadorCursoService
        .update(this.coordenadorCurso, this.coordenadorCurso.id)
        .subscribe({
          next: (objetoEditado) => {
            let mensagem =
              'Nome: ' +
              objetoEditado.nome +
              '. CPF: ' +
              objetoEditado.cpf +
              '. Curso:' +
              objetoEditado.curso.nome;
            Swal.fire({
              title: 'CoordenadorCurso editado!',
              text: mensagem,
              icon: 'success',
            });
            this.retorno.emit(this.coordenadorCurso);
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
      this.coordenadorCursoService.save(this.coordenadorCurso).subscribe({
        next: (objetoSalvo) => {
          let mensagem =
            'Nome: ' +
            objetoSalvo.nome +
            '. CPF: ' +
            objetoSalvo.cpf +
            '. Curso:' +
            objetoSalvo.curso.nome;
          Swal.fire({
            title: 'CoordenadorCurso salvo!',
            text: mensagem,
            icon: 'success',
          });
          this.retorno.emit(this.coordenadorCurso);
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
    if (
      confirm(
        'Tem certeza? Você deseja excluir o coordenadorCurso ' +
          this.coordenadorCurso.nome
      )
    ) {
      this.coordenadorCursoService.delete(this.coordenadorCurso.id).subscribe({
        next: (cursoDeletado) => {
          Swal.fire({
            title: 'CoordenadorCurso salvo!',
            text:
              'CoordenadorCurso: ' +
              cursoDeletado.nome +
              ' deletado com sucesso.',
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
  atualizaCurso() {
    let indice = this.listaCursos.findIndex(
      (curso) => curso.nome === this.cursoNomeSelect
    );
    this.coordenadorCurso.curso = this.listaCursos[indice];
  }
}
