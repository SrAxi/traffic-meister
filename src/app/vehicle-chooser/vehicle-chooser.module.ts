import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleChooserComponent } from './vehicle-chooser.component';
import { UtilsModule } from '../shared/utils/utils.module';

@NgModule({
  imports: [CommonModule, UtilsModule],
  declarations: [
    VehicleChooserComponent,
  ],
  exports: [
    VehicleChooserComponent
  ]
})
export class VehicleChooserModule {
}
