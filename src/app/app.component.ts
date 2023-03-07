import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpSingleAlertComponent } from './components/pop-up-single-alert/pop-up-single-alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}

  // pop-up single alert

  openDialog() {
    const dialogRef = this.dialog.open(PopUpSingleAlertComponent, {
      width: '250px',
      height: '250px',
      data: {idAAF: 1},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  // pop-up multiple alerts

  /*
    const dialogRef = this.dialog.open(, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  */
}
