import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Panaderia-de-Pan';

  searchText: string = '';
  
  constructor(private router: Router) {}

  onSearch() {
    if (!this.searchText || this.searchText.trim() === '') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/products', this.searchText.trim()]);
    }
  }
}
