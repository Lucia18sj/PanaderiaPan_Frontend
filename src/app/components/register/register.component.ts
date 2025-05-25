import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: '../login/login.component.css',
})
export class RegisterComponent {
  user = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  };

  confirmPassword = '';

  constructor(private userService: UserService, private router: Router) {}

  async onRegister() {
    if (this.user.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await this.userService.register(this.user);
      alert('Usuario registrado correctamente');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error(error);
      alert('Error al registrar usuario: ' + error);
    }
  }
}
