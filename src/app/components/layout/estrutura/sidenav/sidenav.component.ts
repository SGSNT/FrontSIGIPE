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
      console.log(1);
      return 1;
    } else if(url === '/professor/demandas-disponiveis'){
      console.log(2);
      return 2;
    } else if(url === '/coordenacao-curso/demandas-disponiveis'){
      console.log(3);
      return 3;
    }
    console.log(4);
    return 4;
  }
}
