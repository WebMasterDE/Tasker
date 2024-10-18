import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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

  hourData: Hours;
  Id_hour: number = this.data.dati?.Id_hour ? this.data.dati.Id_hour : null
  taskDescription: string

  overtime: Overtime = {
    Hours: 0,
    Date: this.getTodayDate(),
    Id_user: this.getUserId()
  }
  show: boolean;
  selectedvalue: string

  constructor(@Inject(MAT_DIALOG_DATA) public data: { dati }, private dialogRef: MatDialogRef<DialogComponent>, private http_overtime: OvertimeService, private http_hours: HoursService, private http_tasks: TasksService, private loading: LoadingService) {
    this.arrayTasks = this.http_tasks.getAllTasks
  }

  ngOnInit() {
    this.hourData = {
      Operator: this.getnameUser(),
      Date: this.data.dati?.Date ? this.data.dati.Date : this.getTodayDate(),
      Hour: this.data.dati?.Hour ? this.data.dati.Hour : 0,
      Description: this.data.dati?.Description ? this.data.dati.Description : '',
      Id_task: parseInt(this.selectedvalue),
      Id_user: null,
      Commit: this.data.dati?.Commit ? this.data.dati.Commit : null
    };
    this.getTaskDescription();
    console.log(this.data)
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

  onSelected(value: string): void {
    console.log(value)
    this.selectedvalue = value;
  }

  inserisciOra() {

    if (this.show) {

      this.overtime.Date = this.hourData.Date
      this.http_overtime.InsertOvertimeHours(this.overtime).subscribe(data => {

      })
    }

    this.hourData.Id_user = this.getUserId()
    this.hourData.Hour = this.hourData.Hour + this.overtime.Hours
    this.hourData.Id_task = parseInt(this.selectedvalue)
    this.http_hours.addHours(this.hourData).subscribe((data) => {

    });
    window.location.reload()
  }

  modificaOra(id_hour: number, data: Hours) {
    try {
      data.Id_task = parseInt(this.selectedvalue)
      this.arrayTasks.forEach(data => {
        if (data.Id_task == this.hourData.Id_task) {
          return data.Task_name + ' ' + data.Task_description
        } else {
          return ''
        }
      })

      this.http_hours.updateHour(data, id_hour).subscribe(data => {
        console.log(data);
      })
    } catch (err) {
      console.log(err)
    }
    window.location.reload()

  }

  getTaskDescription() {
    this.arrayTasks.forEach(data => {
      if (this.data.dati) {
        if (data.Id_task == this.data.dati.Id_task_task.Id_task) {
          this.taskDescription = data.Task_name + ' ' + data.Task_description
        }
      } else {

        this.hourData.Id_task = data.Id_task
      }
    })

  }


  checkAllInput() {
    if (!this.data.dati) {

      if (!this.hourData.Date) {
        return true
      } else if (!this.hourData.Hour) {
        return true
      } else if (!this.hourData.Description) {
        return true
      } else if (!this.hourData.Id_task) {
        return true
      }
    }
    return false
  }

  showStraordinario() {
    this.show = !this.show
  }
}
