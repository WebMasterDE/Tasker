import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { co } from '@fullcalendar/core/internal-common';
import { User_serviceService } from 'src/app/Services/auth.service';
import { HoursService } from 'src/app/Services/hours.service';
import { Hours } from 'src/Model/Hours';
import { convertDate } from 'src/app/utils/utilities';
import { DialogComponent } from 'src/app/Static-Components/table/table.component';
import { FormsModule } from '@angular/forms';
import { TasksService } from 'src/app/Services/tasks.service';
import { TasksDialogComponent } from 'src/app/Static-Components/tasks-dialog/tasks-dialog.component';

@Component({
  selector: 'app-ore',
  templateUrl: './ore.component.html',
  styleUrls: ['./ore.component.css']
})
export class OreComponent {

  route: string;
  datatable: Hours[] = [];
  allTasks: JSON

  ngOnInit() {
    this.getHours();
    this.getallTasks()

  }


  getallTasks() {
    let response = this.http_task.GetTasksUser().subscribe((val) => {
      this.http_task.getAllTasks = val
    })
  }

  constructor(public dialog: MatDialog, private http_hours: HoursService, private router: Router, private http_task: TasksService) {
    this.getroute()
  }

  displayedColumns: string[] = ['Date', 'Operator', 'Description', 'Hours', 'Actions'];
  getroute() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.route = val.url;
      }
    });
  }

  getHours() {
    let dataStorage = localStorage.getItem('data');
    let id = JSON.parse(dataStorage)
    this.http_hours.getHours(id.id).subscribe((data: Hours[]) => {

      this.datatable = data;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(TasksDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  delete(element) {
    this.http_hours.deleteHours(element).subscribe((data) => {
    }, (error) => {
      console.log(error)
    });
    window.location.reload()
  }
}


