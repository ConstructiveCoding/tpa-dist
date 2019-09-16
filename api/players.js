"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class PlayersPubgAPI extends base_1.PubgAPIEndpoint {
    get(id) {
        return this.api.axios.get(`/players/${id}`);
    }
    getSeasonStats(playerId, seasonId) {
        return this.api.axios.get(`/players/${playerId}/seasons/${seasonId}`);
    }
    listByID(playerIDs) {
        return this.api.axios.get('/players', { params: { 'filter[playerIds]': playerIDs.join(',') } });
    }
    listByName(playerNames) {
        return this.api.axios.get('/players', { params: { 'filter[playerNames]': playerNames.join(',') } });
    }
}
exports.PlayersPubgAPI = PlayersPubgAPI;
//# sourceMappingURL=players.js.map