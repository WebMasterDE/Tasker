import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User } from 'src/Model/User';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  standalone: true,
  imports: [MatTableModule, CommonModule]
})
export class UsersTableComponent {
  displayedColumns: string[] = ['Name', 'Email', 'Authorization'];
  inputAuth: string[] = ['1', '2', '3']
  dataSource: User[] = [
    { Name: 'Gabriele', Email: 'gabriele.pagnotta1998@gmail.com', Authorization: 3, Password: null }
  ];
}
