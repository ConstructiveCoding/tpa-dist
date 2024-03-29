"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const __1 = require("..");
const match_1 = require("./match");
//#region SETUP STUFF
/* tslint:disable */
const API_RESPONSE = {
    "data": {
        "type": "match",
        "id": "a6d8d8f7-a3c4-4b1c-9947-8df40c144283",
        "attributes": {
            "createdAt": "2018-04-21T22:33:20Z",
            "duration": 1892,
            "gameMode": "duo-fpp",
            "isCustomMatch": false,
            "mapName": "Desert_Main",
            "seasonState": "progress",
            "shardId": "pc-eu",
            "stats": null,
            "tags": null,
            "titleId": "bluehole-pubg"
        },
        "relationships": {
            "assets": {
                "data": [
                    {
                        "type": "asset",
                        "id": "a63b97bd-45b8-11e8-8433-0a58646e130b"
                    }
                ]
            },
            "rosters": {
                "data": [
                    {
                        "type": "roster",
                        "id": "38461e8d-379a-41ff-8fda-1efbf84847ed"
                    },
                    {
                        "type": "roster",
                        "id": "2b551a10-2256-4c98-9f82-82e115dbffec"
                    },
                    {
                        "type": "roster",
                        "id": "cd1be289-0bd8-4e9a-89a0-2217d1153c74"
                    }
                ]
            }
        },
        "links": {
            "schema": "",
            "self": "https://api.playbattlegrounds.com/shards/pc-eu/matches/a6d8d8f7-a3c4-4b1c-9947-8df40c144283"
        }
    },
    "included": [
        {
            "type": "participant",
            "id": "3ff014d0-6e81-446f-93c2-1dda7333297f",
            "attributes": {
                "actor": "",
                "shardId": "pc-eu",
                "stats": {
                    "DBNOs": 0,
                    "assists": 0,
                    "boosts": 2,
                    "damageDealt": 0,
                    "deathType": "byplayer",
                    "headshotKills": 0,
                    "heals": 6,
                    "killPlace": 39,
                    "killStreaks": 0,
                    "kills": 0,
                    "lastKillPoints": 0,
                    "lastWinPoints": 0,
                    "longestKill": 0,
                    "mostDamage": 0,
                    "name": "NixdaDieHard",
                    "playerId": "account.0125807c8de4461198c0de300092ca34",
                    "revives": 0,
                    "rideDistance": 304.687073,
                    "roadKills": 0,
                    "swimDistance": 87.17336,
                    "teamKills": 0,
                    "timeSurvived": 1881,
                    "vehicleDestroys": 0,
                    "walkDistance": 4652.759,
                    "weaponsAcquired": 0,
                    "winPlace": 2
                }
            }
        },
        {
            "type": "roster",
            "id": "38461e8d-379a-41ff-8fda-1efbf84847ed",
            "attributes": {
                "shardId": "pc-eu",
                "stats": {
                    "rank": 2,
                    "teamId": 30
                },
                "won": "false"
            },
            "relationships": {
                "participants": {
                    "data": [
                        {
                            "type": "participant",
                            "id": "3ff014d0-6e81-446f-93c2-1dda7333297f"
                        },
                        {
                            "type": "participant",
                            "id": "ab84ed56-da51-4f9e-b649-f8a7f37604e4"
                        }
                    ]
                },
                "team": {
                    "data": null
                }
            }
        },
        {
            "type": "asset",
            "id": "a63b97bd-45b8-11e8-8433-0a58646e130b",
            "attributes": {
                "URL": "https://telemetry-cdn.playbattlegrounds.com/bluehole-pubg/pc-eu/2018/04/21/23/06/a63b97bd-45b8-11e8-8433-0a58646e130b-telemetry.json",
                "createdAt": "2018-04-21T23:06:40Z",
                "description": "",
                "name": "telemetry"
            }
        },
        {
            "type": "participant",
            "id": "99f81c8b-edbd-452c-b8bb-666270b370d3",
            "attributes": {
                "actor": "",
                "shardId": "pc-eu",
                "stats": {
                    "DBNOs": 0,
                    "assists": 0,
                    "boosts": 3,
                    "damageDealt": 98.22,
                    "deathType": "alive",
                    "headshotKills": 0,
                    "heals": 3,
                    "killPlace": 15,
                    "killPoints": 1039,
                    "killPointsDelta": 36.707058,
                    "killStreaks": 0,
                    "kills": 2,
                    "lastKillPoints": 0,
                    "lastWinPoints": 0,
                    "longestKill": 46,
                    "mostDamage": 0,
                    "name": "zaku6652",
                    "playerId": "account.cda9cb29e8ce4146a9ad46d5a0da508b",
                    "revives": 0,
                    "rideDistance": 0,
                    "roadKills": 0,
                    "swimDistance": 0,
                    "teamKills": 0,
                    "timeSurvived": 1892,
                    "vehicleDestroys": 0,
                    "walkDistance": 3566.60132,
                    "weaponsAcquired": 0,
                    "winPlace": 1,
                    "winPoints": 1121,
                    "winPointsDelta": 140.555817
                }
            }
        },
        {
            "type": "participant",
            "id": "ab84ed56-da51-4f9e-b649-f8a7f37604e4",
            "attributes": {
                "actor": "",
                "shardId": "pc-eu",
                "stats": {
                    "DBNOs": 1,
                    "assists": 0,
                    "boosts": 3,
                    "damageDealt": 99.99999,
                    "deathType": "byplayer",
                    "headshotKills": 0,
                    "heals": 4,
                    "killPlace": 38,
                    "killPoints": 1232,
                    "killPointsDelta": 6.263594,
                    "killStreaks": 0,
                    "kills": 0,
                    "lastKillPoints": 0,
                    "lastWinPoints": 0,
                    "longestKill": 0,
                    "mostDamage": 0,
                    "name": "Hartensteiner",
                    "playerId": "account.0ad732bf9c344743baae060ca139df03",
                    "revives": 0,
                    "rideDistance": 306.4264,
                    "roadKills": 0,
                    "swimDistance": 0,
                    "teamKills": 0,
                    "timeSurvived": 1892,
                    "vehicleDestroys": 0,
                    "walkDistance": 4455.29053,
                    "weaponsAcquired": 0,
                    "winPlace": 2,
                    "winPoints": 1383,
                    "winPointsDelta": 36.43944
                }
            }
        },
        {
            "type": "participant",
            "id": "5f470019-5b98-4f8f-9603-eb312c4df5a1",
            "attributes": {
                "actor": "",
                "shardId": "pc-eu",
                "stats": {
                    "DBNOs": 0,
                    "assists": 0,
                    "boosts": 3,
                    "damageDealt": 69.22771,
                    "deathType": "byplayer",
                    "headshotKills": 0,
                    "heals": 2,
                    "killPlace": 24,
                    "killPoints": 1314,
                    "killPointsDelta": 13.5154753,
                    "killStreaks": 0,
                    "kills": 1,
                    "lastKillPoints": 0,
                    "lastWinPoints": 0,
                    "longestKill": 20,
                    "mostDamage": 0,
                    "name": "saiitek",
                    "playerId": "account.09293a024365480594d1b745884d8d5c",
                    "revives": 1,
                    "rideDistance": 0,
                    "roadKills": 0,
                    "swimDistance": 0,
                    "teamKills": 0,
                    "timeSurvived": 1831,
                    "vehicleDestroys": 0,
                    "walkDistance": 3744.01758,
                    "weaponsAcquired": 0,
                    "winPlace": 4,
                    "winPoints": 1466,
                    "winPointsDelta": 19.91042
                }
            }
        },
        {
            "type": "roster",
            "id": "2b551a10-2256-4c98-9f82-82e115dbffec",
            "attributes": {
                "shardId": "pc-eu",
                "stats": {
                    "rank": 1,
                    "teamId": 12
                },
                "won": "true"
            },
            "relationships": {
                "participants": {
                    "data": [
                        {
                            "type": "participant",
                            "id": "5f1d13e3-a837-498a-b354-ec25976a65f0"
                        },
                        {
                            "type": "participant",
                            "id": "99f81c8b-edbd-452c-b8bb-666270b370d3"
                        }
                    ]
                },
                "team": {
                    "data": null
                }
            }
        },
        {
            "type": "participant",
            "id": "2dab6c73-eb40-4658-ade5-0d177adeba66",
            "attributes": {
                "actor": "",
                "shardId": "pc-eu",
                "stats": {
                    "DBNOs": 2,
                    "assists": 0,
                    "boosts": 1,
                    "damageDealt": 213.859985,
                    "deathType": "byplayer",
                    "headshotKills": 0,
                    "heals": 5,
                    "killPlace": 8,
                    "killPoints": 1102,
                    "killPointsDelta": 45.4683075,
                    "killStreaks": 0,
                    "kills": 3,
                    "lastKillPoints": 0,
                    "lastWinPoints": 0,
                    "longestKill": 289,
                    "mostDamage": 0,
                    "name": "Robination",
                    "playerId": "account.92c94880c9a146c1b60691ff9492a2fd",
                    "revives": 0,
                    "rideDistance": 2138.24683,
                    "roadKills": 0,
                    "swimDistance": 0,
                    "teamKills": 0,
                    "timeSurvived": 1831,
                    "vehicleDestroys": 0,
                    "walkDistance": 3120.68,
                    "weaponsAcquired": 0,
                    "winPlace": 4,
                    "winPoints": 1209,
                    "winPointsDelta": 34.0894928
                }
            }
        },
        {
            "type": "participant",
            "id": "5f1d13e3-a837-498a-b354-ec25976a65f0",
            "attributes": {
                "actor": "",
                "shardId": "pc-eu",
                "stats": {
                    "DBNOs": 2,
                    "assists": 3,
                    "boosts": 4,
                    "damageDealt": 376.501,
                    "deathType": "alive",
                    "headshotKills": 1,
                    "heals": 1,
                    "killPlace": 16,
                    "killPoints": 1077,
                    "killPointsDelta": 33.6085434,
                    "killStreaks": 0,
                    "kills": 2,
                    "lastKillPoints": 0,
                    "lastWinPoints": 0,
                    "longestKill": 19,
                    "mostDamage": 0,
                    "name": "martinsileno",
                    "playerId": "account.a540a32a49784025939a975b45e86bfe",
                    "revives": 0,
                    "rideDistance": 0,
                    "roadKills": 0,
                    "swimDistance": 0,
                    "teamKills": 0,
                    "timeSurvived": 1892,
                    "vehicleDestroys": 0,
                    "walkDistance": 3915.62,
                    "weaponsAcquired": 0,
                    "winPlace": 1,
                    "winPoints": 1114,
                    "winPointsDelta": 78.83802
                }
            }
        },
        {
            "type": "roster",
            "id": "cd1be289-0bd8-4e9a-89a0-2217d1153c74",
            "attributes": {
                "shardId": "pc-eu",
                "stats": {
                    "rank": 4,
                    "teamId": 5
                },
                "won": "false"
            },
            "relationships": {
                "participants": {
                    "data": [
                        {
                            "type": "participant",
                            "id": "2dab6c73-eb40-4658-ade5-0d177adeba66"
                        },
                        {
                            "type": "participant",
                            "id": "5f470019-5b98-4f8f-9603-eb312c4df5a1"
                        }
                    ]
                },
                "team": {
                    "data": null
                }
            }
        }
    ],
    "links": {
        "self": "https://api.playbattlegrounds.com/shards/pc-na/matches/a6d8d8f7-a3c4-4b1c-9947-8df40c144283"
    },
    "meta": {}
};
const participantNix = {
    id: '3ff014d0-6e81-446f-93c2-1dda7333297f',
    DBNOs: 0,
    assists: 0,
    boosts: 2,
    damageDealt: 0,
    deathType: __1.DeathType.BY_PLAYER,
    headshotKills: 0,
    heals: 6,
    killPlace: 39,
    killStreaks: 0,
    kills: 0,
    lastKillPoints: 0,
    lastWinPoints: 0,
    longestKill: 0,
    mostDamage: 0,
    name: 'NixdaDieHard',
    playerId: 'account.0125807c8de4461198c0de300092ca34',
    revives: 0,
    rideDistance: 304.687073,
    roadKills: 0,
    teamKills: 0,
    swimDistance: 87.17336,
    timeSurvived: 1881,
    vehicleDestroys: 0,
    walkDistance: 4652.759,
    weaponsAcquired: 0,
    winPlace: 2
};
const participantZakuro = {
    id: '99f81c8b-edbd-452c-b8bb-666270b370d3',
    DBNOs: 0,
    assists: 0,
    boosts: 3,
    damageDealt: 98.22,
    deathType: __1.DeathType.ALIVE,
    headshotKills: 0,
    heals: 3,
    killPlace: 15,
    killPoints: 1039,
    killPointsDelta: 36.707058,
    killStreaks: 0,
    kills: 2,
    lastKillPoints: 0,
    lastWinPoints: 0,
    longestKill: 46,
    mostDamage: 0,
    name: 'zaku6652',
    playerId: 'account.cda9cb29e8ce4146a9ad46d5a0da508b',
    revives: 0,
    rideDistance: 0,
    roadKills: 0,
    swimDistance: 0,
    teamKills: 0,
    timeSurvived: 1892,
    vehicleDestroys: 0,
    walkDistance: 3566.60132,
    weaponsAcquired: 0,
    winPlace: 1,
    winPoints: 1121,
    winPointsDelta: 140.555817,
};
const participantHart = {
    id: 'ab84ed56-da51-4f9e-b649-f8a7f37604e4',
    DBNOs: 1,
    assists: 0,
    boosts: 3,
    damageDealt: 99.99999,
    deathType: __1.DeathType.BY_PLAYER,
    headshotKills: 0,
    heals: 4,
    killPlace: 38,
    killPoints: 1232,
    killPointsDelta: 6.263594,
    killStreaks: 0,
    kills: 0,
    lastKillPoints: 0,
    lastWinPoints: 0,
    longestKill: 0,
    mostDamage: 0,
    name: 'Hartensteiner',
    playerId: 'account.0ad732bf9c344743baae060ca139df03',
    revives: 0,
    rideDistance: 306.4264,
    roadKills: 0,
    swimDistance: 0,
    teamKills: 0,
    timeSurvived: 1892,
    vehicleDestroys: 0,
    walkDistance: 4455.29053,
    weaponsAcquired: 0,
    winPlace: 2,
    winPoints: 1383,
    winPointsDelta: 36.43944,
};
const participantSaiitek = {
    id: '5f470019-5b98-4f8f-9603-eb312c4df5a1',
    DBNOs: 0,
    assists: 0,
    boosts: 3,
    damageDealt: 69.22771,
    deathType: __1.DeathType.BY_PLAYER,
    headshotKills: 0,
    heals: 2,
    killPlace: 24,
    killPoints: 1314,
    killPointsDelta: 13.5154753,
    killStreaks: 0,
    kills: 1,
    lastKillPoints: 0,
    lastWinPoints: 0,
    longestKill: 20,
    mostDamage: 0,
    name: 'saiitek',
    playerId: 'account.09293a024365480594d1b745884d8d5c',
    revives: 1,
    rideDistance: 0,
    roadKills: 0,
    swimDistance: 0,
    teamKills: 0,
    timeSurvived: 1831,
    vehicleDestroys: 0,
    walkDistance: 3744.01758,
    weaponsAcquired: 0,
    winPlace: 4,
    winPoints: 1466,
    winPointsDelta: 19.91042,
};
const participantRobi = {
    id: '2dab6c73-eb40-4658-ade5-0d177adeba66',
    DBNOs: 2,
    assists: 0,
    boosts: 1,
    damageDealt: 213.859985,
    deathType: __1.DeathType.BY_PLAYER,
    headshotKills: 0,
    heals: 5,
    killPlace: 8,
    killPoints: 1102,
    killPointsDelta: 45.4683075,
    killStreaks: 0,
    kills: 3,
    lastKillPoints: 0,
    lastWinPoints: 0,
    longestKill: 289,
    mostDamage: 0,
    name: 'Robination',
    playerId: 'account.92c94880c9a146c1b60691ff9492a2fd',
    revives: 0,
    rideDistance: 2138.24683,
    roadKills: 0,
    swimDistance: 0,
    teamKills: 0,
    timeSurvived: 1831,
    vehicleDestroys: 0,
    walkDistance: 3120.68,
    weaponsAcquired: 0,
    winPlace: 4,
    winPoints: 1209,
    winPointsDelta: 34.0894928,
};
const participantMartin = {
    id: '5f1d13e3-a837-498a-b354-ec25976a65f0',
    DBNOs: 2,
    assists: 3,
    boosts: 4,
    damageDealt: 376.501,
    deathType: __1.DeathType.ALIVE,
    headshotKills: 1,
    heals: 1,
    killPlace: 16,
    killPoints: 1077,
    killPointsDelta: 33.6085434,
    killStreaks: 0,
    kills: 2,
    lastKillPoints: 0,
    lastWinPoints: 0,
    longestKill: 19,
    mostDamage: 0,
    name: 'martinsileno',
    playerId: 'account.a540a32a49784025939a975b45e86bfe',
    revives: 0,
    rideDistance: 0,
    roadKills: 0,
    swimDistance: 0,
    teamKills: 0,
    timeSurvived: 1892,
    vehicleDestroys: 0,
    walkDistance: 3915.62,
    weaponsAcquired: 0,
    winPlace: 1,
    winPoints: 1114,
    winPointsDelta: 78.83802,
};
//#endregion
describe('Match entity', () => {
    function compareParticipant(p, expected) {
        if (!p) {
            chai_1.expect.fail();
            return;
        }
        chai_1.expect(p.id).to.equal(expected.id);
        chai_1.expect(p.DBNOs).to.equal(expected.DBNOs);
        chai_1.expect(p.assists).to.equal(expected.assists);
        chai_1.expect(p.boosts).to.equal(expected.boosts);
        chai_1.expect(p.damageDealt).to.equal(expected.damageDealt);
        chai_1.expect(p.deathType).to.equal(expected.deathType);
        chai_1.expect(p.headshotKills).to.equal(expected.headshotKills);
        chai_1.expect(p.heals).to.equal(expected.heals);
        chai_1.expect(p.killPlace).to.equal(expected.killPlace);
        chai_1.expect(p.killPoints).to.equal(expected.killPoints);
        chai_1.expect(p.killPointsDelta).to.equal(expected.killPointsDelta);
        chai_1.expect(p.killStreaks).to.equal(expected.killStreaks);
        chai_1.expect(p.kills).to.equal(expected.kills);
        chai_1.expect(p.lastKillPoints).to.equal(expected.lastKillPoints);
        chai_1.expect(p.lastWinPoints).to.equal(expected.lastWinPoints);
        chai_1.expect(p.longestKill).to.equal(expected.longestKill);
        chai_1.expect(p.mostDamage).to.equal(expected.mostDamage);
        chai_1.expect(p.name).to.equal(expected.name);
        chai_1.expect(p.playerId).to.equal(expected.playerId);
        chai_1.expect(p.revives).to.equal(expected.revives);
        chai_1.expect(p.rideDistance).to.equal(expected.rideDistance);
        chai_1.expect(p.roadKills).to.equal(expected.roadKills);
        chai_1.expect(p.swimDistance).to.equal(expected.swimDistance);
        chai_1.expect(p.teamKills).to.equal(expected.teamKills);
        chai_1.expect(p.timeSurvived).to.equal(expected.timeSurvived);
        chai_1.expect(p.vehicleDestroys).to.equal(expected.vehicleDestroys);
        chai_1.expect(p.walkDistance).to.equal(expected.walkDistance);
        chai_1.expect(p.weaponsAcquired).to.equal(expected.weaponsAcquired);
        chai_1.expect(p.winPlace).to.equal(expected.winPlace);
        chai_1.expect(p.winPoints).to.equal(expected.winPoints);
        chai_1.expect(p.winPointsDelta).to.equal(expected.winPointsDelta);
    }
    it('should initialize Match from API response', () => {
        const match = match_1.Match.fromDetail(API_RESPONSE);
        chai_1.expect(match.id).to.equal('a6d8d8f7-a3c4-4b1c-9947-8df40c144283');
        chai_1.expect(match.dateCreated).to.deep.equal(new Date('2018-04-21T22:33:20Z'));
        chai_1.expect(match.duration).to.equal(1892);
        chai_1.expect(match.gameMode).to.equal(__1.GameMode.DUO_FPP);
        chai_1.expect(match.isCustomMatch).to.be.false;
        chai_1.expect(match.map).to.equal(__1.MapName.DESERT_MAIN);
        chai_1.expect(match.patchVersion).to.be.an('undefined');
        chai_1.expect(match.seasonState).to.equal(__1.SeasonState.PROGRESS);
        chai_1.expect(match.shardId).to.equal(__1.PlatformRegion.PC_EU);
    });
    it('should initialize Participant list from API response', () => {
        const match = match_1.Match.fromDetail(API_RESPONSE);
        const participants = match.participants;
        chai_1.expect(participants).to.have.length(6);
        const [nix, zakuro, hart, saiitek, robi, martin] = participants;
        compareParticipant(nix, participantNix);
        compareParticipant(zakuro, participantZakuro);
        compareParticipant(hart, participantHart);
        compareParticipant(saiitek, participantSaiitek);
        compareParticipant(robi, participantRobi);
        compareParticipant(martin, participantMartin);
    });
    it('should initialize Roster list from API response', () => {
        const match = match_1.Match.fromDetail(API_RESPONSE);
        const rosters = match.rosters;
        chai_1.expect(rosters).to.have.length(3);
        const [r1, r2, r3] = rosters;
        chai_1.expect(r1.id).to.equal('38461e8d-379a-41ff-8fda-1efbf84847ed');
        chai_1.expect(r1.hasWon).to.be.false;
        chai_1.expect(r1.rank).to.equal(2);
        chai_1.expect(r1.teamId).to.equal(30);
        chai_1.expect(r1.participants).to.have.length(2);
        const [nix, hart] = r1.participants;
        compareParticipant(nix, participantNix);
        compareParticipant(hart, participantHart);
        chai_1.expect(r2.id).to.equal('2b551a10-2256-4c98-9f82-82e115dbffec');
        chai_1.expect(r2.hasWon).to.be.true;
        chai_1.expect(r2.rank).to.equal(1);
        chai_1.expect(r2.teamId).to.equal(12);
        const [martin, zakuro] = r2.participants;
        compareParticipant(martin, participantMartin);
        compareParticipant(zakuro, participantZakuro);
        chai_1.expect(r3.id).to.equal('cd1be289-0bd8-4e9a-89a0-2217d1153c74');
        chai_1.expect(r3.hasWon).to.be.false;
        chai_1.expect(r3.rank).to.equal(4);
        chai_1.expect(r3.teamId).to.equal(5);
        const [robi, saiitek] = r3.participants;
        compareParticipant(robi, participantRobi);
        compareParticipant(saiitek, participantSaiitek);
    });
    it('should initialize Asset from API response', () => {
        const match = match_1.Match.fromDetail(API_RESPONSE);
        chai_1.expect(match.asset).to.not.be.undefined;
        const asset = match.asset;
        chai_1.expect(asset.id).to.equal('a63b97bd-45b8-11e8-8433-0a58646e130b');
        /* tslint:disable-next-line:max-line-length */
        chai_1.expect(asset.url).to.equal('https://telemetry-cdn.playbattlegrounds.com/bluehole-pubg/pc-eu/2018/04/21/23/06/a63b97bd-45b8-11e8-8433-0a58646e130b-telemetry.json');
        chai_1.expect(asset.dateCreated).to.deep.equal(new Date('2018-04-21T23:06:40Z'));
    });
    it('should find player by ID', () => {
        const match = match_1.Match.fromDetail(API_RESPONSE);
        const participant = match.getParticipantById('99f81c8b-edbd-452c-b8bb-666270b370d3');
        compareParticipant(participant, participantZakuro);
    });
    it('should find player by name', () => {
        const match = match_1.Match.fromDetail(API_RESPONSE);
        const participant = match.getParticipantByName('martinsileno');
        compareParticipant(participant, participantMartin);
    });
    it('should return undefined if trying to find player by non-existing ID', () => {
        const match = match_1.Match.fromDetail(API_RESPONSE);
        const participant = match.getParticipantById('123456');
        chai_1.expect(participant).to.be.undefined;
    });
    it('should return undefined if trying to find player by non-existing name', () => {
        const match = match_1.Match.fromDetail(API_RESPONSE);
        const participant = match.getParticipantByName('pippo');
        chai_1.expect(participant).to.be.undefined;
    });
    it('should find match winner(s)', () => {
        const match = match_1.Match.fromDetail(API_RESPONSE);
        const winners = match.getWinners();
        chai_1.expect(winners).to.have.length(2);
        compareParticipant(winners[0], participantZakuro);
        compareParticipant(winners[1], participantMartin);
    });
});
//# sourceMappingURL=match.spec.js.map