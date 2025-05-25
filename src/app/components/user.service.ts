
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();
  url = 'http://localhost:3000/api/customers';

  constructor() {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      const user = JSON.parse(userData);
      this.userSubject.next(user);
    }
  }

  async login(email: string, password: string): Promise<User | null> {
    const response = await fetch(`${this.url}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) return null;

    const userData = await response.json();
    localStorage.setItem('currentUser', JSON.stringify(userData));
    this.userSubject.next(userData);
    return userData;
  }

  getCurrentUser(): Promise<User | null> {
    return Promise.resolve(this.userSubject.getValue());
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.userSubject.next(null);
  }

  
  async register(user: {
    name: string;
    lastname: string;
    email: string;
    password: string;
  }): Promise<any> {
    const response = await fetch(`${this.url}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al registrar usuario');
    }

    const userData = await response.json();
    localStorage.setItem('currentUser', JSON.stringify(userData));
    this.userSubject.next(userData);
    return userData;
  }

}
