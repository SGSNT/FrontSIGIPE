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
    if(url === '/aluno/demandas-disponiveis'){
      return 1;
    } else if(url === '/professor/demandas-disponiveis'){
      return 2;
    } else if(url === '/coordenacao-curso/demandas-disponiveis'){
      return 3;
    }
    return 4;
  }
}
