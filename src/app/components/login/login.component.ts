import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User | null = null;
  email: string = '';
  password: string = '';

  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  constructor() {}

  async onSubmit() {
    this.userService.login(this.email, this.password).then((user) => {
      this.user = user;
      console.log('Usuario:', this.user);
      if (user) {
        if (user.role === 'superAdmin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/mycount/' + user.id_customer]);
        }
      } else {
        alert('Correo o contraseña incorrectos');
      }
    });
  }
}


