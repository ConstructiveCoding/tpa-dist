"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const telemetryEvent_1 = require("./telemetryEvent");
class MatchEnd extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._characters = event.characters.map(e => new character_1.Character(e));
    }
    get characters() {
        return this._characters;
    }
}
exports.MatchEnd = MatchEnd;
//# sourceMappingURL=matchEnd.js.map