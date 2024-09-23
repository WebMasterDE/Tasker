import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
import { WindowDialogComponent } from '../window-dialog/window-dialog.component';
import { SpinnerComponent } from 'src/app/utils/spinner/spinner.component';
import { LoadingService } from 'src/app/Services/loading.service';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, CommonModule, FormsModule, SpinnerComponent, MatButtonModule],
})
export class TableComponent {
  @Input() tasks: Task[] = [];
  archive: Archive[] = [];
  route: string;
  datatable;
  id_to_delete: string
  totalHours: number;
  isloading: boolean = true
  ngOnInit(): void {
    this.loading.show()
    // this.getTasksArchive()
    // this.getToalHours()
    setTimeout(() => {

      this.datatable = this.route === '/tasks' ? this.tasks : this.archive;
      this.loading.hide()
    }, 500);


  }


  constructor(private http: TasksService, public dialog: MatDialog, private http_user: User_serviceService, private http_archive: ArchiveService, private router: Router, private loading: LoadingService) {
    this.getroute()

  }
  displayedColumns: string[] = ['Task_name', 'Task_description', 'Task_creation', 'Manage'];

  archiveRecord(element) {
    element.Id_user = JSON.parse(localStorage.getItem("data")).id
    this.http_archive.insertTasksArchive(element, element.Id_task, element.Id_user).subscribe()
    this.http.DeleteTaskUser(element).subscribe();
    window.location.reload()
  }

  // getTasksArchive() {
  //   let id = JSON.parse(localStorage.getItem("data")).id
  //   this.http_archive.getTasksArchive(id).subscribe((data: Archive[]) => {
  //     this.archive = data

  //   });
  // }

  delete(element) {
    this.http.DeleteTaskUser(element).subscribe()
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialogWindow(element) {
    const dialogRef = this.dialog.open(WindowDialogComponent, {
      data: {
        title: 'Sei sicuro di eliminare la task?',
        text: 'Verranno eliminate tutte le ore associate alla task',
        btn_left: 'Annulla',
        btn_right: 'Elimina',
        typeinput: '',
        action: () => { return this.delete(element) }
      },
      width: '20%',
      height: '25%'

    });

    dialogRef.afterClosed().subscribe(result => {
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
          <h1>Crea una task</h1>
          <form class="d-flex flex-column">
          <div class="input-group mb-3 d-flex flex-column">
          <label>Nome della task</label>
          <input type="text" class="form-control w-100" name="Task_name"  [(ngModel)]="singletask.Task_name" placeholder="inserisci" aria-label="inserisci" aria-describedby="basic-addon2">
          <div class="input-group-append">
          </div>
        </div>

        <div class="input-group mb-3 d-flex flex-column">
        <label>Descrizione</label>
          <input type="text" class="form-control w-100" name="Task_description" [(ngModel)]="singletask.Task_description" placeholder="inserisci" aria-label="inserisci" aria-describedby="basic-addon2">
          <div class="input-group-append">
          </div>
        </div>

        <div class="input-group mb-3 d-flex flex-column">
        <label>Ore da impiegare</label>
          <input type="text" class="form-control w-100" name="Task_description" [(ngModel)]="singletask.Task_hours" placeholder="inserisci" aria-label="inserisci" aria-describedby="basic-addon2">
          <div class="input-group-append">
          </div>
        </div>

        <div class="input-group mb-3 d-flex flex-column">
        <label>Data di creazione</label>
          <input type="date" class="form-control w-100"  name="Task_creation" [(ngModel)]="singletask.Task_creation" placeholder="inserisci" aria-label="inserisci" aria-describedby="basic-addon2">
          <div class="input-group-append">
          </div>
        </div>


        <button type="submit" (click)="createTask()"class="btn btn-success" >Crea task</button>

          </form>
      </div>
  `,
  imports: [
    FormsModule
  ],
  standalone: true
})
export class DialogComponent {
  singletask: Task = { Task_name: "", Task_description: "", Task_hours: 1, Task_creation: this.getTodayDate() }
  todayDate = new Date().toString
  constructor(private http: TasksService) {
  }
  createTask() {
    const storage = localStorage.getItem("data");

    let jsondata = JSON.parse(storage)
    // this.singletask.Id_user = jsondata.id
    this.http.CreateTaskUser(this.singletask).subscribe()
    window.location.reload()
  }

  getTodayDate(): string {
    return new Date().toISOString().split('T')[0]; // Restituisce la data nel formato YYYY-MM-DD
  }
}
