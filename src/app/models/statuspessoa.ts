import { Pessoa } from "./pessoa";

export class Statuspessoa {
    idStatusPessoa!: number;
    nome!: string;
    pessoas: Pessoa[] = [];

    constructor(){}
}
