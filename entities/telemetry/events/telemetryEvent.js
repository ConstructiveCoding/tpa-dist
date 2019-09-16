"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TelemetryEvent {
    constructor(event) {
        this._D = new Date(event._D);
    }
    get dateTime() {
        return this._D;
    }
}
exports.TelemetryEvent = TelemetryEvent;
//# sourceMappingURL=telemetryEvent.js.map