"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const telemetryEvent_1 = require("./telemetryEvent");
class PlayerTakeDamage extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._attackId = event.attackId;
        this._victim = new character_1.Character(event.victim);
        this._damageTypeCategory = event.damageTypeCategory;
        this._damageCauserName = event.damageCauserName;
        this._damageReason = event.damageReason;
        this._damage = event.damage;
        if (event.attacker) {
            this._attacker = new character_1.Character(event.attacker);
        }
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
    get damageTypeCategory() {
        return this._damageTypeCategory;
    }
    get damageCauserName() {
        return this._damageCauserName;
    }
    get damageReason() {
        return this._damageReason;
    }
    get damage() {
        return this._damage;
    }
}
exports.PlayerTakeDamage = PlayerTakeDamage;
//# sourceMappingURL=playerTakeDamage.js.map