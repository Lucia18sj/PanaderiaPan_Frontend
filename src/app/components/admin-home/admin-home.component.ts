import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-home',
  imports: [RouterModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  constructor(private router: Router,private userService: UserService) {}
  
  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
