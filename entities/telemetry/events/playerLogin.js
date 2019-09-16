"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const telemetryEvent_1 = require("./telemetryEvent");
class PlayerLogin extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._accountId = event.accountId;
    }
    get accountId() {
        return this._accountId;
    }
}
exports.PlayerLogin = PlayerLogin;
//# sourceMappingURL=playerLogin.js.map