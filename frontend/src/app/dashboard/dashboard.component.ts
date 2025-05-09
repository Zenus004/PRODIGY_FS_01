import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  auth = inject(AuthService);
  router = inject(Router);
  user = signal(this.auth.decodeToken(this.auth.getToken()!));

  logout() {
    localStorage.removeItem('token');
    this.auth.setUser(null);
    this.router.navigate(['/']);
  }
}
