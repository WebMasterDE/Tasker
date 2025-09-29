import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hours } from 'src/Model/Hours';
import { DialogComponent } from '../table/table.component';
import { HoursService } from 'src/app/Services/hours.service';
import { TasksService } from 'src/app/Services/tasks.service';
import { LoadingService } from 'src/app/Services/loading.service';
import { OvertimeService } from 'src/app/Services/overtime.service';
import { Overtime } from 'src/Model/Overtime';
import { SubtaskService } from 'src/app/Services/subtask.service';
import { Subtasks } from 'src/Model/Subtasks';
import { User_serviceService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-tasks-dialog',
  templateUrl: './tasks-dialog.component.html',
  styleUrls: ['./tasks-dialog.component.css']
})
export class TasksDialogComponent {
  arrayTasks = []
  arraySubtasks = []

  hourData: Hours;
  overtime: Overtime;
  Id_hour: number = this.data.dati?.Id_hour ? this.data.dati.Id_hour : null
  taskDescription: string;
  subtaskDescription = this.data.dati != null ? this.data.dati.id_subtask_subtask?.descrizione : null
  id: any;


  show: boolean;
  selectedvalue = this.data.dati !== null ? this.data.dati.Id_task_task.Id_task : null
  selectedSubvalue = 0
  selectedtask: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { dati },
    private dialogRef: MatDialogRef<DialogComponent>,
    private http_overtime: OvertimeService,
    private http_hours: HoursService,
    private http_tasks: TasksService,
    private loading: LoadingService,
    private http_subtasks: SubtaskService,
    private userHTTP: User_serviceService
  ) {
    this.arrayTasks = this.http_tasks.getAllTasks
    this.http_hours.getLastId().subscribe(data => { this.id = data })
  }

  ngOnInit() {
    this.hourData = {
      Id_hour: this.Id_hour,
      Operator: this.getnameUser(),
      Date: this.data.dati?.Date ? this.data.dati.Date : this.getTodayDate(),
      Hour: this.data.dati?.Hour ? this.data.dati.Hour : 0,
      Description: this.data.dati?.Description ? this.data.dati.Description : '',
      Id_task: this.selectedvalue !== null ? parseInt(this.selectedvalue) : null,
      Id_user: this.data.dati?.Id_user,
      id_subtask: null,
      Commit: this.data.dati?.Commit ? this.data.dati.Commit : null
    };
    this.getOvertimeByIdHour(this.Id_hour);
    this.overtime = {
      Hours: 0,
      Date: this.getTodayDate(),
      Id_user: this.getUserId(),
      Id_hour: this.id != null ? this.id : this.Id_hour
    }
    console.log(this.overtime)
    this.getTaskDescription();
    // this.getAllSubtasks()

  }

  getOvertimeByIdHour(id) {
    return this.http_overtime.getOvertimeByIdHour(id).subscribe(data => {
      if (data) {
        this.overtime.Hours = data.Hours;
      }
    })
  }

  getLastId(): number {
    this.http_hours.getLastId().subscribe(data => {
      return data

    })
    return null
  }

  getUserId() {
    return this.userHTTP.tokenData.id;
  }

  getTodayDate(): string {
    return new Date().toISOString().split('T')[0]; // Restituisce la data nel formato YYYY-MM-DD
  }

  getnameUser() {
    let data = this.userHTTP.tokenData.mail;

    if (data) {
      return data;
    } else {
      return '';
    }
  }

  onSelected(value: string): void {
    this.selectedvalue = value;
    this.selectedtask = true
    this.getAllSubtasks(parseInt(value));
  }

  onSelectedSub(value: string): void {
    this.selectedSubvalue = parseInt(value);

  }

  getAllSubtasks(id_task: number) {
    this.http_subtasks.getSubtasksByTaskId(
      id_task
    ).subscribe(data => {
      this.arraySubtasks = data;
    });
  }

  inserisciOra() {

    this.hourData.Id_user = this.getUserId()
    this.hourData.Hour = this.hourData.Hour + this.overtime.Hours
    this.hourData.Id_task = parseInt(this.selectedvalue)
    this.hourData.id_subtask = this.selectedSubvalue ? this.selectedSubvalue : null
    this.http_hours.addHours(this.hourData).subscribe((data) => {
    });
    if (this.show) {

      this.overtime.Date = this.hourData.Date
      this.overtime.Id_hour = this.id + 1;
      this.http_overtime.InsertOvertimeHours(this.overtime).subscribe(data => {

      })
    }
    window.location.reload()
  }

  modificaOra(id_hour: number, data: Hours) {
    try {
      data.Id_task = parseInt(this.selectedvalue);
      data.id_subtask = this.selectedSubvalue ? this.selectedSubvalue : null
      this.arrayTasks.forEach(data => {
        if (data.Id_task == this.hourData.Id_task) {
          return data.Task_name + ' ' + data.Task_description
        } else {
          return ''
        }
      })
      if (this.show) {
        this.http_overtime.getOvertimeByIdHour(this.overtime.Id_hour).subscribe((data) => {
          if (data == null) {
            this.http_overtime.InsertOvertimeHours(this.overtime).subscribe();
          } else {
            this.overtime.Date = this.hourData.Date
            this.http_overtime.updateOvertimeHours(this.overtime).subscribe();
          }
        })
      }
      this.http_hours.updateHour(data, id_hour).subscribe(data => {
      })
      setTimeout(() => {

        window.location.reload()
      }, 500);
    } catch (err) {
      console.log(err)
    }
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
      } else if (!this.selectedtask) {
        return true
      }
    }
    return false
  }

  showStraordinario() {
    this.show = !this.show
  }
}
