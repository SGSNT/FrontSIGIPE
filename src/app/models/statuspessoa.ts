import { Pessoa } from "./pessoa";

export class Statuspessoa {
    id!: number;
    nome!: string;
    pessoas: Pessoa[] = [];

    constructor(){}
}
