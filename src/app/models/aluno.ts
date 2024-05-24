import { Curso } from "./curso";
import { Grupo } from "./grupo";
import { Periodo } from "./periodo";
import { Pessoa } from "./pessoa";

export class Aluno extends Pessoa {
    curso!: Curso;
    periodo!: Periodo;
    grupos: Grupo[] = [];

    constructor() {
        super();
    }
}
