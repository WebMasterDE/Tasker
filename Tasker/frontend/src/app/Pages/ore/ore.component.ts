import { Component, inject, signal, TemplateRef, ViewChild } from '@angular/core';
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
import { User_serviceService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-ore',
  templateUrl: './ore.component.html',
  styleUrls: ['./ore.component.css']
})
export class OreComponent {

  route: string;
  datatable: Array<{ num_mese: number, mese: string, ore: any[], ore_totali: number, anno: number }> = []
  allTasks: JSON;
  ismodifying: boolean;
  id_hour: number;
  count_month = [];
  year: number;
  displayedColumns: string[] = ['Date', 'Operator', 'Task_name', 'Hours', 'Description', 'Commit', 'Actions'];
  private _bottomSheet = inject(MatBottomSheet);
  readonly panelOpenState = signal(false);

  HourData: Hours;

  @ViewChild('bottomSheetContent') bottomSheetContent: TemplateRef<any>;

  ArrayovertimeList: Overtime[] = []

  month: Array<string> = []
  constructor(
    public dialog: MatDialog,
    private http_hours: HoursService,
    private http_overtime: OvertimeService,
    private router: Router,
    private http_task: TasksService,
    private loading: LoadingService,
    private bottomSheet: MatBottomSheet,
    private userHTTP: User_serviceService
  ) {
    this.getroute();

  }



  ngOnInit() {
    this.userHTTP.testToken().subscribe({
      next: (res) => {
        this.getActualMonth();
        this.loading.show();
        this.getallTasks();
        this.overtimeListInit(null);
        this.closebottomSheet();
      },
      error: (err) => {
        this.router.navigate(['/signup']);
      }
    });
  }

  getActualMonth() {

    try {
      const enum_mesi = [
        { nome: '01', mese: 'Gennaio' },
        { nome: '02', mese: 'Febbraio' },
        { nome: '03', mese: 'Marzo' },
        { nome: '04', mese: 'Aprile' },
        { nome: '05', mese: 'Maggio' },
        { nome: '06', mese: 'Giugno' },
        { nome: '07', mese: 'Luglio' },
        { nome: '08', mese: 'Agosto' },
        { nome: '09', mese: 'Settembre' },
        { nome: '10', mese: 'Ottobre' },
        { nome: '11', mese: 'Novembre' },
        { nome: '12', mese: 'Dicembre' }
      ];


      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      let actual_data = today.toLocaleDateString();
      let actual_month = parseInt(actual_data.split('/')[1])
      console.log("mese corrente:", actual_month)


      for (let start_Month = 0; start_Month <= actual_month;) {
        this.count_month.push(start_Month++);

      }


      enum_mesi.forEach(ogg => {
        this.datatable.push({ num_mese: 0, mese: ogg.mese, ore: [], ore_totali: 0, anno: 0 })
        this.count_month.forEach(m => {
          if (ogg.nome == m) {
            this.month.push(ogg.mese)
          }
        })
      })


      setTimeout(() => {

        this.getHours(enum_mesi);
      }, 1000);
    } catch (err) {
      console.log(err)
    }

  }

  getHours(mesi) {
    try {

      this.http_hours.getHours(this.getUserId()).subscribe((data: Array<any>) => {
        data.forEach(dati => {

          this.datatable.forEach(el => {

            mesi.forEach(mes => {

              if (mes.mese === el.mese) {
                el.num_mese = mes.nome
                el.anno = dati.Date.split('-')[0]
                var ore_filtrate = data.filter(elem => { return elem.Date.split('-')[1] == el.num_mese && elem.Date.split('-')[0] == this.year })
                el.ore = ore_filtrate
                el.ore_totali = el.ore.reduce((acc, elem) => acc + elem.Hour, 0)
              }
            });
          });
        });

      });
      this.loading.hide()
      return this.datatable
    } catch (err) {
      console.log(err)
    }
    return null
  }

  getUserId() {
    return this.userHTTP.tokenData.id;
  }

  overtimeListInit(mese: string | null) {
    const today = new Date();

    const enumMOnth = [
      { nome: '01', mese: 'Gennaio' },
      { nome: '02', mese: 'Febbraio' },
      { nome: '03', mese: 'Marzo' },
      { nome: '04', mese: 'Aprile' },
      { nome: '05', mese: 'Maggio' },
      { nome: '06', mese: 'Giugno' },
      { nome: '07', mese: 'Luglio' },
      { nome: '08', mese: 'Agosto' },
      { nome: '09', mese: 'Settembre' },
      { nome: '10', mese: 'Ottobre' },
      { nome: '11', mese: 'Novembre' },
      { nome: '12', mese: 'Dicembre' }
    ]
    this.year = today.getFullYear();
    let month;
    if (mese === null) {
      this.ArrayovertimeList = []
      month = String(today.getMonth() + 1).padStart(2, '0');

    } else {
      enumMOnth.forEach(el => {
        if (el.mese === mese) {
          this.ArrayovertimeList = []
          month = el.nome
        }
      })
    }
    this.http_overtime.getOvertimeHours(this.getUserId(), month, this.year).subscribe(data => {
      data.forEach(el => {
        this.ArrayovertimeList.push({ Date: el.Date, Hours: el.Hours, Id_user: this.getUserId(), Id_hour: el.Id_hour })
      })
    })
  }
  overtimeList(mese: string | null) {
    const today = new Date();

    const enumMOnth = [
      { nome: '01', mese: 'Gennaio' },
      { nome: '02', mese: 'Febbraio' },
      { nome: '03', mese: 'Marzo' },
      { nome: '04', mese: 'Aprile' },
      { nome: '05', mese: 'Maggio' },
      { nome: '06', mese: 'Giugno' },
      { nome: '07', mese: 'Luglio' },
      { nome: '08', mese: 'Agosto' },
      { nome: '09', mese: 'Settembre' },
      { nome: '10', mese: 'Ottobre' },
      { nome: '11', mese: 'Novembre' },
      { nome: '12', mese: 'Dicembre' }
    ]
    this.year = today.getFullYear();
    let month;
    if (mese === null) {
      this.ArrayovertimeList = []
      month = String(today.getMonth() + 1).padStart(2, '0');

    } else {
      enumMOnth.forEach(el => {
        if (el.mese === mese) {
          this.ArrayovertimeList = []
          month = el.nome
        }
      })
    }
    this.http_overtime.getOvertimeHours(this.getUserId(), month, this.year).subscribe(data => {
      console.log(data)
      data.forEach(el => {
        this.ArrayovertimeList.push({ Date: el.Date, Hours: el.Hours, Id_user: this.getUserId(), Id_hour: el.Id_hour })
      })
      this.openBottomSheet();
    })
  }

  openBottomSheet(): void {
    this.bottomSheet.open(this.bottomSheetContent);
  }

  closebottomSheet(): void {
    this.bottomSheet.dismiss(this.bottomSheetContent)
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


  openDialog(datas: object | null) {
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


