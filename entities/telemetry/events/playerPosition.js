"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = require("../objects");
const character_1 = require("../objects/character");
const telemetryEvent_1 = require("./telemetryEvent");
class PlayerPosition extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._character = new character_1.Character(event.character);
        this._elapsedTime = event.elapsedTime;
        this._numAlivePlayers = event.numAlivePlayers;
        if (event.vehicle) {
            this._vehicle = new objects_1.Vehicle(event.vehicle);
        }
    }
    get character() {
        return this._character;
    }
    get elapsedTime() {
        return this._elapsedTime;
    }
    get numAlivePlayers() {
        return this._numAlivePlayers;
    }
    get vehicle() {
        return this._vehicle;
    }
}
exports.PlayerPosition = PlayerPosition;
//# sourceMappingURL=playerPosition.js.map