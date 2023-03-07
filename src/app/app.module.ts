import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomPopUpModule } from './components/custom-pop-up.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CustomPopUpModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
