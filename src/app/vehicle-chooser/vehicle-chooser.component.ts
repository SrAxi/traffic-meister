import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/api.service';
import { VehicleHandler } from '../shared/utils/vehicle-handler';

@Component({
    selector: 'app-vehicle-chooser',
    templateUrl: './vehicle-chooser.component.html'
})
export class VehicleChooserComponent extends VehicleHandler implements OnInit {
    public fetchedData = <any>[];
    public vehicleTypes = <any>[];
    public vehicleBrands = <any>[];
    public vehicleColors = <any>[];

    // Selection models
    public typeSelector: string;
    public brandSelector: string;
    public colorSelector: string;

    // Selected vehicle
    public vehicleFound = false;
    public uiMessagge: any;
    public selectedVehicle = <any>{};

    constructor (public apiService: ApiService) {
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

