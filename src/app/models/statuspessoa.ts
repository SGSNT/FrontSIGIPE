import { Pessoa } from "./pessoa";

export class Statuspessoa {
    id!: number;
    nome!: string;
    pessoas: Pessoa[] = [];

    constructor(id: number, nome: string, pessoas: Pessoa[]){
        this.id = id;
        this.nome = nome;
        this.pessoas = pessoas;
    }
}
