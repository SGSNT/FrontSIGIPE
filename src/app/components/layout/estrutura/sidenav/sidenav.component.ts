import { withNoXsrfProtection } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  constructor(){
    this.verificaUrl();
  }
  verificaUrl(): number{
    let url = window.location.pathname;
    if(url.startsWith('/aluno')){
      return 1;
    } else if(url.startsWith('/professor')){
      return 2;
    } else if(url.startsWith('/coordenacao-curso')){
      return 3;
    } else if(url.startsWith('/coordenacao-extensao')){
      return 4;
    }
    return 0;
  }
}
