"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const telemetryEvent_1 = require("./telemetryEvent");
class PlayerKill extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._attackId = event.attackId;
        this._killer = new character_1.Character(event.killer);
        this._victim = new character_1.Character(event.victim);
        this._damageReason = event.damageReason;
        this._damageTypeCategory = event.damageTypeCategory;
        this._damageCauserName = event.damageCauserName;
        this._distance = event.distance;
    }
    get attackId() {
        return this._attackId;
    }
    get killer() {
        return this._killer;
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
}
exports.PlayerKill = PlayerKill;
//# sourceMappingURL=playerKill.js.map