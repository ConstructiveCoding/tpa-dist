"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameState_1 = require("../objects/gameState");
const telemetryEvent_1 = require("./telemetryEvent");
class GameStatePeriodic extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._gameState = new gameState_1.GameState(event.gameState);
    }
    get gameState() {
        return this._gameState;
    }
}
exports.GameStatePeriodic = GameStatePeriodic;
//# sourceMappingURL=gameStatePeriodic.js.map