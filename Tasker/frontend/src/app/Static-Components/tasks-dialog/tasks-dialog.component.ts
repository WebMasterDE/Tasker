import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Hours } from 'src/Model/Hours';
import { DialogComponent } from '../table/table.component';
import { HoursService } from 'src/app/Services/hours.service';
import { TasksComponent } from 'src/app/Pages/tasks/tasks.component';
import { TasksService } from 'src/app/Services/tasks.service';
import { LoadingService } from 'src/app/Services/loading.service';

@Component({
  selector: 'app-tasks-dialog',
  templateUrl: './tasks-dialog.component.html',
  styleUrls: ['./tasks-dialog.component.css']
})
export class TasksDialogComponent {
  arrayTasks = []
  hourData: Hours = { Operator: this.getnameUser(), Date: '', Hour: 0, Description: '', Id_task: null, Id_user: null, Commit: null };
  constructor(private dialogRef: MatDialogRef<DialogComponent>, private http_hours: HoursService, private http_tasks: TasksService, private loading: LoadingService) {
    this.arrayTasks = this.http_tasks.getAllTasks
  }

  ngOnInit() {
  }

  getUserId() {
    let data = JSON.parse(localStorage.getItem('data'))
    return data.id
  }

  getnameUser() {
    let data = JSON.parse(localStorage.getItem('data'))

    if (data.name) {

      return data.name
    } else {
      return ''
    }
  }

  inserisciOra() {
    this.hourData.Id_user = this.getUserId()
    this.http_hours.addHours(this.hourData).subscribe((data) => {

    });
    window.location.reload()
  }

  checkAllInput() {
    if (!this.hourData.Date) {
      return true
    } else if (!this.hourData.Hour) {
      return true
    }
    return false
  }
}
