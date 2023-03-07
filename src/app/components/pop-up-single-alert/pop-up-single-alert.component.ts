import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-single-alert',
  templateUrl: './pop-up-single-alert.component.html',
  styleUrls: ['./pop-up-single-alert.component.css'],
})
export class PopUpSingleAlertComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PopUpSingleAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}
}
