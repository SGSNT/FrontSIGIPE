import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  let loginService = inject(LoginService);
  let userRole = loginService.getUsuarioLogado().role;
  let router = inject(Router);
  let usuarioLogado = loginService.getUsuarioLogado();

  //--------Verifica se o usuário está logado--------//
  if(!usuarioLogado){

    Swal.fire({

      title: 'Não autenticado',
      text: 'Você precisa estar autenticado para acessar essa página!',
      icon: 'warning',

    }).then(() => {

      router.navigate(['/login']);

    });

    return false;

  }

  //--------Verificar se o token de autenticação está expirado--------//
  if(loginService.isTokenExpired()){

    Swal.fire({

      title: 'Sessão expirada',
      text: 'Sua sessão expirou, faça login novamente!',
      icon: 'info',

    }).then(() => {

      router.navigate(['/login']);

    });
     
    return false;

  }  
  
  //--------Verificações de permissão com base na Role do usuário--------//
  if(userRole !== 'coordenadorExtensao' && state.url.startsWith('/coordenacao-extensao')){

    Swal.fire({
      title: 'Sem permissão',
      text: 'Você não tem permissão para acessar essa página!',
      icon: 'error',
    }).then(() => {

      router.navigate(['/login']);

    });

    return false;
  }

  if(userRole !== 'coordenadorCurso' && state.url.startsWith('/coordenacao-curso')){

    Swal.fire({
      title: 'Sem permissão',
      text: 'Você não tem permissão para acessar essa página!',
      icon: 'error',
    }).then(() => {

      router.navigate(['/login']);

    });

    return false;
  }

  if(userRole !== 'professor' && state.url.startsWith('/professor')){

    Swal.fire({
      title: 'Sem permissão',
      text: 'Você não tem permissão para acessar essa página!',
      icon: 'error',
    }).then(() => {

      router.navigate(['/login']);

    });

    return false;
  }

  if(userRole !== 'aluno' && state.url.startsWith('/aluno')){

    Swal.fire({
      title: 'Sem permissão',
      text: 'Você não tem permissão para acessar essa página!',
      icon: 'error',
    }).then(() => {

      router.navigate(['/login']);

    });

    return false;

  }
  
  return true;
};
