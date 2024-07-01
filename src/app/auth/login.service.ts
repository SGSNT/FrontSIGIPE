import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { Login } from './login';
import { Usuario } from './usuario';
import { environment } from '../../environments/environment';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http = inject(HttpClient);
  API = environment.SERVIDOR+"/api/login";


  constructor() { }


  logar(login: Login): Observable<string> {
    return this.http.post<string>(this.API, login, {responseType: 'text' as 'json'});
    this.isTokenExpired();
  }

  addToken(token: string) {
    localStorage.setItem('token', token);
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  jwtDecode() {
    let token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return "";
  }

  hasPermission(role: string) {
    let user = this.jwtDecode() as Usuario;
    if (user.role == role)
      return true;
    else
      return false;
  }

  getUsuarioLogado(){

    return this.jwtDecode() as Usuario;

  }

   // Método para verificar se o token está expirado
   isTokenExpired(): boolean {
    let token = this.getToken();
    if (!token) {
      return true; // Se não houver token, considere-o expirado
    }
    let decodedToken: any = jwtDecode(token);

    // Obtendo o tempo atual em milissegundos corretamente
    let currentTime = new Date().getTime();

    // Convertendo exp para milissegundos e comparando com o tempo atual
    if (typeof decodedToken.exp !== 'number') {
      return true; // Se exp não for um número, considere o token expirado
    }

    return decodedToken.exp * 1000 < currentTime;
  }

}
