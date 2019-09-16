"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(vehicle) {
        this._vehicleType = vehicle.vehicleType;
        this._vehicleId = vehicle.vehicleId;
        this._healthPercent = vehicle.healthPercent;
        this._feulPercent = vehicle.feulPercent;
    }
    get vehicleType() {
        return this._vehicleType;
    }
    get vehicleId() {
        return this._vehicleId;
    }
    get healthPercent() {
        return this._healthPercent;
    }
    get feulPercent() {
        return this._feulPercent;
    }
}
exports.Vehicle = Vehicle;
//# sourceMappingURL=vehicle.js.map