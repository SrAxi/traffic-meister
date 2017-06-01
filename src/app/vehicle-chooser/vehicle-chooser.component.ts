import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/api.service';
import { VehicleHandler } from '../shared/utils/vehicle-handler';

@Component({
  selector: 'app-vehicle-chooser',
  templateUrl: './vehicle-chooser.component.html'
})
export class VehicleChooserComponent extends VehicleHandler implements OnInit {
  // Data obj
  public fetchedData = <any>[];

  // Data lists
  public vehicleTypes = <any>[];
  public vehicleBrands = <any>[];
  public vehicleColors = <any>[];

  // Selection models
  public typeSelector: string;
  public brandSelector: string;
  public colorSelector: string;

  // Selected vehicle usage
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

      // we now proceed to map the received data in order to load all possible options within our dropdowns
      this.loadAll();

    }).catch((ex) => {
      console.error('Error fetching data', ex);
    });
  }

  ngOnInit () {
  }

  // When an option is selected we will update all the lists according to which option we selected
  optionSelected (key, val) {
    this.updateLists(key, val);
  }
}

