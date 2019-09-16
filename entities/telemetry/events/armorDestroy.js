"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const item_1 = require("../objects/item");
const telemetryEvent_1 = require("./telemetryEvent");
class ArmorDestroy extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._attackId = event.attackId;
        this._attacker = new character_1.Character(event.attacker);
        this._victim = new character_1.Character(event.victim);
        this._damageTypeCategory = event.damageTypeCategory;
        this._damageReason = event.damageReason;
        this._damageCauserName = event.damageCauserName;
        this._item = new item_1.Item(event.item);
        this._distance = event.distance;
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
    get damageReason() {
        return this._damageReason;
    }
    get damageCauserName() {
        return this._damageCauserName;
    }
    get item() {
        return this._item;
    }
    get distance() {
        return this._distance;
    }
}
exports.ArmorDestroy = ArmorDestroy;
//# sourceMappingURL=armorDestroy.js.map