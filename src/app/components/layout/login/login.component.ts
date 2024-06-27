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
import { Token } from '@angular/compiler';

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
  categoria!: string;

  login: Login = new Login();

  loginService = inject(LoginService);

  // Injetando o serviço de roteamento do Angular para poder fazer a navegação entre telas
  router = inject(Router);

  constructor(){
    this.loginService.removerToken();
  }

  // Função para realizar o login do usuário
  logar() {
    
    if(this.categoria == null){

      Swal.fire({

        title: 'Sem categoria selecionada',
        text: 'Por favor, selecione uma categoria para prosseguir',
        icon: 'warning',
      });
    }else{

      this.loginService.logar(this.login).subscribe({

        next: (token) => {

          this.loginService.addToken(token);

          const user = this.loginService.jwtDecode() as {role: string};
          this.redirectToPageByRole(user.role);
        },

        error:() => {

          Swal.fire({

            title: 'Login ou senha inválidos',
            text: 'Por favor, verifique suas credenciais e tente novamente',
            icon: 'error',

          });

        }

      });

    }
  }

  redirectToPageByRole(role: string) {
    switch (role) {
      case 'aluno':
        this.router.navigate(['aluno/demandas-disponiveis']);
        break;
      case 'professor':
        this.router.navigate(['professor/demandas-disponiveis']);
        break;
      case 'coordenacaoCurso':
        this.router.navigate(['coordenacao-curso/demandas-disponiveis']);
        break;
      case 'coordenacaoExtensao':
        this.router.navigate(['coordenacao-extensao/dashboard']);
        break;
      default:
        Swal.fire({
          title: 'Erro',
          text: 'Role desconhecida!',
          icon: 'error',
        });
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
