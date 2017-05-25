import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderModule } from './shared/layout/header/header.module';
import { VehicleChooserModule } from './vehicle-chooser/vehicle-chooser.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    VehicleChooserModule
  ],
  exports: [
    HeaderModule,
    VehicleChooserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
