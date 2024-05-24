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
    return this.http.post<string>(this.API + "/save",Instituicao,{responseType: 'text' as 'json'});
  }

  update(instituicao: Instituicao, id:number): Observable<string>{
    return this.http.put<string>(this.API + "/update/" + id, Instituicao, {responseType: 'text' as 'json'});
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API + "/delete/" + id, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Instituicao>{
    return this.http.get<Instituicao>(this.API + "/findById/" + id);
  }

  listAll(): Observable<Instituicao[]>{
    return this.http.get<Instituicao[]>(this.API + "/listAll");
    
  }

}
