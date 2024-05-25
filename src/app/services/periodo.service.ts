import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Periodo } from '../models/periodo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  http = inject(HttpClient);

  API = "http://localhost:8081/api/periodo";

  constructor() {}

  save(periodo: Periodo): Observable<string>{
    return this.http.post<string>(this.API + "/save",periodo,{responseType: 'text' as 'json'});
  }

  update(periodo: Periodo, id:number): Observable<string>{
    return this.http.put<string>(this.API + "/update/" + id, periodo,{responseType: 'text' as 'json'});
  }

  deleteById(id: number): Observable<string>{
    return this.http.delete<string>(this.API + "/deleteById/" + id, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Periodo>{
    return this.http.get<Periodo>(this.API + "/findById/" + id);
  }

  findAll(): Observable<Periodo[]>{
    return this.http.get<Periodo[]>(this.API + "/findAll");
    
  }
}
