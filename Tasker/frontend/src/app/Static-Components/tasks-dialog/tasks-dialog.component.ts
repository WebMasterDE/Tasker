import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Hours } from 'src/Model/Hours';
import { DialogComponent } from '../table/table.component';
import { HoursService } from 'src/app/Services/hours.service';
import { TasksService } from 'src/app/Services/tasks.service';
import { LoadingService } from 'src/app/Services/loading.service';
import { OvertimeService } from 'src/app/Services/overtime.service';
import { Overtime } from 'src/Model/Overtime';

@Component({
  selector: 'app-tasks-dialog',
  templateUrl: './tasks-dialog.component.html',
  styleUrls: ['./tasks-dialog.component.css']
})
export class TasksDialogComponent {
  arrayTasks = []
  hourData: Hours = {
    Operator: this.getnameUser(),
    Date: this.getTodayDate(),
    Hour: 0,
    Description: '',
    Id_task: null,
    Id_user: null,
    Commit: null
  };

  overtime: Overtime = {
    Hours: 0,
    Date: this.getTodayDate(),
    Id_user: this.getUserId()
  }
  show: boolean;

  constructor(private dialogRef: MatDialogRef<DialogComponent>, private http_overtime: OvertimeService, private http_hours: HoursService, private http_tasks: TasksService, private loading: LoadingService) {
    this.arrayTasks = this.http_tasks.getAllTasks
  }

  ngOnInit() {
  }

  getUserId() {
    let data = JSON.parse(localStorage.getItem('data'))
    return data.id
  }

  getTodayDate(): string {
    return new Date().toISOString().split('T')[0]; // Restituisce la data nel formato YYYY-MM-DD
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

    if (this.show) {

      this.overtime.Date = this.hourData.Date
      this.http_overtime.InsertOvertimeHours(this.overtime).subscribe(data => {

      })
    }

    this.hourData.Id_user = this.getUserId()
    this.hourData.Hour = this.hourData.Hour + this.overtime.Hours
    this.http_hours.addHours(this.hourData).subscribe((data) => {

    });
    window.location.reload()
  }


  checkAllInput() {
    if (!this.hourData.Date) {
      return true
    } else if (!this.hourData.Hour) {
      return true
    } else if (!this.hourData.Description) {
      return true
    } else if (!this.hourData.Id_task) {
      return true
    }
    return false
  }

  showStraordinario() {
    this.show = !this.show
  }
}
