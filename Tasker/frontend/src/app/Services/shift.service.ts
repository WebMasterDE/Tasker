import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shift } from 'src/Model/Shift';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  constructor(private http: HttpClient) { }

  inputdata: string

  insertShift(data: Shift): Observable<Shift> {
    return this.http.post<Shift>(`http://localhost:3000/api/insert/shift`, data)
  }
}
