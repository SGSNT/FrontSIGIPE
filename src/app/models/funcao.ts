import { Pessoa } from "./pessoa";

export class Funcao {
    idFuncao!: number;
    nome!: string;
    pessoas: Pessoa[] = [];

    constructor(
        id: number,
        nome: string,
        pessoas: Pessoa[]
    ) {
        this.idFuncao = id;
        this.nome = nome;
        this.pessoas = pessoas;
    }
}
