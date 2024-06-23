import { Aluno } from "./aluno";
import { Coordenadorcurso } from "./coordenadorcurso";
import { Coordenadorextensao } from "./coordenadorextensao";
import { Curso } from "./curso";
import { Demanda } from "./demanda";
import { Demandante } from "./demandante";
import { Funcao } from "./funcao";
import { Grupo } from "./grupo";
import { Instituicao } from "./instituicao";
import { Periodo } from "./periodo";
import { Professor } from "./professor";
import { Statusdemanda } from "./statusdemanda";
import { Statusgrupo } from "./statusgrupo";
import { Statuspessoa } from "./statuspessoa";
import { Tipoinstituicao } from "./tipoinstituicao";

export class Dados {
    aluno: Aluno[] = [];
    coordenadoCurso: Coordenadorcurso[] = [];
    coordenadoExtensao: Coordenadorextensao[] = [];
    curso: Curso[] = [];
    demanda: Demanda[] = [];
    demandante: Demandante[] = [];
    funcao: Funcao[] = [];
    grupo: Grupo[] = [];
    instituicao: Instituicao[] = [];
    periodo: Periodo[] = [];
    professor: Professor[] = [];
    statusDemanda: Statusdemanda[] = [];
    statusPessoa: Statuspessoa[] = [];
    statusGrupo: Statusgrupo[] = [];
    tipoInstituicao: Tipoinstituicao[] = [];
    constructor(){}
}
