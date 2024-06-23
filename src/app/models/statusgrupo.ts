import { Grupo } from "./grupo";

export class Statusgrupo {
    idStatusGrupo!: number;
    nome!: string;
    grupos: Grupo[] = [];

    constructor() {}
}