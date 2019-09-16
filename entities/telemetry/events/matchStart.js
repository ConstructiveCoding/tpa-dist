"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const telemetryEvent_1 = require("./telemetryEvent");
class MatchStart extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._mapName = event.mapName;
        this._weatherId = event.weatherId;
        this._characters = event.characters.map(e => new character_1.Character(e));
        this._cameraViewBehaviour = event.cameraViewBehaviour;
        this._teamSize = event.teamSize;
        this._isCustomGame = event.isCustomGame;
        this._isEventMode = event.isEventMode;
        this._blueZoneCustomOptions = event.blueZoneCustomOptions;
    }
    get mapName() {
        return this._mapName;
    }
    get weatherId() {
        return this._weatherId;
    }
    get characters() {
        return this._characters;
    }
    get cameraViewBehaviour() {
        return this._cameraViewBehaviour;
    }
    get teamSize() {
        return this._teamSize;
    }
    get isCustomGame() {
        return this._isCustomGame;
    }
    get isEventMode() {
        return this._isEventMode;
    }
    get blueZoneCustomOptions() {
        return this._blueZoneCustomOptions;
    }
}
exports.MatchStart = MatchStart;
//# sourceMappingURL=matchStart.js.map