import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule,FormsModule, MdbDropdownModule, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  categorias: string[] = [
    "Coordenação de Extensão",
    "Coordenação de Curso",
    "Professor",
    "Aluno"
  ];

  login!: string;
  senha!: string;

  router = inject(Router);

  logar(){
    
    if(this.login == 'admin' && this.senha == 'admin'){

      this.router.navigate(['admin/teste']);

    }else{
      alert('Login ou senha inválidos!');
    }
  }

}
