import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register({ username: this.username, email: this.email, password: this.password }).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
        const decoded = this.auth.decodeToken(res.token);
        this.auth.setUser(decoded);
        this.router.navigate(['/dashboard']);
      },
      error: () => this.error = 'Registration failed'
    });
  }
  getPasswordStrengthClass() {
    if (!this.password) return '';
    if (this.password.length < 4) return 'strength-too-weak';
    if (this.password.length < 6 && this.password.length >= 4) return 'strength-weak';
    if (this.password.length < 8 && this.password.length >= 6) return 'strength-medium';
    if (this.password.length < 10 && this.password.length >= 8) return 'strength-medium';
    if (this.password.length > 10) return 'strength-strong';
    return '';
  }
}
