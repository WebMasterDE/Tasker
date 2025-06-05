import { Component, OnInit } from '@angular/core';
import { User_serviceService } from '../../Services/auth.service'
import { User } from "../../../Model/User";
import { TasksService } from "../../Services/tasks.service";
import { Task } from "../../../Model/Task";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],

})
export class TasksComponent implements OnInit {

  loggedUser: User;
  tasks: Task[] = []

  constructor(
    private http_user: User_serviceService,
    private task: TasksService,
    private userHTTP: User_serviceService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.userHTTP.testToken().subscribe({
      next: (res) => {
        this.getLoggedUser();
        this.getTasks();
      },
      error: (err) => {
        this.router.navigate(['/signup']);
      }
    });
  }

  getLoggedUser() {
    this.http_user.getUser(this.getUserId()).subscribe(response => {
      this.loggedUser = response;
    })
  }

  getTasks() {
    this.task.GetTasksUser().subscribe(resp => {
      this.tasks = resp;
    })
  }

  getUserId() {
    return this.userHTTP.tokenData.id;
  }

}
