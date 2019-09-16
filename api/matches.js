"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class MatchesPubgAPI extends base_1.PubgAPIEndpoint {
    get(id) {
        return this.api.axios.get(`/matches/${id}`);
    }
}
exports.MatchesPubgAPI = MatchesPubgAPI;
//# sourceMappingURL=matches.js.map