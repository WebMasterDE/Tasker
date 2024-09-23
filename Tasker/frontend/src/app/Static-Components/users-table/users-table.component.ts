import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User_serviceService } from 'src/app/Services/auth.service';
import { User } from 'src/Model/User';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  standalone: true,
  imports: [MatTableModule, CommonModule, MatButtonModule]
})
export class UsersTableComponent implements OnInit {
  constructor(private http_user: User_serviceService) { }
  ngOnInit(): void {
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
  }

}
