import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
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
import tippy from 'tippy.js';
import { User_serviceService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './Calendario.component.html',
  styleUrls: ['./Calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  @ViewChild('shiftCalendar') shiftCalendar: FullCalendarComponent;
  @ViewChildren('checkboxRef') checkboxes: QueryList<ElementRef>;

  id_user: number;
  datacalendar;
  hour: string
  datas;
  checkclick: boolean;
  checked: boolean;
  arrayCheck: [] = [];
  user: Array<any> = []
  selectedUserId: number | null = null;
  shiftsTabActive = false;  // Variabile per controllare se la tab dei turni è attiva

  isCheckboxSelected: boolean = false
  alldatacalendar: { title: string, start: Date }[] = []
  alldataShiftsCalendar: { title: string, start: Date, color: string }[] = []
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    eventMouseEnter: (info) => {
      const tooltipContent = `
      <b>Task:</b> ${info.event.title}<br>
      <b>Ore impiegate</b> ${info.event.extendedProps['hours']}<br>
      <b>Descrizione:</b> ${info.event.extendedProps['description']}<br>
      <b>Codice commit:</b> ${info.event.extendedProps['commit'] != null ? info.event.extendedProps['commit'] : 'Non inserito'}
    `;
      // Crea il tooltip
      const tooltip = tippy(info.el, {
        theme: 'light',
        content: tooltipContent,
        allowHTML: true
      })[0]; // Prendi la prima istanza di Tippy
    }
  }

  calendarOptionsShifts: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin],
    initialView: 'dayGridMonth',
    selectable: true,
    dateClick: (info) => this.opendialogShift(info),
    select: function getall(info) {
    },
  }

  constructor(private http_hour: HoursService, private load: LoadingService, private http_shift: ShiftService, public dialog: MatDialog, private users: User_serviceService, private render: Renderer2) {
    this.id_user = users.tokenData.id;
  }


  ngOnInit(): void {
    this.load.show()
    this.createDataCalendar()
    this.GetShifts()
    this.getAllUsers()
  }

  createDataCalendar() {
    this.http_hour.getAllHours().subscribe((val) => {
      this.datacalendar = val
      this.datacalendar.forEach(element => {
        let obj = {
          title: element.Operator + ' (' + element.Id_task_task.Task_name + ')',
          start: element.Date,
          color: element.Id_task_task.color,
          extendedProps: {
            description: element.Description,
            hours: element.Hour,
            commit: element.Commit
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
    let id = this.users.tokenData.id
    let data: Shift = {
      start_date: element.dateStr,
      end_date: null,
      hour: parseInt(this.datas.data.inputdata),
      Id_user: id,
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

  tabChanged(event: any) {
    this.shiftsTabActive = event.index === 1;
  }

  getAllUsers() {
    this.users.getAllUsers().subscribe(data => {
      data.forEach(el => {
        if (el.Id_User != 10) {

          this.user.push({ id: el.Id_User, name: el.Name, checked: false })
        }
      })
    })
  }

  filterByUser(users: any[]) {
    // Trova l'utente selezionato
    const selectedUser = users.find(user => user.checked);
    this.selectedUserId = selectedUser ? selectedUser.id : null;


    if (this.selectedUserId) {
      this.http_hour.getHours(this.selectedUserId).subscribe((val) => {
        this.alldatacalendar = [];
        this.calendarOptions.events = [];
        this.datacalendar = val
        this.datacalendar.forEach(element => {
          let obj = {
            title: element.Operator + ' (' + element.Id_task_task.Task_name + ')',
            start: element.Date,
            color: element.Id_task_task.color,
            extendedProps: {
              description: element.Description,
              hours: element.Hour,
              commit: element.Commit
            }
          }
          this.alldatacalendar.push(obj)
        });
        this.calendarOptions.events = this.alldatacalendar

      })
      this.load.hide()
    } else {
      // Se nessun utente è selezionato, ripristina il calendario
      this.alldatacalendar = [];
      this.calendarOptions.events = [];
      this.createDataCalendar();
    }
  }


}
