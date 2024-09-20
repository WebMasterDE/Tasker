import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArchiveService } from 'src/app/Services/archive.service';
import { ShiftService } from 'src/app/Services/shift.service';

@Component({
  selector: 'app-window-dialog',
  templateUrl: './window-dialog.component.html',
  styleUrls: ['./window-dialog.component.css']
})
export class WindowDialogComponent {
  title: string;
  text: string;
  btn_left: string;
  btn_right: string
  action: Function;
  inputdata: string;
  typeinput: string
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; text: string, btn_left: string, btn_right: string, action: Function, inputdata: string | null, typeinput: string }, public http_shift: ShiftService) {
    this.title = data.title;
    this.text = data.text;
    this.btn_left = data.btn_left
    this.btn_right = data.btn_right
    this.action = data.action
    this.typeinput = data.typeinput
  }

}
