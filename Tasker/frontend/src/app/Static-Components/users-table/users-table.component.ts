import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User_serviceService } from 'src/app/Services/auth.service';
import { User } from 'src/Model/User';
import { MatButtonModule } from '@angular/material/button';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from 'src/app/Services/loading.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  standalone: true,
  imports: [MatTableModule, CommonModule, MatButtonModule]
})
export class UsersTableComponent implements OnInit {
  constructor(private http_user: User_serviceService, private load: LoadingService) { }
  ngOnInit(): void {
    this.load.show()
    this.getAllUsers()
  }
  displayedColumns: string[] = ['Name', 'Email', 'Authorization'];
  inputAuth: string[] = ['1', '2', '3']
  dataSource: User[] = [
  ];

  getAllUsers() {
    this.http_user.getAllUsers().subscribe(val => {
      // Crea un nuovo array con i dati ricevuti dall'API
      this.dataSource = val.map(singleUser => ({
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
      console.log(`Dialog result: ${result}`);
    });
  }
}
