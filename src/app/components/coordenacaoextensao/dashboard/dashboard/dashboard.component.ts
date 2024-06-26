import { Component } from '@angular/core';
import { Coordenadorextensao } from '../../../../models/coordenadorextensao';
import { Demanda } from '../../../../models/demanda';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  user!: Coordenadorextensao;
  demandas: Demanda[] = [];

  constructor() {
    this.user = new Coordenadorextensao();
  }

  calculaDemandaParaAnalise(): number {
    return 10;
  }
  calculaDemandaEncaminhada(): number {
    return 10;
  }
  calculaDemandaNegada(): number {
    return 10;
  }
  calculaDemandaApta(): number {
    return 10;
  }
  calculaDemandaIniciada(){
    return 10;
  }
  calculaDemandaFinalizada(){
    return 10;
  }
}
