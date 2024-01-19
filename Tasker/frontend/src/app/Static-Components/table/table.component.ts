import { Component, Input } from '@angular/core';
import { Task } from "../../../Model/Task"
import { MatTableModule } from "@angular/material/table";
import { TasksService } from '../../Services/tasks.service'
import { MatDialog } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { User_serviceService } from 'src/app/Services/auth.service';
import { ArchiveService } from 'src/app/Services/archive.service';
import { NavigationEnd, Router } from '@angular/router';
import { Archive } from 'src/Model/Archive';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, CommonModule],
})
export class TableComponent {
  @Input() tasks: Task[] = [];
  archive: Archive[] = [];
  route: string;
  datatable;
  totalHours: number;;
  ngOnInit(): void {
    this.getTasksArchive()
    this.getToalHours()
    setTimeout(() => {

      this.datatable = this.route === '/tasks' ? this.tasks : this.archive;
    }, 500);

    console.log(this.route)
  }
  constructor(private http: TasksService, public dialog: MatDialog, private http_user: User_serviceService, private http_archive: ArchiveService, private router: Router) {
    this.getroute()

  }
  displayedColumns: string[] = ['Task_name', 'Task_description', 'Task_creation', 'Task_hours', 'Manage'];

  archiveRecord(element) {
    element.Id_user = JSON.parse(localStorage.getItem("data")).id
    this.http_archive.insertTasksArchive(element, element.Id_task, element.Id_user).subscribe()
    this.http.DeleteTaskUser(element).subscribe();
    window.location.reload()
  }

  getTasksArchive() {
    let id = JSON.parse(localStorage.getItem("data")).id
    this.http_archive.getTasksArchive(id).subscribe((data: Archive[]) => {
      this.archive = data

    });
  }

  getToalHours() {
    let id = JSON.parse(localStorage.getItem("data")).id;

    forkJoin({
      tasks: this.http.GetTasksUser(id),
      archive: this.http_archive.getTasksArchive(id)
    }).subscribe(result => {
      const tasks = result.tasks as Task[];
      const archive = result.archive as Archive[];

      this.totalHours = 0;

      if (this.tasks, length > 0) {
        tasks.forEach(element => {
          let parsedData = parseInt(element.Task_hours.toString());
          this.totalHours += parsedData;
        });
      }

      if (this.archive.length > 0) {
        archive.forEach(element => {
          let parsedData = parseInt(element.Task_hours.toString());
          this.totalHours += parsedData;
        });
      }

      console.log(this.totalHours);
    });
  }
  delete(element) {
    this.http.DeleteTaskUser(element).subscribe();
    window.location.reload()
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getroute() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.route = val.url;
      }
    });
  }
}

@Component({
  selector: 'app-dialog',
  template: `
      <div style="width: 500px" class="d-flex justify-content-center flex-column p-3">
          <h1>Create task</h1>
          <form class="d-flex flex-column">
              <label>Task Name</label>
              <input class="my-2" type="text" name="Task_name"  [(ngModel)]="singletask.Task_name">
              <label>Task Description</label>
              <input class="my-2" type="text" name="Task_description" [(ngModel)]="singletask.Task_description">
              <label>Task Hours</label>
              <input class="my-2" type="number" min="1"  name="Task_hour" [(ngModel)]="singletask.Task_hours">
              <label>Date of creation</label>
              <input class="my-2" type="date" name="Task_creation" [(ngModel)]="singletask.Task_creation">
              <label>Date of ending</label>
              <input class="my-2" type="date" name="Task_end" [(ngModel)]="singletask.Task_end">
              <button type="submit" (click)="createTask()"
                      style=" background-color: forestgreen;color: white;padding: 5px;border-radius: 10px">Create
              </button>
          </form>
      </div>
  `,
  imports: [
    FormsModule
  ],
  standalone: true
})
export class DialogComponent {
  singletask: Task = { Task_name: "", Task_description: "", Task_hours: 1, Task_creation: "", Task_end: "", Id_user: 0 }
  constructor(private http: TasksService) {
  }
  createTask() {
    const storage = localStorage.getItem("data");

    let jsondata = JSON.parse(storage)
    this.singletask.Id_user = jsondata.id
    this.http.CreateTaskUser(this.singletask).subscribe()
    window.location.reload()
  }
}
