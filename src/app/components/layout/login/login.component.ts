import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Login } from '../../../auth/login';
import { LoginService } from '../../../auth/login.service';
import { CommonModule } from '@angular/common';

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
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
 
 login: Login = new Login;
 loginService = inject(LoginService);
  // Injetando o serviço de roteamento do Angular para poder fazer a navegação entre telas
  router = inject(Router);
  
  categoria: string = '';

  categorias: { value: string, viewValue: string }[] = [
    { value: 'coordenador_extensao', viewValue: 'Coordenador de Extensão' },
    { value: 'coordenador_curso', viewValue: 'Coordenador de Curso' },
    { value: 'professor', viewValue: 'Professor' },
    { value: 'aluno', viewValue: 'Aluno' }
  ];

  // Função para realizar o login do usuário
  logar() {
    console.log('Método logar() chamado'); // Adicionando console.log() para verificar se o método está sendo chamado

    this.loginService.logar(this.login).subscribe({
      next: token => {
        console.log(token);

        if(token)
          this.loginService.addToken(token);

        const userRoutes: {[key: string]: string} = {
          coordenador_extensao: '/coordenadordeextensao/dashboard',
          coordenador_curso: '/coordenadordecurso/demandas-disponiveis',
          professor: '/professor/demandas-disponiveis',
          aluno: '/aluno/demandas-disponiveis'
        };

        const userType = userRoutes[this.login.username] || '/login';
        this.router.navigate([userType]);
      },
      error: erro => {
        console.error(erro);
      }
    });
  }

  // Função para mudar o foco para um elemento específico com base no ID
  changeFocusTo(id: string) {
    // Obtém o elemento pelo ID fornecido como parâmetro
    let next = document.getElementById(id);

    // Se o elemento for encontrado, define o foco nele
    next?.focus();
  }
}
