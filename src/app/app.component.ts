import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { UserService } from './components/user.service'; // Asegúrate de que el servicio esté importado
import { User } from './components/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{
  user: User | null = null;
  title = 'Panaderia-de-Pan';
  searchText: string = '';
  private userSub!: Subscription;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.userSub = this.userService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    if (this.userSub) this.userSub.unsubscribe();
  }

  onSearch() {
    if (!this.searchText || this.searchText.trim() === '') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/products', this.searchText.trim()]);
    }
  }

  getUser() {
    this.userService.getCurrentUser().then((user) => {
      this.user = user;
      console.log('Usuario actual:', this.user);
    });
  }
  goToAccount() {
    this.userService.getCurrentUser().then((user) => {
      if (user) {
        if (user.role === 'superAdmin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/mycount/' + user.id_customer]);
        }
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

}
