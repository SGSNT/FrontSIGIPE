import { Aluno } from "./aluno";
import { Curso } from "./curso";
import { Demanda } from "./demanda";
import { Periodo } from "./periodo";
import { Statusgrupo } from "./statusgrupo";

export class Grupo {
    idGrupo!: number;
    nome!: string;
    
    demanda!: Demanda;
    status!: Statusgrupo;
    curso!: Curso;
    periodo!: Periodo;
    alunos: Aluno[] = [];

    constructor() {}
}
