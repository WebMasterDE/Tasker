import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {User} from 'src/Model/User';
import {User_serviceService} from 'src/app/Services/auth.service';


@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDialogComponent {
  User: User = {Name: '', Email: '', Password: '', Authorization: 3};

  constructor(private http_user: User_serviceService) {
  }

  SendSignup() {
    this.http_user.sendUser(this.User).subscribe(res => {
    }, error => {
      console.log(error)
    })
    setTimeout(() => {

      window.location.reload()
    }, 500);
  }
}
