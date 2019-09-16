"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const vehicle_1 = require("../objects/vehicle");
const telemetryEvent_1 = require("./telemetryEvent");
class WheelDestroy extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._attackId = event.attackId;
        this._attacker = new character_1.Character(event.attacker);
        this._vehicle = new vehicle_1.Vehicle(event.vehicle);
        this._damageTypeCategory = event.damageTypeCategory;
        this._damageCauserName = event.damageCauserName;
    }
    get attackId() {
        return this._attackId;
    }
    get attacker() {
        return this._attacker;
    }
    get vehicle() {
        return this._vehicle;
    }
    get damageTypeCategory() {
        return this._damageTypeCategory;
    }
    get damageCauserName() {
        return this._damageCauserName;
    }
}
exports.WheelDestroy = WheelDestroy;
//# sourceMappingURL=wheelDestroy.js.map