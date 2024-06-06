  import { Component, inject } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { Router } from '@angular/router';
  import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
  import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
  import { MatInputModule } from '@angular/material/input';
  import { MatSelectModule } from '@angular/material/select';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import Swal from 'sweetalert2';

  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [
      MdbFormsModule,
      FormsModule,
      MdbDropdownModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule,
      FormsModule,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
  })
  export class LoginComponent {
    // Definindo uma array de strings para categorias de usuários
    categorias: string[] = [
      'Aluno',
      'Professor',
      'Coordenação de Curso',
      'Coordenação de Extensão',
    ];

    // Declarando variáveis para login, senha e categoria do usuário
    login!: string;
    senha!: string;
    categoria!: string;

    // Injetando o serviço de roteamento do Angular para poder fazer a navegação entre telas
    router = inject(Router);

    // Função para realizar o login do usuário
    logar() {
      // Verifica se a categoria não foi selecionada
      if (this.categoria === undefined) {
        // Exibe um alerta informando que a categoria não foi selecionada
        Swal.fire({
          title: 'Sem categoria',
          text: 'Selecione uma categoria para prosseguir',
          icon: 'error',
        });
      } else {
        // Verifica se o login e a senha são 'admin'
        if (this.login == 'admin' && this.senha == 'admin') {
          // Verifica qual categoria foi selecionada e navega para a página correspondente
          if (this.categoria === this.categorias[0]) {
            this.router.navigate(['aluno/demandas-disponiveis']);
          } else if (this.categoria === this.categorias[1]) {
            this.router.navigate(['professor/demandas-disponiveis']);
          } else if (this.categoria === this.categorias[2]) {
            this.router.navigate(['coordenacao-curso/demandas-disponiveis']);
          } else if (this.categoria === this.categorias[3]) {
            this.router.navigate(['coordenacao-extensao/dashboard']);
          }
        } else {
          // Exibe um alerta informando que o login ou senha são inválidos
          Swal.fire({
            title: 'Login ou senha inválidos!',
            text: 'Tente novamente para prosseguir',
            icon: 'error',
          });
        }
      }
    }
    // Função para mudar o foco para um elemento específico com base no ID
    changeFocusTo(id: string) {
      // Obtém o elemento pelo ID fornecido como parâmetro
      let next = document.getElementById(id);

      // Se o elemento for encontrado, define o foco nele
      next?.focus();
    }
  }
