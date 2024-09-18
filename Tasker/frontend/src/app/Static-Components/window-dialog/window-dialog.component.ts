import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string; text: string, btn_left: string, btn_right: string, action: Function }) {
    this.title = data.title;
    this.text = data.text;
    this.btn_left = data.btn_left
    this.btn_right = data.btn_right
    this.action = data.action
  }

}
