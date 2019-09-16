"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const season_1 = require("./season");
/* tslint:disable */
const API_RESPONSE = {
    "data": [
        {
            "type": "season",
            "id": "division.bro.official.2018-03",
            "attributes": {
                "isCurrentSeason": false,
                "isOffseason": false
            }
        },
        {
            "type": "season",
            "id": "division.bro.official.2018-04",
            "attributes": {
                "isCurrentSeason": true,
                "isOffseason": false
            }
        }
    ],
    "links": {
        "self": "https://api.playbattlegrounds.com/shards/pc-eu/seasons"
    },
    "meta": {}
};
/* tslint:enable */
describe('Season entity', () => {
    it('should initialize a list of Season from API list response', () => {
        const seasons = season_1.Season.fromList(API_RESPONSE);
        chai_1.expect(seasons).to.be.an('Array');
        chai_1.expect(seasons).to.have.length(2);
        const [s1, s2] = seasons;
        chai_1.expect(s1.id).to.eq('division.bro.official.2018-03');
        chai_1.expect(s1.isCurrentSeason).to.be.false;
        chai_1.expect(s1.isOffSeason).to.be.false;
        chai_1.expect(s2.isCurrentSeason).to.be.true;
        chai_1.expect(s2.isOffSeason).to.be.false;
    });
});
//# sourceMappingURL=season.spec.js.map