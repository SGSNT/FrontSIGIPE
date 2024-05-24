import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  http = inject(HttpClient);

  API = "http://localhost:8081/api/pessoa";

  constructor() { }

  findAll(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/deleteById/"+id, {responseType: 'text' as 'json'});
  }

  save(pessoa: Pessoa): Observable<string>{
    return this.http.post<string>(this.API+"/save", pessoa, {responseType: 'text' as 'json'});
  }

  update(pessoa: Pessoa, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, pessoa, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Pessoa>{
    return this.http.get<Pessoa>(this.API+"/findById/"+id);
  }
}
