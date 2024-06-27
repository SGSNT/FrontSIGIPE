import { Injectable, inject } from '@angular/core';
import { Demanda } from '../models/demanda';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandaService {
  
  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/demanda";

  constructor() { }

  findAll(): Observable<Demanda[]>{
    return this.http.get<Demanda[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<Demanda>{
    return this.http.delete<Demanda>(this.API+"/deleteById/"+id);
  }

  save(demanda: Demanda): Observable<Demanda>{
    return this.http.post<Demanda>(this.API+"/save", demanda);
  }

  update(demanda: Demanda, id: number): Observable<Demanda>{
    return this.http.put<Demanda>(this.API+"/update/"+id, demanda);
  }

  findById(id: number): Observable<Demanda>{
    return this.http.get<Demanda>(this.API+"/findById/"+id);
  }
}
