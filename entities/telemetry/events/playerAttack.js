"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const item_1 = require("../objects/item");
const vehicle_1 = require("../objects/vehicle");
const telemetryEvent_1 = require("./telemetryEvent");
class PlayerAttack extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._attackId = event.attackId;
        this._attacker = new character_1.Character(event.attacker);
        this._attackType = event.attackType;
        this._fireWeaponStackCount = event.fireWeaponStackCount;
        this._weapon = new item_1.Item(event.weapon);
        if (event.vehicle) {
            this._vehicle = new vehicle_1.Vehicle(event.vehicle);
        }
    }
    get attackId() {
        return this._attackId;
    }
    get attacker() {
        return this._attacker;
    }
    get attackType() {
        return this._attackType;
    }
    get fireWeaponStackCount() {
        return this._fireWeaponStackCount;
    }
    get weapon() {
        return this._weapon;
    }
    get vehicle() {
        return this._vehicle;
    }
}
exports.PlayerAttack = PlayerAttack;
//# sourceMappingURL=playerAttack.js.map