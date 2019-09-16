"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const telemetryEvent_1 = require("./telemetryEvent");
class SwimEnd extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._character = new character_1.Character(event.character);
        this._swimDistance = event.swimDistance;
    }
    get character() {
        return this._character;
    }
    get swimDistance() {
        return this._swimDistance;
    }
}
exports.SwimEnd = SwimEnd;
//# sourceMappingURL=swimEnd.js.map