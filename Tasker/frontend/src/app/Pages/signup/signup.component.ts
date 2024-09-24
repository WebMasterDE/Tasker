import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  constructor(private http_user: User_serviceService, private route: Router, private snack: MatSnackBar) {

  }

  ngOnInit(): void {
    this.http_user.IsloggedIn()
  }


  User: User = { Name: '', Email: '', Password: '', Authorization: 3 };


  SendSignup() {
    this.http_user.sendUser(this.User).subscribe(res => {
    }, error => {
      console.log(error)
    })
  }

  login() {
    this.http_user.loginUser(this.User).subscribe(resp => {
      if (resp) {
        localStorage.setItem("data", JSON.stringify(resp))

        this.route.navigate(['/calendario'])
      }
    }, err => {
      this.snack.open('Credenziali non valide', '', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'end'

      })
    })
  }



}
