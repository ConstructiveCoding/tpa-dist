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
 * A PUBG Player.
 *
 * Contains basic info about a Player, such as ID and name.
 *
 * To retrieve details on the Matches this player took part in, see `Match` class.
 */
class Player {
    constructor(player) {
        this._id = player.id;
        this._name = player.attributes.name;
        this._shardId = player.attributes.shardId;
        this._matchIds = player.relationships.matches.data.map(m => m.id);
    }
    /**
     * Fetch a Player from PUBG API.
     *
     * Returns a `Promise` of the corresponding instance of the `Player` class.
     *
     * To retrieve a `Player`, **await** on the result of this method.
     *
     * @param api instance of `PubgAPI` that will be used to make the API request
     * @param playerId ID of the player to retrieve
     */
    static get(api, playerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const playersAPI = new __1.PlayersPubgAPI(api);
            const playerData = yield playersAPI.get(playerId);
            return Player.fromDetail(playerData.data);
        });
    }
    /**
     * Fetch a list of Players from PUBG API given a list of player IDs as input.
     *
     * Returns a `Promise` of a list of `Player` instances of players with the given IDs.
     *
     * To retrieve a list of `Player`s, **await** on the result of this method.
     *
     * @param api instance of `PubgAPI` that will be used to make the API request
     * @param playerIds list of player IDs
     */
    static filterById(api, playerIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const playersAPI = new __1.PlayersPubgAPI(api);
            const playersData = yield playersAPI.listByID(playerIds);
            return Player.fromList(playersData.data);
        });
    }
    /**
     * Fetch a list of Players from PUBG API, given a list of player names as input.
     *
     * Returns a `Promise` of a list of `Player` instances of players with the given names.
     *
     * To retrieve a list of `Player`s, **await** on the result of this method.
     *
     * @param api instance of `PubgAPI` that will be used to make the API request
     * @param playerNames list of player names
     */
    static filterByName(api, playerNames) {
        return __awaiter(this, void 0, void 0, function* () {
            const playersAPI = new __1.PlayersPubgAPI(api);
            const playersData = yield playersAPI.listByName(playerNames);
            return Player.fromList(playersData.data);
        });
    }
    /**
     * Create and return a Player instance from an API player detail reply.
     * @param playerDetail Player resource as returned from PUBG API
     */
    static fromDetail(playerDetail) {
        return new Player(playerDetail.data);
    }
    /**
     * Create and return a list of Player instances from an API player list reply.
     * @param playerList PlayerList resource as returned from PUBG API
     */
    static fromList(playerList) {
        const players = [];
        playerList.data.forEach(playerData => {
            const player = new Player(playerData);
            players.push(player);
        });
        return players;
    }
    /**
     * Player ID.
     */
    get id() {
        return this._id;
    }
    /**
     * Player name.
     */
    get name() {
        return this._name;
    }
    /**
     * List of match IDs this player took part in.
     * This list is ordered from most recent to oldest.
     */
    get matchIds() {
        return this._matchIds;
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map