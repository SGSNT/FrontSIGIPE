import { Injectable, inject } from '@angular/core';
import { Demandante } from '../models/demandante';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandanteService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/demandante";

  constructor() { }

  save(demandante: Demandante): Observable<Demandante>{
    return this.http.post<Demandante>(this.API + "/save",demandante);
  }

  update(demandante: Demandante, id:number): Observable<Demandante>{
    return this.http.put<Demandante>(this.API + "/update/" + id, demandante);
  }

  delete(id: number): Observable<Demandante>{
    return this.http.delete<Demandante>(this.API + "/delete/" + id);
  }

  findById(id: number): Observable<Demandante>{
    return this.http.get<Demandante>(this.API + "/findById/" + id);
  }

  findAll(): Observable<Demandante[]>{
    return this.http.get<Demandante[]>(this.API + "/findAll");
    
  }
}
