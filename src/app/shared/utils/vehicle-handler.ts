import { UI_MESSAGGES } from '../../vehicle-chooser/ui-messagges';

export abstract class VehicleHandler {
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

    public updateLists (key, value) {
        let colors = [];
        const brands = [];
        const types = [];

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

        // selection changed, let's check if the overall selection vehicle exists
        this.checkSelection();
    }

    public loadAll () {
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
    }

    public checkSelection () {
        for (let i = 0; i < this.fetchedData.length; i++) {
            if (this.fetchedData[i].brand === this.brandSelector && this.fetchedData[i].type === this.typeSelector
                && this.fetchedData[i].colors.indexOf(this.colorSelector) > -1) {
                this.vehicleFound = true;
                this.selectedVehicle = this.fetchedData[i];
                break;
            } else {
                this.vehicleFound = false;
            }
        }

        this.uiMessagge = this.vehicleFound ? UI_MESSAGGES['vehicleFound'] : UI_MESSAGGES['vehicleNotFound'];
    }
}
