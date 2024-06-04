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
  categorias: string[] = [
    'Aluno',
    'Professor',
    'Coordenação de Curso',
    'Coordenação de Extensão'
  ];

  login!: string;
  senha!: string;
  categoria!: string;

  router = inject(Router);

  logar() {
    if (this.categoria === undefined) {//verifica se existe categoria selecionada
      Swal.fire({
        title: 'Sem categoria',
        text: 'Selecione uma categoria para prosseguir',
        icon: 'error',
      });
    } else {
      if (this.login == 'admin' && this.senha == 'admin') {//verifica se login e senha estão certos
        //aninhamento de IFs para verificar qual a categoria selecionada e direcionar para a página certa
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
        Swal.fire({
          title: 'Login ou senha inválidos!',
          text: 'Tente novamente para processguir',
          icon: 'error',
        });
      }
    }
  }
}
