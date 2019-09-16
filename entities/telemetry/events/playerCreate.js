"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const telemetryEvent_1 = require("./telemetryEvent");
class PlayerCreate extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._character = new character_1.Character(event.character);
    }
    get character() {
        return this._character;
    }
}
exports.PlayerCreate = PlayerCreate;
//# sourceMappingURL=playerCreate.js.map