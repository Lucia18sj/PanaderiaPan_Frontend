
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-my-count',
  imports: [RouterModule],
  templateUrl: './my-count.component.html',
  styleUrl: './my-count.component.css'
})
export class MyCountComponent implements OnInit {
  user: User | null = null;
  constructor(private router: Router,private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getCurrentUser().then((user) => {
      this.user = user;
      console.log('Usuario actual:', this.user);
    });
  }
  
  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
  

  
}
