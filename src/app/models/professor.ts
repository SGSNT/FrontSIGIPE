import { Curso } from "./curso";
import { Periodo } from "./periodo";
import { Pessoa } from "./pessoa";

export class Professor extends Pessoa{
    curso!: Curso;
    periodo!: Periodo;
    
    constructor() {
        super();
    }
}
