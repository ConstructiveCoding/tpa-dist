"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telemetryEvent_1 = require("./telemetryEvent");
class MatchDefinition extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._matchId = event.MatchId;
        this._pingQuality = event.PingQuality;
        this._seasonState = event.SeasonState;
    }
    get matchId() {
        return this._matchId;
    }
    get pingQuality() {
        return this._pingQuality;
    }
    get seasonState() {
        return this._seasonState;
    }
}
exports.MatchDefinition = MatchDefinition;
//# sourceMappingURL=matchDefinition.js.map