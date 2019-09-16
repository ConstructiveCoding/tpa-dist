"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
/**
 * Statistics for a player in a given season.
 *
 * Initialize this by calling the `get` method with an instance of `PubgAPI`, a player ID and
 * a season ID.
 *
 * The returned instance of this class will contain, for each game mode, the stats and a list of
 * Match IDs.
 */
class PlayerSeason {
    constructor(playerSeason) {
        const relationships = playerSeason.data.relationships;
        this._playerId = relationships.player.data.id;
        this._seasonId = relationships.season.data.id;
        const gameModesStats = playerSeason.data.attributes.gameModeStats;
        this._duoStats = new __1.GameModeStats(gameModesStats.duo);
        this._duoFPPStats = new __1.GameModeStats(gameModesStats['duo-fpp']);
        this._duoMatchIds = relationships.matchesDuo.data.map(elem => elem.id);
        this._duoFPPMatchIds = relationships.matchesDuoFPP.data.map(elem => elem.id);
        this._soloStats = new __1.GameModeStats(gameModesStats.solo);
        this._soloFPPStats = new __1.GameModeStats(gameModesStats['solo-fpp']);
        this._soloMatchIds = relationships.matchesSolo.data.map(elem => elem.id);
        this._soloFPPMatchIds = relationships.matchesSoloFPP.data.map(elem => elem.id);
        this._squadStats = new __1.GameModeStats(gameModesStats.squad);
        this._squadFPPStats = new __1.GameModeStats(gameModesStats['squad-fpp']);
        this._squadMatchIds = relationships.matchesSquad.data.map(elem => elem.id);
        this._squadFPPMatchIds = relationships.matchesSquadFPP.data.map(elem => elem.id);
    }
    static get(api, playerId, seasonId) {
        return __awaiter(this, void 0, void 0, function* () {
            const playerAPI = new __1.PlayersPubgAPI(api);
            const seasonData = yield playerAPI.getSeasonStats(playerId, seasonId);
            return PlayerSeason.fromSeasonData(seasonData.data);
        });
    }
    static fromSeasonData(seasonData) {
        return new PlayerSeason(seasonData);
    }
    get playerId() {
        return this._playerId;
    }
    get seasonId() {
        return this._seasonId;
    }
    get duoFPPStats() {
        return this._duoFPPStats;
    }
    get duoStats() {
        return this._duoStats;
    }
    get duoMatchIds() {
        return this._duoMatchIds;
    }
    get duoFPPMatchIds() {
        return this._duoFPPMatchIds;
    }
    get soloFPPStats() {
        return this._soloFPPStats;
    }
    get soloStats() {
        return this._soloStats;
    }
    get soloMatchIds() {
        return this._soloMatchIds;
    }
    get soloFPPMatchIds() {
        return this._soloFPPMatchIds;
    }
    get squadFPPStats() {
        return this._squadFPPStats;
    }
    get squadStats() {
        return this._squadStats;
    }
    get squadMatchIds() {
        return this._squadMatchIds;
    }
    get squadFPPMatchIds() {
        return this._squadFPPMatchIds;
    }
}
exports.PlayerSeason = PlayerSeason;
//# sourceMappingURL=playerSeason.js.map