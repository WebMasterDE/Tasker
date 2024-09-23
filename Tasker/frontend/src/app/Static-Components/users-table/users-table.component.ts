import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User_serviceService } from 'src/app/Services/auth.service';
import { User } from 'src/Model/User';
import { MatButtonModule } from '@angular/material/button';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from 'src/app/Services/loading.service';
import { WindowDialogComponent } from '../window-dialog/window-dialog.component';
import { SpinnerComponent } from "../../utils/spinner/spinner.component";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  standalone: true,
  imports: [MatTableModule, CommonModule, MatButtonModule, SpinnerComponent]
})
export class UsersTableComponent implements OnInit {
  datas;
  constructor(private http_user: User_serviceService, private load: LoadingService) { }
  ngOnInit(): void {
    this.load.show()
    this.getAllUsers()
  }
  displayedColumns: string[] = ['Id_User', 'Name', 'Email', 'Authorization', 'Change_password'];
  inputAuth: string[] = ['1', '2', '3']
  dataSource: User[] = [
  ];

  getAllUsers() {
    this.http_user.getAllUsers().subscribe(val => {
      console.log(val)
      this.dataSource = val.map(singleUser => ({
        Id_User: singleUser.Id_User,
        Name: singleUser.Name,
        Email: singleUser.Email,
        Authorization: singleUser.Authorization,
        Password: singleUser.Password || null
      }));
    });
    this.load.hide()
  }

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(UserDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogWindow(id: number) {
    const dialogRef = this.dialog.open(WindowDialogComponent, this.datas = {
      data: {
        title: 'Modifica password',
        text: 'Inserisci la nuova password',
        btn_left: 'Annulla',
        btn_right: 'Invia',
        typeinput: 'password',
        action: () => { return this.http_user.changePassword(this.datas.data.inputdata, id.toString()) }
      },
      width: '20%',
      height: '27%'

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
