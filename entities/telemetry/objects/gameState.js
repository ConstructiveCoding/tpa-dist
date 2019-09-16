"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const location_1 = require("./location");
class GameState {
    constructor(gs) {
        this._elapsedTime = gs.elapsedTime;
        this._numAliveTeams = gs.numAliveTeams;
        this._numJoinPlayers = gs.numJoinPlayers;
        this._numAlivePlayers = gs.numAlivePlayers;
        this._safetyZonePosition = new location_1.Location(gs.safetyZonePosition);
        this._safetyZoneRadius = gs.safetyZoneRadius;
        this._poisonGasWarningPosition = new location_1.Location(gs.poisonGasWarningPosition);
        this._poisonGasWarningRadius = gs.poisonGasWarningRadius;
        this._redZonePosition = new location_1.Location(gs.redZonePosition);
        this._redZoneRadius = gs.redZoneRadius;
    }
    get elapsedTime() {
        return this._elapsedTime;
    }
    get numAliveTeams() {
        return this._numAliveTeams;
    }
    get numJoinPlayers() {
        return this._numJoinPlayers;
    }
    get numAlivePlayers() {
        return this._numAlivePlayers;
    }
    get safetyZonePosition() {
        return this._safetyZonePosition;
    }
    get safetyZoneRadius() {
        return this._safetyZoneRadius;
    }
    get poisonGasWarningPosition() {
        return this._poisonGasWarningPosition;
    }
    get poisonGasWarningRadius() {
        return this._poisonGasWarningRadius;
    }
    get redZonePosition() {
        return this._redZonePosition;
    }
    get redZoneRadius() {
        return this._redZoneRadius;
    }
}
exports.GameState = GameState;
//# sourceMappingURL=gameState.js.map