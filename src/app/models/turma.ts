import { Aluno } from "./aluno";
import { Curso } from "./curso";
import { Demanda } from "./demanda";
import { Professor } from "./professor";

export class Turma {
    id!: number;
    periodoCurso!: number;

    curso!: Curso;
    alunos: Aluno[] = [];
    professors: Professor[] = [];
    demandas: Demanda[] = [];
}
