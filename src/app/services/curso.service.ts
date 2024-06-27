import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  http = inject(HttpClient);

  API = environment.SERVIDOR+"/api/curso";

  constructor() { }

  findAll(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.API+"/findAll");
  }

  delete(id: number): Observable<Curso>{
    return this.http.delete<Curso>(this.API+"/deleteById/"+id);
  }

  save(curso: Curso): Observable<Curso>{
    return this.http.post<Curso>(this.API+"/save", curso);
  }

  update(curso: Curso, id: number): Observable<Curso>{
    return this.http.put<Curso>(this.API+"/update/"+id, curso);
  }

  findById(id: number): Observable<Curso>{
    return this.http.get<Curso>(this.API+"/findById/"+id);
  }
}
