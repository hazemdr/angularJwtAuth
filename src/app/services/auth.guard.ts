import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';

export const authGuard: CanActivateFn = (route, state) => {
 const _user = inject(UserService);
 const router = inject(Router)
 if (_user.connected()== true) {
  
  return true
 } else {
  router.navigate(['/login'])
  return false
  
 }
};
