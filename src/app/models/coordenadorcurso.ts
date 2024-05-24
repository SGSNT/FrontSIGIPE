import { Curso } from "./curso";
import { Pessoa } from "./pessoa";

export class Coordenadorcurso extends Pessoa {
    curso!: Curso;

    constructor() {
        super();
    }
}
