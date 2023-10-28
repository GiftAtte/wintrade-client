import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route,state) => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.isLogIn?true:router.navigateByUrl('/login');
};

export const isAdmin:CanActivateFn=(route,state)=>{
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.hasRole("ADMIN_USER")?true:router.navigateByUrl('/profile')
}