import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpMultipleAlertsComponent } from './pop-up-multiple-alerts/pop-up-multiple-alerts.component';
import { PopUpSingleAlertComponent } from './pop-up-single-alert/pop-up-single-alert.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      AlertComponent,
      PopUpMultipleAlertsComponent,
      PopUpSingleAlertComponent 
    ]
})
export class CustomPopUpModule { }