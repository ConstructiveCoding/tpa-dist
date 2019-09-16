"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class TelemetryPubgAPI extends base_1.PubgAPIEndpoint {
    get(arg) {
        let url;
        if (typeof arg === 'string') {
            url = arg;
        }
        else {
            url = arg.url;
        }
        return this.api.axios.get(url);
    }
}
exports.TelemetryPubgAPI = TelemetryPubgAPI;
//# sourceMappingURL=telemetry.js.map