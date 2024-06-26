import { Component } from '@angular/core';
import { Coordenadorcurso } from '../../../../models/coordenadorcurso';

@Component({
  selector: 'app-demandasdisponiveiscoordenacaocurso',
  standalone: true,
  imports: [],
  templateUrl: './demandasdisponiveiscoordenacaocurso.component.html',
  styleUrl: './demandasdisponiveiscoordenacaocurso.component.scss'
})
export class DemandasdisponiveiscoordenacaocursoComponent {
  user!: Coordenadorcurso;

  constructor() {
    this.user = new Coordenadorcurso();
  }

}
