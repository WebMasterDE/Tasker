import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Task } from "../../Model/Task";
import { Observable } from "rxjs";
import { environment_prod } from '../environment/environtments'
import * as utilities from '../utils/utilities';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  getAllTasks = []

  constructor(private http: HttpClient) {
  }

  GetTasksUser(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment_prod.BACKEND_URL}/tasks`, utilities.createOptions())
  }

  DeleteTaskUser(taskId: number): Observable<Task> {
    return this.http.delete<Task>(`${environment_prod.BACKEND_URL}/task/${taskId}`, utilities.createOptions())
  }

  CreateTaskUser(data): Observable<Task> {
    return this.http.post<Task>(`${environment_prod.BACKEND_URL}/task`, data, utilities.createOptions())
  }
}
