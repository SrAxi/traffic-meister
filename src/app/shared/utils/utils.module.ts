import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';
import {SafeHtml} from './safe-html.pipe';

@NgModule({
  declarations: [CapitalizePipe, SafeHtml],
  exports: [CapitalizePipe, SafeHtml],
})
export class UtilsModule {
  static forRoot() {
    return {
      ngModule: UtilsModule
    };
  }
}
