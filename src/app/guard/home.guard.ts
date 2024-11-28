import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const homeGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const localData = localStorage.getItem("jwtToken");
  if(localData != null){
        return true;
  } else {
    router.navigateByUrl("login");
    return false;
  }

  return true;

};
