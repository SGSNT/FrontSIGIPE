import { Curso } from "./curso";
import { Turma } from "./turma";
import { Pessoa } from "./pessoa";

export class Professor extends Pessoa{
    turma!: Turma;
    curso!: Curso;
    
    constructor() {
        super();
    }
}
