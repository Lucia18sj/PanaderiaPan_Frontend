import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUserEmail = new BehaviorSubject<string | null>(null);
  private currentUserName = new BehaviorSubject<string | null>(null);

  // Simulación de "base de datos"
  private fakeDatabase = [
    { email: 'juanito@example.com', password: '12345', name: 'Juanito Pérez' },
    { email: 'maria@example.com', password: 'maria123', name: 'María García' },
    { email: 'luis@example.com', password: 'luispass', name: 'Luis Fernández' },
  ];
  

  constructor() {}

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  getCurrentUserName() {
    return this.currentUserName.asObservable();
  }

  login(email: string, password: string) {
    const user = this.fakeDatabase.find(u => u.email === email && u.password === password);
    if (user) {
      this.loggedIn.next(true);
      this.currentUserEmail.next(user.email);
      this.currentUserName.next(user.name);
    } else {
      console.error('Correo o contraseña incorrectos');
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.currentUserEmail.next(null);
    this.currentUserName.next(null);
  }
}
