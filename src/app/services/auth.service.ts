import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly emailHardcodeado = 'afuegolento@gmail.com';
  private readonly passwordHardcodeado = 'afuegolento123';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email === this.emailHardcodeado && password === this.passwordHardcodeado) {
      // Redirigir a home si el login es exitoso
      this.router.navigate(['/home']);
      return true;
    }
    return false; // Login fallido
  }
}
