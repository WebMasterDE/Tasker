import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HoursService } from 'src/app/Services/hours.service';
import { Hours } from 'src/Model/Hours';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
          color: this.color_gestionali(element.taskIdTask_task.Task_description)
        }
        this.alldatacalendar.push(obj)
      });
      this.calendarOptions.events = this.alldatacalendar
    })
  }


  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    contentHeight: 700,
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

}
