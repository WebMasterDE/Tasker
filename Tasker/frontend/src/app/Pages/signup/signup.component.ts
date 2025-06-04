import { Component, OnInit } from '@angular/core';
import { User_serviceService } from "../../Services/auth.service";
import { User } from "../../../Model/User";
import { Router } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  mail: string = '';
  password: string = '';

  constructor(private http_user: User_serviceService, private router: Router, private snack: MatSnackBar) {

  }

  ngOnInit(): void {
    if (this.http_user.IsloggedIn()) {
      this.router.navigate(['/calendario']);
    }
  }

  login() {
    this.http_user.login(this.mail, this.password).subscribe({
      next: (res) => {
        this.router.navigate(['/calendario']);
      },
      error: (err) => {
        this.snack.open('Credenziali non valide', '', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'end'
        });
      },
      complete: () => {
        console.log('Login completata.');
      }
    });
  }


}
