"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class TournamentPubgAPI extends base_1.PubgAPIEndpoint {
    get(id) {
        return this.api.axios.get(`/tournaments/${id}`);
    }
}
exports.TournamentPubgAPI = TournamentPubgAPI;
//# sourceMappingURL=tournament.js.map