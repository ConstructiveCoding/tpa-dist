"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telemetryEvent_1 = require("./telemetryEvent");
class PlayerLogout extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._accountId = event.accountId;
    }
    get accountId() {
        return this._accountId;
    }
}
exports.PlayerLogout = PlayerLogout;
//# sourceMappingURL=playerLogout.js.map