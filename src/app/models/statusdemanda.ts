import { Demanda } from "./demanda";

export class Statusdemanda {
    id!: number;
    nome!: string;
    demandas: Demanda[] = [];

    constructor(){}
}
