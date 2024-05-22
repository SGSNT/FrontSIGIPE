import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcao } from '../models/funcao';

@Injectable({
  providedIn: 'root'
})
export class FuncaoService {

  http = inject(HttpClient);

  API = "http://localhost:8081/api/funcao";

  constructor() { }

  findAll(): Observable<Funcao[]>{
    return this.http.get<Funcao[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/deleteById/"+id, {responseType: 'text' as 'json'});
  }

  save(funcao: Funcao): Observable<string>{
    return this.http.post<string>(this.API+"/save", funcao, {responseType: 'text' as 'json'});
  }

  update(funcao: Funcao, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, funcao, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Funcao>{
    return this.http.get<Funcao>(this.API+"/findById/"+id);
  }
}
