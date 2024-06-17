import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../../../auth/login.service';
import { Usuario } from '../../../../auth/usuario';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  loginService = inject(LoginService);
  usuario!: Usuario;

  constructor(){
     this.usuario = this.loginService.getUsuarioLogado();
  }

}
