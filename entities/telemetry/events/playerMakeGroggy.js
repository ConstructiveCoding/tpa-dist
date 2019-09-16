"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const telemetryEvent_1 = require("./telemetryEvent");
class PlayerMakeGroggy extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._attackId = event.attackId;
        this._attacker = new character_1.Character(event.attacker);
        this._victim = new character_1.Character(event.victim);
        this._damageReason = event.damageReason;
        this._damageTypeCategory = event.damageTypeCategory;
        this._damageCauserName = event.damageCauserName;
        this._distance = event.distance;
        this._isAttackerInVehicle = event.isAttackerInVehicle;
        this._dBNOId = event.dBNOId;
    }
    get attackId() {
        return this._attackId;
    }
    get attacker() {
        return this._attacker;
    }
    get victim() {
        return this._victim;
    }
    get damageReason() {
        return this._damageReason;
    }
    get damageTypeCategory() {
        return this._damageTypeCategory;
    }
    get damageCauserName() {
        return this._damageCauserName;
    }
    get distance() {
        return this._distance;
    }
    get isAttackerInVehicle() {
        return this._isAttackerInVehicle;
    }
    get dBNOId() {
        return this._dBNOId;
    }
}
exports.PlayerMakeGroggy = PlayerMakeGroggy;
//# sourceMappingURL=playerMakeGroggy.js.map