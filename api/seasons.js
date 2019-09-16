"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class SeasonsPubgAPI extends base_1.PubgAPIEndpoint {
    list() {
        return this.api.axios.get(`/seasons`);
    }
}
exports.SeasonsPubgAPI = SeasonsPubgAPI;
//# sourceMappingURL=seasons.js.map