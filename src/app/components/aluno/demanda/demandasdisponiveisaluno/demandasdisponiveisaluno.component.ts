import { Component } from '@angular/core';
import { Aluno } from '../../../../models/aluno';

@Component({
  selector: 'app-demandasdisponiveisaluno',
  standalone: true,
  imports: [],
  templateUrl: './demandasdisponiveisaluno.component.html',
  styleUrl: './demandasdisponiveisaluno.component.scss'
})
export class DemandasdisponiveisalunoComponent {
  user!: Aluno;

  constructor() {
    this.user = new Aluno();
  }
}
