import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service'; 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  get user(): User | undefined {
    return this.userService.user;
  }
  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}
  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}
