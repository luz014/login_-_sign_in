import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth-service';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, RouterLink, RouterLinkActive  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {

  constructor(public authService: AuthService, private router: Router) {}

  guestMenu = [
    { url: "/login", content: "Login" },
    { url: "/register", content: "Registrarse" }
  ];

  userMenu = [
    { url: "/dashboard", content: "Dashboard" }
  ];

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
