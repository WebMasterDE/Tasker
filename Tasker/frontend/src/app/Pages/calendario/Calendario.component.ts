import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { User_serviceService } from 'src/app/Services/auth.service';
import { HoursService } from 'src/app/Services/hours.service';
import { LoadingService } from 'src/app/Services/loading.service';
import { Hours } from 'src/Model/Hours';
import interactionPlugin from '@fullcalendar/interaction';
import { ShiftService } from 'src/app/Services/shift.service';
import { WindowDialogComponent } from 'src/app/Static-Components/window-dialog/window-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Shift } from 'src/Model/Shift';
import { ArchiveService } from 'src/app/Services/archive.service';
import { FullCalendarComponent } from '@fullcalendar/angular';
@Component({
  selector: 'app-calendario',
  templateUrl: './Calendario.component.html',
  styleUrls: ['./Calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  @ViewChild('shiftCalendar') shiftCalendar: FullCalendarComponent;

  id_user: string
  datacalendar;
  hour: string
  datas;
  alldatacalendar: { title: string, start: Date }[] = []
  shiftsTabActive = false;  // Variabile per controllare se la tab dei turni è attiva

  constructor(private http_hour: HoursService, private load: LoadingService, private http_shift: ShiftService, public dialog: MatDialog) {
    let data = JSON.parse(localStorage.getItem('data'))
    this.id_user = data.id
  }
  ngOnInit(): void {
    this.load.show()
    this.createDataCalendar()
  }


  createDataCalendar() {
    this.http_hour.getHours(this.id_user).subscribe((val) => {
      this.datacalendar = val
      this.datacalendar.forEach(element => {
        let obj = {
          title: element.Id_task_task.Task_name + ' ' + element.Id_task_task.Task_description,
          start: element.Date,
          color: this.color_gestionali(element.Id_task_task.Task_description),
          url: element.Commit != null ? `https://github.com/WebMasterDE/${this.redirectGestionale(element.Id_task_task.Task_description)}/commit/${element.Commit}` : ''
        }
        this.alldatacalendar.push(obj)
      });
      this.calendarOptions.events = this.alldatacalendar
    })
    this.load.hide()
  }


  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    contentHeight: 630,
  };

  calendarOptionsShifts: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin],
    initialView: 'dayGridMonth',
    contentHeight: 630,
    selectable: true,
    dateClick: (info) => this.opendialogShift(info),
    select: function getall(info) {
    },
  }

  color_gestionali(element) {
    if (element == 'DIVEN' || element == 'DIVEN_VECCHIO') {
      return ''
    } else if (element == 'DES' || element == 'DES_VECCHIO') {
      return 'orange'
    } else if (element == 'DEM' || element == 'DEM_VECCHIO') {
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
    } else if (element == 'DIVEN' || element == 'DES' || element == 'DEM') {
      return 'new_dbdem'
    } else {
      return 'CustoDE_mobile_frontend'
    }
  }

  opendialogShift(element) {

    const dialogRef = this.dialog.open(WindowDialogComponent, this.datas = {
      data: {
        title: 'Inserimento orario di lavoro',
        text: 'Inserisci a che ora sarai in sede',
        btn_left: 'Annulla',
        btn_right: 'Inserisci',
        typeinput: 'number',

      },
      width: '20%',
      height: '30%'


    });


    dialogRef.afterClosed().subscribe(result => {
      this.insertShift(element)
    });
  }

  insertShift(element) {
    let user_id = localStorage.getItem('data')
    let id = JSON.parse(user_id)
    let data: Shift = {
      start_date: element.dateStr,
      end_date: null,
      hour: parseInt(this.datas.data.inputdata),
      Id_user: id.id
    }
    this.http_shift.insertShift(data).subscribe()
  }

  tabChanged(event: any): void {
    if (event.index === 1 && !this.shiftsTabActive) {
      // Attiva il rendering del calendario nella seconda tab solo quando è selezionata
      this.shiftsTabActive = true;
    }
  }


}
