"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const vehicle_1 = require("../objects/vehicle");
const telemetryEvent_1 = require("./telemetryEvent");
class VehicleRide extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._character = new character_1.Character(event.character);
        this._vehicle = new vehicle_1.Vehicle(event.vehicle);
        this._seatIndex = event.seatIndex;
    }
    get character() {
        return this._character;
    }
    get vehicle() {
        return this._vehicle;
    }
    get seatIndex() {
        return this._seatIndex;
    }
}
exports.VehicleRide = VehicleRide;
//# sourceMappingURL=vehicleRide.js.map