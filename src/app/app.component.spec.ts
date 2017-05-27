import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { VehicleChooserModule } from './vehicle-chooser/vehicle-chooser.module';
import { HeaderModule } from './shared/layout/header/header.module';
import { ApiService } from './shared/api/api.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HeaderModule,
                VehicleChooserModule
            ],
            providers: [ApiService]
        });
        TestBed.compileComponents();
    }));

    /*Tests start here!*/
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        expect(compiled.querySelector('h1').textContent).toContain('Traffic Meister');
    }));
});
