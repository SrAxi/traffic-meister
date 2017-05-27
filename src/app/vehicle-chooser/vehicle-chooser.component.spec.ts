import { async, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from '../shared/utils/utils.module';
import { VehicleChooserComponent } from './vehicle-chooser.component';
import { ApiService } from '../shared/api/api.service';


describe('VehicleChooserComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                VehicleChooserComponent
            ],
            imports: [
                CommonModule,
                FormsModule,
                UtilsModule
            ],
            providers: [ApiService]
        }).compileComponents();
    }));

    it('should create the VehicleChooserComponent component', async(() => {
        const fixture = TestBed.createComponent(VehicleChooserComponent);
        const vehicleChooserComponent = fixture.debugElement.componentInstance;
        expect(vehicleChooserComponent).toBeTruthy();
    }));
});
