import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { HoursService } from 'src/app/Services/hours.service';
import { Hours } from 'src/Model/Hours';
import { TasksService } from 'src/app/Services/tasks.service';
import { TasksDialogComponent } from 'src/app/Static-Components/tasks-dialog/tasks-dialog.component';
import { LoadingService } from 'src/app/Services/loading.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { OvertimeService } from 'src/app/Services/overtime.service';
import { Overtime } from 'src/Model/Overtime';


@Component({
  selector: 'app-ore',
  templateUrl: './ore.component.html',
  styleUrls: ['./ore.component.css']
})
export class OreComponent {

  route: string;
  datatable;
  allTasks: JSON;
  ismodifying: boolean;
  id_hour: number;
  displayedColumns: string[] = ['Date', 'Operator', 'Task_name', 'Hours', 'Description', 'Commit', 'Actions'];
  private _bottomSheet = inject(MatBottomSheet);

  HourData: Hours;

  @ViewChild('bottomSheetContent') bottomSheetContent: TemplateRef<any>;

  ArrayovertimeList: Overtime[] = []

  constructor(public dialog: MatDialog, private http_hours: HoursService, private http_overtime: OvertimeService, private router: Router, private http_task: TasksService, private loading: LoadingService, private bottomSheet: MatBottomSheet) {
    this.getroute()
  }



  ngOnInit() {
    this.loading.show()
    setTimeout(() => {

      this.getHours();
    }, 1000);
    this.getallTasks()
    this.overtimeList();
  }

  getUserId() {
    let data = JSON.parse(localStorage.getItem('data'))
    return data.id
  }

  overtimeList() {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    this.http_overtime.getOvertimeHours(this.getUserId(), month, year).subscribe(data => {
      data.forEach(el => {
        this.ArrayovertimeList.push({ Date: el.Date, Hours: el.Hours, Id_user: this.getUserId() })
      })
    })
  }

  openBottomSheet(): void {
    this.bottomSheet.open(this.bottomSheetContent);
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

  openDialog(datas) {
    const dialogRef = this.dialog.open(TasksDialogComponent, {
      data: { dati: datas }
    });

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


