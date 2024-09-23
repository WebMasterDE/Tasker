import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shift } from 'src/Model/Shift';
import { environment_prod } from '../environment/environtments'

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor(private http: HttpClient) { }

  inputdata: string

  insertShift(data: Shift): Observable<Shift> {
    return this.http.post<Shift>(`${environment_prod.BACKEND_URL}/insert/shift`, data)

  }

  getAllShifts(): Observable<Shift[]> {
    return this.http.get<Shift[]>(`${environment_prod.BACKEND_URL}/get/shift`)
  }
}
