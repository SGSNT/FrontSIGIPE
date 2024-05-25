import { Injectable, inject } from '@angular/core';
import { Demandante } from '../models/demandante';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandanteService {

  http = inject(HttpClient);

  API = "http://localhost:8081/api/demandante";

  constructor() { }

  save(demandante: Demandante): Observable<String>{
    return this.http.post<string>(this.API + "/save",demandante,{responseType: 'text' as 'json'});
  }

  update(demandante: Demandante, id:number): Observable<string>{
    return this.http.put<string>(this.API + "/update/" + id, demandante,{responseType: 'text' as 'json'});
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API + "/delete/" + id, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Demandante>{
    return this.http.get<Demandante>(this.API + "/findById/" + id);
  }

  findAll(): Observable<Demandante[]>{
    return this.http.get<Demandante[]>(this.API + "/findAll");
    
  }
}
