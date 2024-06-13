import { Component } from '@angular/core';
import { Dados } from '../../../../models/dados';
import { Grupo } from '../../../../models/grupo';
import { Tipoinstituicao } from '../../../../models/tipoinstituicao';
import { Instituicao } from '../../../../models/instituicao';
import { Demandante } from '../../../../models/demandante';
import { Statusdemanda } from '../../../../models/statusdemanda';
import { Curso } from '../../../../models/curso';
import { Demanda } from '../../../../models/demanda';
import { Aluno } from '../../../../models/aluno';
import { Coordenadorcurso } from '../../../../models/coordenadorcurso';
import { Coordenadorextensao } from '../../../../models/coordenadorextensao';
import { Professor } from '../../../../models/professor';
import { Funcao } from '../../../../models/funcao';
import { Periodo } from '../../../../models/periodo';
import { Statuspessoa } from '../../../../models/statuspessoa';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  dados!: Dados;
  user!: Coordenadorextensao;

  constructor() {
    this.dados = new Dados();
    this.user = new Coordenadorextensao();
    this.user =
      this.dados.coordenadoExtensao[Math.floor(Math.random() * 2) + 1];
    this.mockaDados();
    console.log(this.dados);
  }

  mockaDados() {
    // Criando exemplos fictícios de dados
    let grupoExemplo = new Grupo();
    let tipoInstituicaoExemplo = new Tipoinstituicao();
    let instituicaoExemplo = new Instituicao();
    let demandanteExemplo = new Demandante();
    let statusDemandaExemplo = new Statusdemanda();
    let cursoExemplo = new Curso();
    let demandaExemplo = new Demanda();
    let alunoExemplo = new Aluno();
    let coordenadorCursoExemplo = new Coordenadorcurso();
    let coordenadorExtensaoExemplo = new Coordenadorextensao();
    let professorExemplo = new Professor();
    let funcaoExemplo = new Funcao();
    let periodoExemplo = new Periodo();
    let statusPessoaExemplo = new Statuspessoa();

    let nomesStatusDemanda = [
      'Em andamento',
      'Negada',
      'Para revisão',
      'Encaminhada para curso',
      'Apta',
      'Finalizada',
    ];
    let nomesTipoInstituicao = [
      'Empresa Privada',
      'Associação/ONG',
      'Prefeitura Municipal',
      'Governo Estadual',
      'Governo Federal',
    ];
    let nomesCurso = [
      'Engenharia de Software',
      'Análise e Desenvolvimento de Sistemas',
      'Psicologia',
      'Administração',
      'Direito',
      'Medicina',
      'Ciências Contábeis',
      'Engenharia Civil',
    ];
    let nomesGrupo = [
      'Grupo de Trabalho A',
      'Grupo de Trabalho B',
      'Grupo de Trabalho C',
      'Grupo de Trabalho D',
      'Grupo de Trabalho E',
      'Grupo de Trabalho F',
      'Grupo de Trabalho G',
      'Grupo de Trabalho H',
      'Grupo de Trabalho I',
      'Grupo de Trabalho J',
      'Grupo de Trabalho K',
      'Grupo de Trabalho L',
      'Grupo de Trabalho M',
      'Grupo de Trabalho N',
      'Grupo de Trabalho O',
      'Grupo de Trabalho P',
    ];
    let nomesFuncao = [
      'Aluno',
      'Professor',
      'Coordenação de Curso',
      'Coordenação de Extensão',
    ];
    let nomesPeriodo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let nomesStatusPessoa = [
      'Matriculado',
      'Trancado',
      'Evadido',
      'Formado',
      'Transferido',
    ];
    //cria tipo de instituição
    nomesTipoInstituicao.forEach((nome, index) => {
      tipoInstituicaoExemplo.idTipoInstituicao = index + 1;
      tipoInstituicaoExemplo.nome = nome;
      this.dados.tipoInstituicao.push(tipoInstituicaoExemplo);
      tipoInstituicaoExemplo = new Tipoinstituicao();
    });
    //cria status de demanda
    nomesStatusDemanda.forEach((nome, index) => {
      statusDemandaExemplo.idStatusDemanda = index + 1;
      statusDemandaExemplo.nome = nome;
      this.dados.statusDemanda.push(statusDemandaExemplo);
      statusDemandaExemplo = new Statusdemanda();
    });
    //cria curso
    nomesCurso.forEach((nome, index) => {
      cursoExemplo.idCurso = index + 1;
      cursoExemplo.nome = nome;
      this.dados.curso.push(cursoExemplo);
      cursoExemplo = new Curso();
    });
    //cria grupo
    nomesGrupo.forEach((nome, index) => {
      grupoExemplo.idGrupo = index + 1;
      grupoExemplo.nome = nome;
      this.dados.grupo.push(grupoExemplo);
      grupoExemplo = new Grupo();
    });
    //cria funcao
    nomesFuncao.forEach((nome, index) => {
      funcaoExemplo.idFuncao = index + 1;
      funcaoExemplo.nome = nome;
      this.dados.funcao.push(funcaoExemplo);
      funcaoExemplo = new Funcao();
    });
    //cria periodo
    nomesPeriodo.forEach((nome, index) => {
      periodoExemplo.idPeriodo = index + 1;
      periodoExemplo.periodo = nome;
      this.dados.periodo.push(periodoExemplo);
      periodoExemplo = new Periodo();
    });
    //cria status de pessoa
    nomesStatusPessoa.forEach((nome, index) => {
      statusPessoaExemplo.idStatusPessoa = index + 1;
      statusPessoaExemplo.nome = nome;
      this.dados.statusPessoa.push(statusPessoaExemplo);
      statusPessoaExemplo = new Statuspessoa();
    });

    //--------------------------------------------------

    //cria demanda
    for (let i = 1; i <= 52; i++) {
      demandaExemplo.idDemanda = i;
      demandaExemplo.quantidadeGrupo = Math.floor(Math.random() * 10) + 1;
      demandaExemplo.problema = `Problema ${i}: Descrição do problema ${i}`;
      demandaExemplo.resultado = `Resultado ${i}: Descrição do resultado ${i}`;
      demandaExemplo.impacto = `Impacto ${i}: Descrição do impacto ${i}`;
      demandaExemplo.prazo = `2024-${String(
        Math.floor(Math.random() * 12) + 1
      ).padStart(2, '0')}`;
      this.dados.demanda.push(demandaExemplo);
      demandaExemplo = new Demanda();
    }

    //cria instituicao
    for (let i = 1; i <= 26; i++) {
      instituicaoExemplo.idInstituicao = i;
      instituicaoExemplo.nome = `Instituição ${i}`;
      instituicaoExemplo.cidade = `Cidade ${i}`;

      // Gerando um CEP aleatório
      let cepParte1 = Math.floor(Math.random() * 90000) + 10000; // Gera um número de 10000 a 99999
      let cepParte2 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      instituicaoExemplo.cep = `${cepParte1}-${cepParte2}`;

      // Gerando um CNPJ aleatório
      let cnpjParte1 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cnpjParte2 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cnpjParte3 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cnpjParte4 = Math.floor(Math.random() * 90) + 10; // Gera um número de 10 a 99
      instituicaoExemplo.cnpj = `${cnpjParte1}.${cnpjParte2}.${cnpjParte3}/0001-${cnpjParte4}`;

      instituicaoExemplo.razaoSocial = `Instituição Exemplo ${i} LTDA`;
      this.dados.instituicao.push(instituicaoExemplo);
      instituicaoExemplo = new Instituicao();
    }

    //cria demandante
    for (let i = 1; i <= 52; i++) {
      demandanteExemplo.idDemandante = i;
      demandanteExemplo.nome = `Demandante ${i}`;
      demandanteExemplo.email = `demandante${i}@example.com`;

      // Gerando um telefone aleatório
      let ddd = Math.floor(Math.random() * 90) + 10; // Gera um DDD de 10 a 99
      let numeroParte1 = Math.floor(Math.random() * 90000) + 10000; // Gera a primeira parte do número de 10000 a 99999
      let numeroParte2 = Math.floor(Math.random() * 9000) + 1000; // Gera a segunda parte do número de 1000 a 9999
      demandanteExemplo.telefone = `(${ddd}) 9${numeroParte1}-${numeroParte2}`;

      this.dados.demandante.push(demandanteExemplo);

      demandanteExemplo = new Demandante();
    }

    //cria aluno
    for (let i = 1; i <= 80; i++) {
      alunoExemplo.idPessoa = i;
      alunoExemplo.nome = `Aluno ${i}`;
      alunoExemplo.login = `aluno${i}`;
      alunoExemplo.senha = `${Math.floor(Math.random() * 900000) + 100000}`; // Gera uma senha de 6 dígitos aleatória

      // Gerando um CPF aleatório por partes
      let cpfParte1 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cpfParte2 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cpfParte3 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cpfParte4 = Math.floor(Math.random() * 90) + 10; // Gera um número de 10 a 99
      alunoExemplo.cpf = `${cpfParte1}${cpfParte2}${cpfParte3}${cpfParte4}`; // Concatena as partes para formar o CPF

      // Gerando um telefone aleatório por partes
      let ddd = Math.floor(Math.random() * 90) + 10; // Gera um DDD de 10 a 99
      let numeroParte1 = Math.floor(Math.random() * 90000) + 10000; // Gera a primeira parte do número de 10000 a 99999
      let numeroParte2 = Math.floor(Math.random() * 9000) + 1000; // Gera a segunda parte do número de 1000 a 9999
      alunoExemplo.telefone = `${ddd}${numeroParte1}${numeroParte2}`; // Concatena as partes para formar o telefone

      this.dados.aluno.push(alunoExemplo);
      alunoExemplo = new Aluno(); // Nova instância para a próxima iteração
    }

    //cria professor
    for (let i = 1; i <= 40; i++) {
      professorExemplo.idPessoa = i;
      professorExemplo.nome = `Professor ${i}`;
      professorExemplo.login = `professor${i}`;
      professorExemplo.senha = `${Math.floor(Math.random() * 900000) + 100000}`; // Gera uma senha de 6 dígitos aleatória

      // Gerando um CPF aleatório por partes
      let cpfParte1 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cpfParte2 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cpfParte3 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cpfParte4 = Math.floor(Math.random() * 90) + 10; // Gera um número de 10 a 99
      professorExemplo.cpf = `${cpfParte1}${cpfParte2}${cpfParte3}${cpfParte4}`; // Concatena as partes para formar o CPF

      // Gerando um telefone aleatório por partes
      let ddd = Math.floor(Math.random() * 90) + 10; // Gera um DDD de 10 a 99
      let numeroParte1 = Math.floor(Math.random() * 90000) + 10000; // Gera a primeira parte do número de 10000 a 99999
      let numeroParte2 = Math.floor(Math.random() * 9000) + 1000; // Gera a segunda parte do número de 1000 a 9999
      professorExemplo.telefone = `${ddd}${numeroParte1}${numeroParte2}`; // Concatena as partes para formar o telefone

      this.dados.professor.push(professorExemplo);
      professorExemplo = new Professor(); // Nova instância para a próxima iteração
    }

    //cria coordenador de curso
    for (let i = 1; i <= 8; i++) {
      coordenadorCursoExemplo.idPessoa = i;
      coordenadorCursoExemplo.nome = `Coordenador de Extensão ${i}`;
      coordenadorCursoExemplo.login = `ccurso${i}`;
      coordenadorCursoExemplo.senha = `${
        Math.floor(Math.random() * 900000) + 100000
      }`; // Gera uma senha de 6 dígitos aleatória

      // Gerando um CPF aleatório por partes
      let cpfParte1 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cpfParte2 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cpfParte3 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cpfParte4 = Math.floor(Math.random() * 90) + 10; // Gera um número de 10 a 99
      coordenadorCursoExemplo.cpf = `${cpfParte1}${cpfParte2}${cpfParte3}${cpfParte4}`; // Concatena as partes para formar o CPF

      // Gerando um telefone aleatório por partes
      let ddd = Math.floor(Math.random() * 90) + 10; // Gera um DDD de 10 a 99
      let numeroParte1 = Math.floor(Math.random() * 90000) + 10000; // Gera a primeira parte do número de 10000 a 99999
      let numeroParte2 = Math.floor(Math.random() * 9000) + 1000; // Gera a segunda parte do número de 1000 a 9999
      coordenadorCursoExemplo.telefone = `${ddd}${numeroParte1}${numeroParte2}`; // Concatena as partes para formar o telefone

      this.dados.coordenadoCurso.push(coordenadorCursoExemplo);
      coordenadorCursoExemplo = new Coordenadorcurso(); // Nova instância para a próxima iteração
    }

    //cria doordenador de extensão
    for (let i = 1; i <= 2; i++) {
      coordenadorExtensaoExemplo.idPessoa = i;
      coordenadorExtensaoExemplo.nome = `Coordenador de Extensão ${i}`;
      coordenadorExtensaoExemplo.login = `cextensao${i}`;
      coordenadorExtensaoExemplo.senha = `${
        Math.floor(Math.random() * 900000) + 100000
      }`; // Gera uma senha de 6 dígitos aleatória

      // Gerando um CPF aleatório por partes
      let cpfParte1 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cpfParte2 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cpfParte3 = Math.floor(Math.random() * 900) + 100; // Gera um número de 100 a 999
      let cpfParte4 = Math.floor(Math.random() * 90) + 10; // Gera um número de 10 a 99
      coordenadorExtensaoExemplo.cpf = `${cpfParte1}${cpfParte2}${cpfParte3}${cpfParte4}`; // Concatena as partes para formar o CPF

      // Gerando um telefone aleatório por partes
      let ddd = Math.floor(Math.random() * 90) + 10; // Gera um DDD de 10 a 99
      let numeroParte1 = Math.floor(Math.random() * 90000) + 10000; // Gera a primeira parte do número de 10000 a 99999
      let numeroParte2 = Math.floor(Math.random() * 9000) + 1000; // Gera a segunda parte do número de 1000 a 9999
      coordenadorExtensaoExemplo.telefone = `${ddd}${numeroParte1}${numeroParte2}`; // Concatena as partes para formar o telefone

      this.dados.coordenadoExtensao.push(coordenadorExtensaoExemplo);
      coordenadorExtensaoExemplo = new Coordenadorextensao(); // Nova instância para a próxima iteração
    }

    this.relacionaDados();
  }
  relacionaDados() {
    this.dados.aluno.forEach((al, index) => {
      al.funcao = this.dados.funcao[0];
      this.dados.funcao[0].pessoas.push(al);

      al.status = this.dados.statusPessoa[0];
      this.dados.statusPessoa[0].pessoas.push(al);

      al.curso = this.dados.curso[Math.floor(index / 10)];
      this.dados.curso[Math.floor(index / 10)].alunos.push(al);

      al.periodo = this.dados.periodo[Math.floor(index / 8)];
      this.dados.periodo[Math.floor(index / 8)].alunos.push(al);

      al.grupos.push(this.dados.grupo[Math.floor(index / 5)]);
      this.dados.grupo[Math.floor(index / 5)].alunos.push(al);
    });

    this.dados.professor.forEach((pr, index) => {
      pr.funcao = this.dados.funcao[1];
      this.dados.funcao[1].pessoas.push(pr);

      pr.status = this.dados.statusPessoa[0];
      this.dados.statusPessoa[0].pessoas.push(pr);

      pr.curso = this.dados.curso[Math.floor(index / 5)];
      this.dados.curso[Math.floor(index / 5)].professores.push(pr);

      pr.periodo = this.dados.periodo[Math.floor(index / 4)];
      this.dados.periodo[Math.floor(index / 4)].professores.push(pr);
    });

    this.dados.coordenadoCurso.forEach((cc, index) => {
      cc.funcao = this.dados.funcao[2];
      this.dados.funcao[2].pessoas.push(cc);

      cc.status = this.dados.statusPessoa[0];
      this.dados.statusPessoa[0].pessoas.push(cc);

      cc.curso = this.dados.curso[Math.floor(index)];
      this.dados.curso[Math.floor(index)].coordenadores.push(cc);
    });

    this.dados.coordenadoExtensao.forEach((ce, index) => {
      ce.funcao = this.dados.funcao[3];
      this.dados.funcao[3].pessoas.push(ce);

      ce.status = this.dados.statusPessoa[0];
      this.dados.statusPessoa[0].pessoas.push(ce);
    });

    this.dados.instituicao.forEach((i, index) => {
      i.demandantes.push(this.dados.demandante[2 * index]);
      i.demandantes.push(this.dados.demandante[2 * index + 1]);

      i.demandas.push(this.dados.demanda[2 * index]);
      i.demandas.push(this.dados.demanda[2 * index + 1]);

      this.dados.demanda[2 * index].instituicao = i;
      this.dados.demanda[2 * index + 1].instituicao = i;

      this.dados.demanda[2 * index].demandante =
        this.dados.demandante[2 * index];
      this.dados.demanda[2 * index + 1].demandante =
        this.dados.demandante[2 * index + 1];

      let indexTipoInstituicao = Math.floor(Math.random() * 5);
      i.tipoInstituicao = this.dados.tipoInstituicao[1];
      this.dados.tipoInstituicao[indexTipoInstituicao].instituicoes.push(i);
    });

    this.dados.demanda.forEach((d, index) => {
      // demandas inicidas
      if (index <= 10) {
        //relacionamento status e demanda
        d.status = this.dados.statusDemanda[0];
        this.dados.statusDemanda[0].demandas.push(d);
        if (index <= 7) {
          let cursoDoGrupo = this.dados.grupo[index].alunos[0].curso; //pega o curso desse grupo
          let indexCursoNoMock = this.dados.curso.indexOf(cursoDoGrupo); //pega o index do curso no mock principal

          //relacionamento grupo e demanda
          d.grupos.push(this.dados.grupo[index]);
          this.dados.grupo[index].demanda = d;

          d.cursos.push(cursoDoGrupo); //insere o curso do grupo na demanda
          this.dados.curso[indexCursoNoMock].demandas.push(d); //insere a demanda na lista de demandas deste curso
        } else {
          //demandas com 3 grupos
          for (let i = 0; i < 3; i++) {
            //relacionamento grupo e demanda
            let grupoIndex = Math.floor(Math.random() * 16); //pega um grupo aleatório
            let cursoDoGrupo = this.dados.grupo[grupoIndex].alunos[0].curso; //pega o curso desse grupo
            let indexCursoNoMock = this.dados.curso.indexOf(cursoDoGrupo); //pega o index do curso no mock principal

            d.grupos.push(this.dados.grupo[grupoIndex]); //insere o grupo na demanda
            this.dados.grupo[grupoIndex].demanda = d; //insere a demanda no grupo

            if (!d.cursos.includes(cursoDoGrupo)) {
              d.cursos.push(cursoDoGrupo); //insere o curso do grupo na demanda
              this.dados.curso[indexCursoNoMock].demandas.push(d); //insere a demanda na lista de demandas deste curso
            }
          }
        }
      }
      // demandas aptas
      else if (index <= 21) {
        //relacionamento status e demanda
        d.status = this.dados.statusDemanda[4];
        this.dados.statusDemanda[4].demandas.push(d);
        if (index <= 18) {
          let cursoIndex = Math.floor(Math.random() * 8); //pega um curso aleatório

          d.cursos.push(this.dados.curso[cursoIndex]); //insere o curso na demanda
          this.dados.curso[cursoIndex].demandas.push(d); //insere a demanda no curso
        } else if (index <= 20) {
          let cursoIndex = Math.floor(Math.random() * 7); //pega um curso aleatório
          d.cursos.push(this.dados.curso[cursoIndex]); //insere o curso na demanda
          d.cursos.push(this.dados.curso[cursoIndex + 1]); //insere o curso na demanda
          this.dados.curso[cursoIndex].demandas.push(d); //insere a demanda no curso
          this.dados.curso[cursoIndex + 1].demandas.push(d); //insere a demanda no curso
        } else {
          let cursoIndex = Math.floor(Math.random() * 6); //pega um curso aleatório

          d.cursos.push(this.dados.curso[cursoIndex]); //insere o curso na demanda
          d.cursos.push(this.dados.curso[cursoIndex + 1]); //insere o curso na demanda
          d.cursos.push(this.dados.curso[cursoIndex + 2]); //insere o curso na demanda
          this.dados.curso[cursoIndex].demandas.push(d); //insere a demanda no curso
          this.dados.curso[cursoIndex + 1].demandas.push(d); //insere a demanda no curso
          this.dados.curso[cursoIndex + 2].demandas.push(d); //insere a demanda no curso
        }
      }
      // demandas encaminhadas
      else if (index <= 33) {
        d.status = this.dados.statusDemanda[3];
        this.dados.statusDemanda[3].demandas.push(d);

        if (index <= 29) {
          let cursoIndex = Math.floor(Math.random() * 8); //pega um curso aleatório

          d.cursos.push(this.dados.curso[cursoIndex]); //insere o curso na demanda
          this.dados.curso[cursoIndex].demandas.push(d); //insere a demanda no curso
        } else if (index <= 31) {
          let cursoIndex = Math.floor(Math.random() * 7); //pega um curso aleatório

          d.cursos.push(this.dados.curso[cursoIndex]); //insere o curso na demanda
          d.cursos.push(this.dados.curso[cursoIndex + 1]); //insere o curso na demanda
          this.dados.curso[cursoIndex].demandas.push(d); //insere a demanda no curso
          this.dados.curso[cursoIndex + 1].demandas.push(d); //insere a demanda no curso
        } else {
          let cursoIndex = Math.floor(Math.random() * 6); //pega um curso aleatório

          d.cursos.push(this.dados.curso[cursoIndex]); //insere o curso na demanda
          d.cursos.push(this.dados.curso[cursoIndex + 1]); //insere o curso na demanda
          d.cursos.push(this.dados.curso[cursoIndex + 2]); //insere o curso na demanda
          this.dados.curso[cursoIndex].demandas.push(d); //insere a demanda no curso
          this.dados.curso[cursoIndex + 1].demandas.push(d); //insere a demanda no curso
          this.dados.curso[cursoIndex + 2].demandas.push(d); //insere a demanda no curso
        }
      }
      // demandas para análise
      else if (index <= 47) {
        d.status = this.dados.statusDemanda[2];
        this.dados.statusDemanda[2].demandas.push(d);
      }
      // demandas negadas
      else {
        d.status = this.dados.statusDemanda[1];
        this.dados.statusDemanda[1].demandas.push(d);
      }
    });
  }
  calculaDemandaParaAnalise(): number {
    return this.dados.demanda.filter((d) => {
      return d.status.nome === 'Para revisão';
    }).length;
  }
  calculaDemandaEncaminhada(): number {
    return this.dados.demanda.filter((d) => {
      return d.status.nome === 'Encaminhada para curso';
    }).length;
  }
  calculaDemandaNegada(): number {
    return this.dados.demanda.filter((d) => {
      return d.status.nome === 'Negada';
    }).length;
  }
  calculaDemandaApta(): number {
    return this.dados.demanda.filter((d) => {
      return d.status.nome === 'Apta';
    }).length;
  }
}
