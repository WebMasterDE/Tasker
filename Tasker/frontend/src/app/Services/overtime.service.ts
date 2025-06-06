import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Overtime } from 'src/Model/Overtime';
import { environment_prod } from '../environment/environtments';
import { Observable } from 'rxjs';
import * as utilities from '../utils/utilities';


@Injectable({
  providedIn: 'root'
})
export class OvertimeService {

  constructor(private http: HttpClient) { }

  InsertOvertimeHours(data: Overtime) {
    console.log("srv", data)
    return this.http.post<Overtime>(`${environment_prod.BACKEND_URL}/insert/overtime`, data, utilities.createOptions());
  }

  getOvertimeHours(id, month, year): Observable<Overtime[]> {
    return this.http.get<Overtime[]>(`${environment_prod.BACKEND_URL}/get/${id}/${month}/${year}/overtime`, utilities.createOptions())
  }

  getOvertimeByIdHour(id): Observable<Overtime> {
    return this.http.get<Overtime>(`${environment_prod.BACKEND_URL}/get/${id}/overtime`, utilities.createOptions())
  }

  updateOvertimeHours(data: Overtime) {
    return this.http.post<Overtime>(`${environment_prod.BACKEND_URL}/post/update/overtime`, data, utilities.createOptions())
  }

}
