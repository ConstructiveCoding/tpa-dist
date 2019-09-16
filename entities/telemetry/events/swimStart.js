"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const telemetryEvent_1 = require("./telemetryEvent");
class SwimStart extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._character = new character_1.Character(event.character);
    }
    get character() {
        return this._character;
    }
}
exports.SwimStart = SwimStart;
//# sourceMappingURL=swimStart.js.map