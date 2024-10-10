import { Component, OnInit, signal } from '@angular/core';
import { ContractsService } from 'src/app/Services/contracts.service';
import { OvertimeService } from 'src/app/Services/overtime.service';

@Component({
  selector: 'app-overtime',
  templateUrl: './overtime.component.html',
  styleUrls: ['./overtime.component.css']
})
export class OvertimeComponent implements OnInit {
  readonly panelOpenState = signal(false);
  constructor(private http_overtime: OvertimeService, private http_contract: ContractsService) { }


  months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

  mese_corrente: number;

  ore_straordinario_totali: number = 0;
  importo_straordinario: number = 0;

  ngOnInit(): void {
    this.CalculateOvertime()
  }

  CalculateOvertime() {

    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');

    this.mese_corrente = parseInt(month)

    this.http_overtime.getOvertimeHours(this.getUserId(), month, year).subscribe(data => {
      data.forEach(el => {
        this.ore_straordinario_totali += el.Hours
      })
      this.http_contract.getUserContract(this.getUserId()).subscribe(contr => {
        let percentuale_ore = (contr.Percentage / 100) * contr.Hourly_cost
        let totale_ora_straordinario = contr.Hourly_cost + percentuale_ore
        this.importo_straordinario = totale_ora_straordinario * this.ore_straordinario_totali
      })
    })
  }

  getUserId() {
    let data = JSON.parse(localStorage.getItem('data'))
    return data.id
  }
}
