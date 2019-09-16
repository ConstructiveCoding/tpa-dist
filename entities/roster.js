"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Roster {
    constructor(roster) {
        this._id = roster.id;
        this._hasWon = roster.attributes.won === 'true';
        this._rank = roster.attributes.stats.rank;
        this._teamId = roster.attributes.stats.teamId;
        this._participants = [];
    }
    get id() {
        return this._id;
    }
    get hasWon() {
        return this._hasWon;
    }
    get rank() {
        return this._rank;
    }
    get teamId() {
        return this._teamId;
    }
    get participants() {
        return this._participants;
    }
}
exports.Roster = Roster;
//# sourceMappingURL=roster.js.map