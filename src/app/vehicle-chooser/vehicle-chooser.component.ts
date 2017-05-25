import { Component, OnInit } from '@angular/core';

declare const trafficMeister: any;

import '../../assets/api/vehicles/index.js';

@Component({
  selector: 'app-vehicle-chooser',
  templateUrl: './vehicle-chooser.component.html',
})
export class VehicleChooserComponent implements OnInit {
  private fetchedData = <any>[];
  private vehicleTypes = <any>[];
  private vehicleBrands = <any>[];
  private vehicleColors = <any>[];

  constructor() {
    trafficMeister.fetchData((err, data) => {
      console.log(data);
      this.fetchedData = data;
      this.getTypes();
      console.log(this.vehicleTypes);
    });
  }

  ngOnInit() {
  }

  getTypes() {
    const types = [];

    this.fetchedData.map(function (obj) {
      types.push(obj.type);
    }.bind(this));

    this.vehicleTypes = types.filter((v, i, a) => a.indexOf(v) === i);
  }

  getBrands(type: string) {
    const brands = [];

    this.fetchedData.map(function (obj) {
      if (obj.type === type) {
        brands.push(obj.brand);
      }
    }.bind(this));

    this.vehicleBrands = brands.filter((v, i, a) => a.indexOf(v) === i);
  }

  getColors(brand: string) {
    let colors = [];

    this.fetchedData.map(function (obj) {
      if (obj.brand === brand) {
        colors = colors.concat(obj.colors);
      }
    }.bind(this));

    console.log(colors);

    this.vehicleColors = colors.filter((v, i, a) => a.indexOf(v) === i);
  }

  typeSelected(type) {
    this.getBrands(type);
  }

  brandSelected(brand) {
    this.getColors(brand);
  }
}

