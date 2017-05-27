import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-vehicle-chooser',
  templateUrl: './vehicle-chooser.component.html',
})
export class VehicleChooserComponent implements OnInit {
  private fetchedData = <any>[];
  private vehicleTypes = <any>[];
  private vehicleBrands = <any>[];
  private vehicleColors = <any>[];

  private typeSelector: string;
  private brandSelector: string;
  private colorSelector: string;

  constructor(private apiService: ApiService) {
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

  ngOnInit() {
  }

  // getTypes() {
  //   const types = [];
  //
  //   this.fetchedData.map(function (obj) {
  //     types.push(obj.type);
  //   }.bind(this));
  //
  //   this.vehicleTypes = types.filter((v, i, a) => a.indexOf(v) === i);
  //
  //   this.typeSelector = this.vehicleTypes[0];
  // }
  //
  // getBrands() {
  //   const brands = [];
  //
  //   this.fetchedData.map(function (obj) {
  //
  //     brands.push(obj.brand);
  //
  //   }.bind(this));
  //
  //   this.vehicleBrands = brands.filter((v, i, a) => a.indexOf(v) === i);
  //   this.brandSelector = this.vehicleBrands[0];
  // }

  getColors() {
    let colors = [];

    // we are looping through the object received and adding the colors (all of them) to our `colors` array
    this.fetchedData.map(function (obj) {
      colors = colors.concat(obj.colors);

    }.bind(this));

    // now, we just remove the duplicates
    this.vehicleColors = colors.filter((v, i, a) => a.indexOf(v) === i);

    // and we assign a value to the color's dropdown model, we'll need it to filter the other lists
    this.colorSelector = this.vehicleColors[0];
  }

  public updateLists(key, value) {
    let colors = [];
    const brands = [];
    const types = [];

    console.log('key is: ' + key + '. And value is: ' + value);

    this.fetchedData.map(function (obj) {
      let colorMatch = false;
      if (key === 'colors') {
        for (const color of obj[key]) {
          if (color === value) {
            colorMatch = true;
          }
        }
      }

      if (obj[key] === value || colorMatch) {
        colors = colors.concat(obj.colors);
        brands.push(obj.brand);
        types.push(obj.type);
      }
    }.bind(this));

    this.vehicleTypes = types.filter((v, i, a) => a.indexOf(v) === i);
    this.vehicleBrands = brands.filter((v, i, a) => a.indexOf(v) === i);
    this.vehicleColors = colors.filter((v, i, a) => a.indexOf(v) === i);

    console.log('typeSelector --> ' + JSON.stringify(this.typeSelector));
    console.log('brandSelector --> ' + JSON.stringify(this.brandSelector));
    console.log('colorSelector --> ' + JSON.stringify(this.colorSelector));
  }

  public loadAll() {
    let colors = [];
    const brands = [];
    const types = [];

    this.fetchedData.map(function (obj) {
      colors = colors.concat(obj.colors);
      brands.push(obj.brand);
      types.push(obj.type);

    }.bind(this));

    // now, we just remove the duplicates
    this.vehicleTypes = types.filter((v, i, a) => a.indexOf(v) === i);
    this.vehicleBrands = brands.filter((v, i, a) => a.indexOf(v) === i);
    this.vehicleColors = colors.filter((v, i, a) => a.indexOf(v) === i);

    // and we assign a value to the color's dropdown model, we'll need it to filter the other lists
    this.typeSelector = this.vehicleTypes[0];
    this.brandSelector = this.vehicleBrands[0];
    this.colorSelector = this.vehicleColors[0];

    console.log('typeSelector --> ' + JSON.stringify(this.typeSelector));
    console.log('brandSelector --> ' + JSON.stringify(this.brandSelector));
    console.log('colorSelector --> ' + JSON.stringify(this.colorSelector));
  }

  typeSelected(type) {
    this.updateLists('type', type);
  }

  brandSelected(brand) {
    this.updateLists('brand', brand);
  }

  colorSelected(color) {
    this.updateLists('colors', color);
  }
}
