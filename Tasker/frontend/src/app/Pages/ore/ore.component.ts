import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NavigationEnd, Router} from '@angular/router';
import {HoursService} from 'src/app/Services/hours.service';
import {Hours} from 'src/Model/Hours';
import {TasksService} from 'src/app/Services/tasks.service';
import {TasksDialogComponent} from 'src/app/Static-Components/tasks-dialog/tasks-dialog.component';
import {LoadingService} from 'src/app/Services/loading.service';

@Component({
  selector: 'app-ore',
  templateUrl: './ore.component.html',
  styleUrls: ['./ore.component.css']
})
export class OreComponent {

  route: string;
  datatable;
  allTasks: JSON
  displayedColumns: string[] = ['Date', 'Operator', 'Task_name', 'Hours', 'Description', 'Commit', 'Actions'];

  constructor(public dialog: MatDialog, private http_hours: HoursService, private router: Router, private http_task: TasksService, private loading: LoadingService) {
    this.getroute()
  }

  ngOnInit() {
    this.loading.show()
    setTimeout(() => {

      this.getHours();
    }, 1000);
    this.getallTasks()

  }

  getallTasks() {
    let response = this.http_task.GetTasksUser().subscribe((val) => {
      this.http_task.getAllTasks = val
    })

  }

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

    this.http_hours.getHours(id.id).subscribe((data) => {
      this.datatable = data;
    });
    this.loading.hide()
  }

  openDialog() {
    const dialogRef = this.dialog.open(TasksDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
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


