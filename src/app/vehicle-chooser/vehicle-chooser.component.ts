import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/api.service';
import { VehicleHandler } from '../shared/utils/vehicle-handler';

@Component({
    selector: 'app-vehicle-chooser',
    templateUrl: './vehicle-chooser.component.html'
})
export class VehicleChooserComponent extends VehicleHandler implements OnInit {
    protected fetchedData = <any>[];
    protected vehicleTypes = <any>[];
    protected vehicleBrands = <any>[];
    protected vehicleColors = <any>[];

    // Selection models
    protected typeSelector: string;
    protected brandSelector: string;
    protected colorSelector: string;

    // Selected vehicle
    protected vehicleFound = false;
    protected uiMessagge: any;
    protected selectedVehicle = <any>{};

    constructor (protected apiService: ApiService) {
        super();

        // Here we call the App's shared ApiService in order to get the data
        // In a real App we will have Http methods inside this service
        this.apiService.fetch().then((data) => {
                // we first store the received data in our fetchedData object
                this.fetchedData = data;

                // we now proceed to get a list of all vehicle types that exist in the object we have received
                this.loadAll();
            }
        );
    }

    ngOnInit () {
    }

    typeSelected (type) {
        this.updateLists('type', type);
    }

    brandSelected (brand) {
        this.updateLists('brand', brand);
    }

    colorSelected (color) {
        this.updateLists('colors', color);
    }
}

