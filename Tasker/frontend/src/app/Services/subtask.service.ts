import { Injectable } from '@angular/core';
import { environment_prod } from '../environment/environtments';
import { HttpClient } from '@angular/common/http';
import { Subtasks } from 'src/Model/Subtasks';
import * as utilities from '../utils/utilities';

@Injectable({
  providedIn: 'root'
})
export class SubtaskService {

  constructor(private http: HttpClient) { }

  getSubtasksByTaskId(taskId: number) {
    return this.http.get<any>(`${environment_prod.BACKEND_URL}/subtasks/task/${taskId}`, utilities.createOptions());
  }

}
