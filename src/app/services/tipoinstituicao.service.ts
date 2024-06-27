import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Tipoinstituicao } from '../models/tipoinstituicao';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoinstituicaoService {
  
  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/tipoInstituicao";

  constructor() { }

  findAll(): Observable<Tipoinstituicao[]>{
    return this.http.get<Tipoinstituicao[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<Tipoinstituicao>{
    return this.http.delete<Tipoinstituicao>(this.API+"/deleteById/"+id);
  }

  save(tipoInstituicao: Tipoinstituicao): Observable<Tipoinstituicao>{
    return this.http.post<Tipoinstituicao>(this.API+"/save", tipoInstituicao);
  }

  update(tipoInstituicao: Tipoinstituicao, id: number): Observable<Tipoinstituicao>{
    return this.http.put<Tipoinstituicao>(this.API+"/update/"+id, tipoInstituicao);
  }

  findById(id: number): Observable<Tipoinstituicao>{
    return this.http.get<Tipoinstituicao>(this.API+"/findById/"+id);
  }
}
