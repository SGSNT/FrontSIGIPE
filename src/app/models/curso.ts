import { Aluno } from "./aluno";
import { Coordenadorcurso } from "./coordenadorcurso";
import { Demanda } from "./demanda";
import { Professor } from "./professor";

export class Curso {
    id!: number;
    nome!: string;
    demandas: Demanda[] = [];
    alunos: Aluno[] = [];
    professores: Professor[] = [];
    coordenadores: Coordenadorcurso[] = [];

    constructor(id: number, nome: string, demandas: Demanda[], alunos: Aluno[], professores: Professor[], coordenadores: Coordenadorcurso[]){
        this.alunos = alunos;
        this.coordenadores=coordenadores;
        this.demandas = demandas;
        this.id = id;
        this.nome = nome;
        this.professores = professores;
    }
}
