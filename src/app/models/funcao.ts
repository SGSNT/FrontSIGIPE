import { Pessoa } from "./pessoa";

export class Funcao {
    id!: number;
    funcao!: string;
    pessoas: Pessoa[] = [];

    constructor(
        id: number,
        funcao: string,
        pessoas: Pessoa[]
    ) {
        this.id = id;
        this.funcao = funcao;
        this.pessoas = pessoas;
    }
}
