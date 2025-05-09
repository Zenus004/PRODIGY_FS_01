import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const token = auth.getToken();
  if (!token) {
    router.navigate(['/']);
    return false;
  }

  try {
    const decoded = auth.decodeToken(token);
    auth.setUser(decoded);
    return true;
  } catch {
    router.navigate(['/']);
    return false;
  }
};
