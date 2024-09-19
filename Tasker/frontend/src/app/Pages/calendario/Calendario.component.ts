import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HoursService } from 'src/app/Services/hours.service';
import { Hours } from 'src/Model/Hours';

@Component({
  selector: 'app-calendario',
  templateUrl: './Calendario.component.html',
  styleUrls: ['./Calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  id_user: string
  datacalendar;
  alldatacalendar: { title: string, start: Date }[] = []
  constructor(private http_hour: HoursService) {
    let data = JSON.parse(localStorage.getItem('data'))
    this.id_user = data.id

  }
  ngOnInit(): void {
    this.createDataCalendar()
  }


  createDataCalendar() {
    this.http_hour.getHours(this.id_user).subscribe((val) => {
      this.datacalendar = val
      this.datacalendar.forEach(element => {
        let obj = {
          title: element.taskIdTask_task.Task_name + ' ' + element.taskIdTask_task.Task_description,
          start: element.hoursId_hour_hour.Date,
          color: this.color_gestionali(element.taskIdTask_task.Task_description),
          url: element.hoursId_hour_hour.Commit != null ? `https://github.com/WebMasterDE/${this.redirectGestionale(element.taskIdTask_task.Task_description)}/commit/${element.hoursId_hour_hour.Commit}` : ''
        }
        this.alldatacalendar.push(obj)
      });
      this.calendarOptions.events = this.alldatacalendar
    })
  }


  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    contentHeight: 650,


  };

  color_gestionali(element) {
    if (element == 'DIVEN') {
      return ''
    } else if (element == 'DES') {
      return 'orange'
    } else if (element == 'DEM') {
      return 'green'
    } else {
      return 'purple'
    }
  }

  redirectGestionale(element) {
    if (element == 'DIVEN_VECCHIO') {
      return 'dbdiven'
    } else if (element == 'DES_VECCHIO') {
      return 'dbdes'
    } else if (element == 'DEM_VECCHIO') {
      return 'dbdem'
    } else {
      return 'new_dbdem'
    }
  }

}
