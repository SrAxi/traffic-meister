import { UI_MESSAGGES } from '../../vehicle-chooser/ui-messagges';

export abstract class VehicleHandler {
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

  // Here we will update all the lists according to the `key: value` passed as parameters. Example: `type: 'car'`
  public updateLists(key, value) {
    let colors = [];
    const brands = [];
    const types = [];

    this.fetchedData.map(function (obj) {
      let colorMatch = false;
      if (key === 'colors') {
        // We are forced to make a second loop if the selected option is a color
        // Because in our data `colors` is an array
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
    });

    // removing duplicates
    this.vehicleTypes = types.filter((v, i, a) => a.indexOf(v) === i);
    this.vehicleBrands = brands.filter((v, i, a) => a.indexOf(v) === i);
    this.vehicleColors = colors.filter((v, i, a) => a.indexOf(v) === i);

    // selection changed, let's check if the overall selection vehicle exists
    this.checkSelection();
  }

  // We proceed to map the received data and split it in 3 lists: Type, Brand and Color
  public loadAll() {
    let colors = [];
    const brands = [];
    const types = [];

    this.fetchedData.map(function (obj) {
      colors = colors.concat(obj.colors);
      brands.push(obj.brand);
      types.push(obj.type);

    });

    // now, we just remove the duplicates
    this.vehicleTypes = types.filter((v, i, a) => a.indexOf(v) === i);
    this.vehicleBrands = brands.filter((v, i, a) => a.indexOf(v) === i);
    this.vehicleColors = colors.filter((v, i, a) => a.indexOf(v) === i);
  }

  // Here we check if the overall selection points to an existing vehicle
  public checkSelection() {
    // We start by looping searching for matches
    for (let i = 0; i < this.fetchedData.length; i++) {
      if (this.fetchedData[i].brand === this.brandSelector && this.fetchedData[i].type === this.typeSelector
        && this.fetchedData[i].colors.indexOf(this.colorSelector) > -1) {
        // We found our vehicle! We get this vehicle and store it for showing it to the user
        // (In our template we are showing only the img, but we could actually show a table of contents regarding
        // this vehicle, that's why we store the whole Obj and not only the img string)
        this.vehicleFound = true;
        this.selectedVehicle = this.fetchedData[i];
        break;
      } else {
        this.vehicleFound = false;
      }
    }

    // For a better UX we want to communicate to the user what's going on
    // Here we load some template messagges in order to tell the user why he is not viewing his selectio, for example
    this.uiMessagge = this.vehicleFound ? UI_MESSAGGES['vehicleFound'] : UI_MESSAGGES['vehicleNotFound'];
  }
}
