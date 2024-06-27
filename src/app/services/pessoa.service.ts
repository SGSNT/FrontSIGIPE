import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/pessoa";

  constructor() { }

  findAll(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<Pessoa>{
    return this.http.delete<Pessoa>(this.API+"/deleteById/"+id);
  }

  save(pessoa: Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.API+"/save", pessoa);
  }

  update(pessoa: Pessoa, id: number): Observable<Pessoa>{
    return this.http.put<Pessoa>(this.API+"/update/"+id, pessoa);
  }

  findById(id: number): Observable<Pessoa>{
    return this.http.get<Pessoa>(this.API+"/findById/"+id);
  }
}
