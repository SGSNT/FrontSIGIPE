import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Instituicao } from '../models/instituicao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {

  http = inject(HttpClient);

  API = "http://localhost:8081/api/instituicao";

  constructor() { 
    }

  save(instituicao: Instituicao): Observable<String>{
    return this.http.post<string>(this.API + "/save",instituicao,{responseType: 'text' as 'json'});
  }

  update(instituicao: Instituicao, id:number): Observable<string>{
    return this.http.put<string>(this.API + "/update/" + id, instituicao,{responseType: 'text' as 'json'});
  }

  deleteById(id: number): Observable<string>{
    return this.http.delete<string>(this.API + "/deleteById/" + id, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Instituicao>{
    return this.http.get<Instituicao>(this.API + "/findById/" + id);
  }

  findAll(): Observable<Instituicao[]>{
    return this.http.get<Instituicao[]>(this.API + "/findAll");
    
  }

}
