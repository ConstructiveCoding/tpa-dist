"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const telemetryEvent_1 = require("./telemetryEvent");
class PlayerRevive extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._reviver = new character_1.Character(event.reviver);
        this._victim = new character_1.Character(event.victim);
    }
    get reviver() {
        return this._reviver;
    }
    get victim() {
        return this._victim;
    }
}
exports.PlayerRevive = PlayerRevive;
//# sourceMappingURL=playerRevive.js.map