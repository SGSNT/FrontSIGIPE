import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule,FormsModule, MdbDropdownModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login!: string;
  senha!: string;

  router = inject(Router);

  logar(){
    
    if(this.login == 'admin' && this.senha == 'admin'){

      this.router.navigate(['admin/funcao']);

    }else{
      alert('Login ou senha inválidos!');
    }
  }

}
