import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User_serviceService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasker';

  constructor(private auth: User_serviceService, private router: Router) {
  }

  ngOnInit() {
    this.auth.testToken().subscribe({
      next: (res) => {
        //do nothing, token is valid
      },
      error: (err) => {
        this.router.navigate(['/signup']);
      }
    });
  }
}
