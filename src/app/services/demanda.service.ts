import { Injectable, inject } from '@angular/core';
import { Demanda } from '../models/demanda';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandaService {
  
  http = inject(HttpClient);

  API = "http://localhost:8081/api/demanda";

  constructor() { }

  findAll(): Observable<Demanda[]>{
    return this.http.get<Demanda[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/deleteById/"+id, {responseType: 'text' as 'json'});
  }

  save(demanda: Demanda): Observable<string>{
    return this.http.post<string>(this.API+"/save", demanda, {responseType: 'text' as 'json'});
  }

  update(demanda: Demanda, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, demanda, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Demanda>{
    return this.http.get<Demanda>(this.API+"/findById/"+id);
  }
}
