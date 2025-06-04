import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shift } from 'src/Model/Shift';
import { environment_prod } from '../environment/environtments'
import * as utilities from '../utils/utilities';


@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  inputdata: string

  constructor(private http: HttpClient) {
  }

  insertShift(data: Shift): Observable<Shift> {
    return this.http.post<Shift>(`${environment_prod.BACKEND_URL}/insert/shift`, data, utilities.createOptions())

  }

  getAllShifts(): Observable<Shift[]> {
    return this.http.get<Shift[]>(`${environment_prod.BACKEND_URL}/get/shift`, utilities.createOptions())
  }
}
