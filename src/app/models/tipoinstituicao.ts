import { Instituicao } from "./instituicao";

export class Tipoinstituicao {
    id!: number;
    nome!: string;
    instituicoes: Instituicao[] = [];
    constructor(id: number, nome: string, instituicoes: Instituicao[]){
        this.id = id;
        this.instituicoes = instituicoes;
        this.nome = nome;
    }
}

