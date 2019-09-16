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
 * A PUBG Match.
 *
 * Contains information and statistics on a Match, such as date, duration, map, participants
 * and teams.
 */
class Match {
    constructor(matchDetail) {
        this._id = matchDetail.data.id;
        this._dateCreated = new Date(matchDetail.data.attributes.createdAt);
        this._duration = matchDetail.data.attributes.duration;
        this._gameMode = matchDetail.data.attributes.gameMode;
        this._isCustomMatch = matchDetail.data.attributes.isCustomMatch;
        this._map = matchDetail.data.attributes.mapName;
        this._patchVersion = matchDetail.data.attributes.patchVersion;
        this._seasonState = matchDetail.data.attributes.seasonState;
        this._shardId = matchDetail.data.attributes.shardId;
        const participantsMap = new Map(); // maps participant id to Participant
        const rosterContentsMap = new Map(); // maps roster id to participant id list
        const participants = [];
        const rosters = [];
        matchDetail.included.forEach(obj => {
            switch (obj.type) {
                case 'asset':
                    if (this._asset) {
                        throw new Error('Multiple Asset objects found');
                    }
                    this._asset = new __1.Asset(obj);
                    break;
                case 'participant':
                    const participant = new __1.Participant(obj);
                    participantsMap.set(participant.id, participant);
                    participants.push(participant);
                    break;
                case 'roster':
                    const rosterInput = obj;
                    rosterContentsMap.set(rosterInput.id, rosterInput.relationships.participants.data.map(pData => pData.id));
                    const roster = new __1.Roster(rosterInput);
                    rosters.push(roster);
                    break;
                default:
                    throw new Error(`Unexpected object type in match included: ${obj.type}`);
            }
        });
        rosters.forEach(r => {
            const members = rosterContentsMap.get(r.id);
            members.forEach(m => {
                const p = participantsMap.get(m);
                r.participants.push(p);
            });
        });
        this._participants = participants;
        this._rosters = rosters;
    }
    static get(api, matchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const matchesAPI = new __1.MatchesPubgAPI(api);
            const matchData = yield matchesAPI.get(matchId);
            return Match.fromDetail(matchData.data);
        });
    }
    static fromDetail(matchDetail) {
        return new Match(matchDetail);
    }
    //#region getters
    /**
     * Match ID
     */
    get id() {
        return this._id;
    }
    /**
     * Time this match object was stored in the API
     */
    get dateCreated() {
        return this._dateCreated;
    }
    /**
     * Length of the match
     */
    get duration() {
        return this._duration;
    }
    /**
     * Game mode played
     */
    get gameMode() {
        return this._gameMode;
    }
    get isCustomMatch() {
        return this._isCustomMatch;
    }
    get map() {
        return this._map;
    }
    get patchVersion() {
        return this._patchVersion;
    }
    get seasonState() {
        return this._seasonState;
    }
    get shardId() {
        return this._shardId;
    }
    /**
     * The Asset object linked to this Match. Contains the URL for telemetry data.
     */
    get asset() {
        return this._asset;
    }
    /**
     * A list of `Participant` objects, one for each player that took part in the Match.
     */
    get participants() {
        return this._participants;
    }
    /**
     * A list of `Roster` objects, one for each team that played the Match.
     */
    get rosters() {
        return this._rosters;
    }
    //#endregion
    /**
     * Return the Participant object with the given ID or undefined if not found.
     * @param id ID of the player to search
     */
    getParticipantById(id) {
        return this._participants.find(p => p.id === id);
    }
    /**
     * Return the Participant object with the given name or undefined if not found.
     * @param name name of the player to search
     */
    getParticipantByName(name) {
        return this._participants.find(p => p.name === name);
    }
    /**
     * Return a list of the Participants that won this match.
     */
    getWinners() {
        return this._participants.filter(p => p.winPlace === 1);
    }
    getTelemetry(api) {
        return __awaiter(this, void 0, void 0, function* () {
            const telemetryAPI = new __1.TelemetryPubgAPI(api);
            const response = yield telemetryAPI.get(this._asset);
            const telemetry = new __1.Telemetry(response.data);
            return telemetry;
        });
    }
}
exports.Match = Match;
//# sourceMappingURL=match.js.map