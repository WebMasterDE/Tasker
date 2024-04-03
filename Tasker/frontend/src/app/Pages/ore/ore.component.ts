import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { co } from '@fullcalendar/core/internal-common';
import { User_serviceService } from 'src/app/Services/auth.service';
import { HoursService } from 'src/app/Services/hours.service';
import { Hours } from 'src/Model/Hours';
import { convertDate } from 'src/app/utils/utilities';

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

  delete(element) {
    window.location.reload()
  }
}
