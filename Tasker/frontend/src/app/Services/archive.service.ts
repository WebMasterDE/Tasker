import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Archive } from 'src/Model/Archive';
import { environment_prod } from '../environment/environtments'
import * as utilities from '../utils/utilities';


@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  inputdata: string

  constructor(private http: HttpClient) {
  }

  getTasksArchive(id_user: number): Observable<Archive[]> {
    return this.http.get<Archive[]>(`${environment_prod.BACKEND_URL}/archive/${id_user}`, utilities.createOptions());
  }

  insertTasksArchive(data: Archive, id_task: number, id_user: number): Observable<Archive> {
    return this.http.post<Archive>(`${environment_prod.BACKEND_URL}/archive/${id_task}/${id_user}`, data, utilities.createOptions());
  }
}
