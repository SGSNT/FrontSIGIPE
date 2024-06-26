import { Curso } from "./curso";
import { Grupo } from "./grupo";
import { Pessoa } from "./pessoa";
import { Turma } from "./turma";

export class Aluno extends Pessoa {
    curso!: Curso;
    turma!: Turma;
    grupos!: Grupo;

    constructor() {
        super();
    }
}
