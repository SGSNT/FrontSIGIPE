import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Statusdemanda } from '../models/statusdemanda';

@Injectable({
  providedIn: 'root'
})
export class StatusdemandaService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/statusDemanda";

  constructor() { }

  findAll(): Observable<Statusdemanda[]>{
    return this.http.get<Statusdemanda[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<Statusdemanda>{
    return this.http.delete<Statusdemanda>(this.API+"/deleteById/"+id);
  }

  save(statusDemanda: Statusdemanda): Observable<Statusdemanda>{
    return this.http.post<Statusdemanda>(this.API+"/save", statusDemanda);
  }

  update(statusDemanda: Statusdemanda, id: number): Observable<Statusdemanda>{
    return this.http.put<Statusdemanda>(this.API+"/update/"+id, statusDemanda);
  }

  findById(id: number): Observable<Statusdemanda>{
    return this.http.get<Statusdemanda>(this.API+"/findById/"+id);
  }
}
