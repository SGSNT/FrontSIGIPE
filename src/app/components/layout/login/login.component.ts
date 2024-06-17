import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import Swal from 'sweetalert2';
import { LoginService } from '../../../auth/login.service';
import { Login } from '../../../auth/login';
import { CommonModule } from '@angular/common';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
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

  login: Login = new Login();

  // Declarando variável de categoria do usuário
  categoria!: string;

  // Injetando o serviço de roteamento do Angular para poder fazer a navegação entre telas
  router = inject(Router);
  loginService = inject(LoginService);

  constructor(){
    this.loginService.removerToken();
  }

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
           this.loginService.logar(this.login).subscribe({

            next: token => {

              console.log(token);

              if(token){

                this.loginService.addToken(token);

                this.navigateByCategoria(this.categoria);
              }

            },

            error: erro => {

              Swal.fire({

                title:"Login ou senha inválidos!",
                text: "Verifique os dados informados e tente novamente",
                icon: "error",

              });
            }
            
           });
        } 
  }

 //Função para navegar para a página correspondente à categoria selecionada
  navigateByCategoria(categoria: string){

    switch(categoria){

      case 'Aluno':
        this.router.navigate(['/aluno/demandas-disponiveis']);
      break;

      case 'Professor':
        this.router.navigate(['/professor/demandas-disponiveis']);
      break;

      case 'Coordenação de Curso':
        this.router.navigate(['/coordenacao-curso/demandas-disponiveis']);
      break;

      case 'Coordenação de Extensão':
        this.router.navigate(['/coordenacao-extensao/dashboard']);
      break;

      default:
        this.router.navigate(['/login']);
      break;
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