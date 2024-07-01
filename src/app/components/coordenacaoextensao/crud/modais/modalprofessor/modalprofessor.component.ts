import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';
import { Curso } from '../../../../../models/curso';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Turma } from '../../../../../models/turma';
import { ProfessorService } from '../../../../../services/professor.service';
import { Professor } from '../../../../../models/professor';

@Component({
  selector: 'app-modalprofessor',
  standalone: true,
  imports: [
    FormsModule,
    MdbFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './modalprofessor.component.html',
  styleUrl: './modalprofessor.component.scss',
})
export class ModalprofessorComponent {
  professorService = inject(ProfessorService);
  router = inject(Router);

  _cursoNomeSelect!: string;

  turmaIdSelect!: number;

  listaTurmasFiltroCurso: Turma[] = [];

  @Input('professor')
  professor: Professor = new Professor();
  @Input('listaCursos')
  listaCursos: Curso[] = [];
  @Input('listaTurmas')
  listaTurmas: Turma[] = [];
  @Output('retorno')
  retorno: EventEmitter<any> = new EventEmitter();

  get cursoNomeSelect(): string {
    return this._cursoNomeSelect;
  }

  set cursoNomeSelect(value: string) {
    if (value !== this._cursoNomeSelect) {
      this._cursoNomeSelect = value;
      this.filtrarTurmas();
    }
  }

  filtrarTurmas() {
    this.listaTurmasFiltroCurso = this.listaTurmas.filter(
      (turma) => turma.curso.nome === this.cursoNomeSelect
    );
  }

  ngOnInit(): void {
    if (this.professor.curso !== undefined) {
      this.cursoNomeSelect = this.professor.curso.nome;
    }
  }

  save() {
    this.atualizaCurso();
    this.atualizaTurma();
    // update
    if (this.professor.id > 0) {
      this.professorService
        .update(this.professor, this.professor.id)
        .subscribe({
          next: (objetoEditado) => {
            let mensagem =
              'Nome: ' +
              objetoEditado.nome +
              '. CPF: ' +
              objetoEditado.cpf +
              '. Curso:' +
              objetoEditado.curso.nome +
              '. Turma:' +
              objetoEditado.turma.periodoCurso +
              'º período.';
            Swal.fire({
              title: 'Professor editado!',
              text: mensagem,
              icon: 'success',
            });
            this.retorno.emit(this.professor);
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
      this.professorService.save(this.professor).subscribe({
        next: (objetoSalvo) => {
          let mensagem =
            'Nome: ' +
            objetoSalvo.nome +
            '. CPF: ' +
            objetoSalvo.cpf +
            '. Curso:' +
            objetoSalvo.curso.nome +
            '. Turma:' +
            objetoSalvo.turma.periodoCurso +
            'º período.';
          Swal.fire({
            title: 'Professor salvo!',
            text: mensagem,
            icon: 'success',
          });
          this.retorno.emit(this.professor);
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
        'Tem certeza? Você deseja excluir o professor ' + this.professor.nome
      )
    ) {
      this.professorService.delete(this.professor.id).subscribe({
        next: (objetoDeletado) => {
          Swal.fire({
            title: 'Professor excluído!',
            text: 'Professor:' + objetoDeletado.nome + ' deletado com sucesso.',
            icon: 'success',
          });
          this.retorno.emit(objetoDeletado);
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
    this.professor.curso = this.listaCursos[indice];
  }
  atualizaTurma(){
    let indice = this.listaTurmas.findIndex( turma => turma.id === this.turmaIdSelect);
    this.professor.turma = this.listaTurmas[indice];
  }
}
