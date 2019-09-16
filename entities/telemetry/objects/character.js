"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const location_1 = require("./location");
class Character {
    constructor(character) {
        this._name = character.name;
        this._teamId = character.teamId;
        this._health = character.health;
        this._location = new location_1.Location(character.location);
        this._ranking = character.ranking;
        this._accountId = character.accountId;
    }
    get name() {
        return this._name;
    }
    get teamId() {
        return this._teamId;
    }
    get health() {
        return this._health;
    }
    get location() {
        return this._location;
    }
    get ranking() {
        return this._ranking;
    }
    get accountId() {
        return this._accountId;
    }
}
exports.Character = Character;
//# sourceMappingURL=character.js.map