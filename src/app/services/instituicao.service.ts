import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Instituicao } from '../models/instituicao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/instituicao";

  constructor() { 
    }

  save(instituicao: Instituicao): Observable<Instituicao>{
    return this.http.post<Instituicao>(this.API + "/save",instituicao);
  }

  update(instituicao: Instituicao, id:number): Observable<Instituicao>{
    return this.http.put<Instituicao>(this.API + "/update/" + id, instituicao);
  }

  deleteById(id: number): Observable<Instituicao>{
    return this.http.delete<Instituicao>(this.API + "/deleteById/" + id);
  }

  findById(id: number): Observable<Instituicao>{
    return this.http.get<Instituicao>(this.API + "/findById/" + id);
  }

  findAll(): Observable<Instituicao[]>{
    return this.http.get<Instituicao[]>(this.API + "/findAll");
    
  }

}
