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


@Component({
  selector: 'app-ore',
  templateUrl: './ore.component.html',
  styleUrls: ['./ore.component.css']
})
export class OreComponent {

  route: string;
  datatable: Hours[] = [];

  ngOnInit() {
    this.getHours();

  }

  constructor(public dialog: MatDialog, private http_hours: HoursService, private router: Router) {
    this.getroute()
  }

  displayedColumns: string[] = ['Date', 'Operator', 'Description', 'Hours'];
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
    const dialogRef = this.dialog.open(DialogComponen);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  delete(element) {
    window.location.reload()
  }
}


@Component({
  selector: 'app-dialog',
  template: `
    <div style="width: 500px" class="d-flex justify-content-center flex-column p-3">
          <h1>Crea una task</h1>
          <form class="d-flex flex-column">
          <div class="input-group mb-3 d-flex flex-column">
          <label>Data</label>
          <input type="date" class="form-control w-100" [(ngModel)]="hourData.Date" name="data"  placeholder="inserisci" aria-label="inserisci" aria-describedby="basic-addon2">
          <div class="input-group-append">
          </div>
        </div>

        <div class="input-group mb-3 d-flex flex-column">
        <label>Operatore</label>
          <input type="text" class="form-control w-100"  [(ngModel)]="hourData.Operator" name="operatore" placeholder="inserisci" aria-label="inserisci" aria-describedby="basic-addon2">
          <div class="input-group-append">
          </div>
        </div>

        <div class="input-group mb-3 d-flex flex-column">
        <label>Ore da inserire</label>
          <input type="text" class="form-control w-100"  [(ngModel)]="hourData.Hour" name="ore" placeholder="inserisci" aria-label="inserisci" aria-describedby="basic-addon2">
          <div class="input-group-append">
          </div>
        </div>

        <div class="input-group mb-3 d-flex flex-column">
        <label>Uteriori note</label>
          <input type="text" class="form-control w-100"  [(ngModel)]="hourData.Description"  name="note" placeholder="inserisci" aria-label="inserisci" aria-describedby="basic-addon2">
          <div class="input-group-append">
          </div>
        </div>



        <button type="submit" (click)="inserisciOra()"class="btn btn-success" >Inserisci ore</button>

          </form>
      </div>
  `,
  imports: [
    FormsModule
  ],
  standalone: true
})

export class DialogComponen implements OnInit {

  hourData: Hours = { Operator: '', Date: '', Hour: 0, Description: '', userIdUser: null };
  constructor(private dialogRef: MatDialogRef<DialogComponent>, private http_hours: HoursService) { }

  ngOnInit() {

  }

  inserisciOra() {
    const storage = localStorage.getItem("data");

    let jsondata = JSON.parse(storage)
    this.hourData.userIdUser = jsondata.id
    this.http_hours.addHours(this.hourData).subscribe((data) => {

    });
    window.location.reload()
  }
}
