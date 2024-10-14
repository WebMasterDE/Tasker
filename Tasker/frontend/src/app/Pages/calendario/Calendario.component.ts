import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HoursService } from 'src/app/Services/hours.service';
import { LoadingService } from 'src/app/Services/loading.service';
import interactionPlugin from '@fullcalendar/interaction';
import { ShiftService } from 'src/app/Services/shift.service';
import { WindowDialogComponent } from 'src/app/Static-Components/window-dialog/window-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Shift } from 'src/Model/Shift';
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
  alldataShiftsCalendar: { title: string, start: Date, color: string }[] = []
  shiftsTabActive = false;  // Variabile per controllare se la tab dei turni è attiva
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    eventClick: function (info) {
      alert('Event: ' + info.event.title + '\nHours: ' + info.event.extendedProps['hours'] + '\nDescription: \n' + info.event.extendedProps['description']);

      // change the border color just for fun
      info.el.style.borderColor = 'red';
    }
  };
  calendarOptionsShifts: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin],
    initialView: 'dayGridMonth',
    selectable: true,
    dateClick: (info) => this.opendialogShift(info),
    select: function getall(info) {
    },
  }

  constructor(private http_hour: HoursService, private load: LoadingService, private http_shift: ShiftService, public dialog: MatDialog) {
    let data = JSON.parse(localStorage.getItem('data'))
    this.id_user = data.id
  }

  ngOnInit(): void {
    this.load.show()
    this.createDataCalendar()
    this.GetShifts()
  }

  createDataCalendar() {
    this.http_hour.getAllHours().subscribe((val) => {
      this.datacalendar = val
      this.datacalendar.forEach(element => {
        let obj = {
          title: element.Operator + ' (' + element.Id_task_task.Task_name + ')',
          start: element.Date,
          color: element.Id_task_task.Task_description.color,
          extendedProps: {
            description: element.Description,
            hours: element.Hour
          }
        }
        this.alldatacalendar.push(obj)
      });
      this.calendarOptions.events = this.alldatacalendar
    })
    this.load.hide()
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
      Id_user: id.id,
      Id_user_user: null
    }
    this.http_shift.insertShift(data).subscribe()
  }

  GetShifts() {
    this.http_shift.getAllShifts().subscribe(val => {
      val.forEach(el => {
        this.alldataShiftsCalendar.push({
          title: el.hour >= 9 && el.hour <= 13 ? `${el.Id_user_user.Name} Mattina` : `${el.Id_user_user.Name} Pomeriggio`,
          start: el.start_date,
          color: this.getColorForUserShifts(el.Id_user_user.Name)
        })
      })
      this.calendarOptionsShifts.events = this.alldataShiftsCalendar
    })
  }

  getColorForUserShifts(name): string {
    if (name == 'Davide Tonetto') {
      return '#330019'
    } else if (name == 'Giovanni Vesco') {
      return '#00cc00'
    } else if (name == 'Jeremy Famengo') {
      return '#0080ff'
    } else if (name == 'Gabriele Pagnotta') {
      return '#cc0000'
    } else if (name == 'Gioele Zara') {
      return '#6600cc'
    } else if (name == 'Davide Nincao') {
      return '#666600'
    } else if (name == 'Fabio Michieletto') {
      return '#ff6600'
    } else {
      return ''
    }
  }

  tabChanged(event: any): void {
    if (event.index === 1 && !this.shiftsTabActive) {
      // Attiva il rendering del calendario nella seconda tab solo quando è selezionata
      this.shiftsTabActive = true;
    }
  }


}
