import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-my-count',
  imports: [RouterModule],
  templateUrl: './my-count.component.html',
  styleUrl: './my-count.component.css'
})
export class MyCountComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string | null = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

 
  ngOnInit() {
    this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });

    this.authService.getCurrentUserName().subscribe(name => {
      this.userName = name;
    });
  }

  onPerfilClick() {
    if (this.isLoggedIn) {
      this.router.navigate(['/configuracion-cuenta']);
    } else {
      this.router.navigate(['/inicio-sesion']);
    }
  }
}
