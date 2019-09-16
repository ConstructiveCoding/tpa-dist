"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const __1 = require("../..");
//#region setup
/* tslint:disable */
const API_RESPONSE = [
    {
        "MatchId": "match.bro.official.2018-04.eu.duo-fpp.2018.04.27.8c1c8a56-4104-46ef-8aec-5e012b041574",
        "PingQuality": "low",
        "SeasonState": "progress",
        "_D": "2018-04-27T09:14:41.7057369+00:00",
        "_T": "LogMatchDefinition"
    },
    {
        "accountId": "account.b2d6f13944a2487593dd828ed2794231",
        "common": {
            "isGame": 0
        },
        "_D": "2018-04-27T09:13:32.124Z",
        "_T": "LogPlayerLogin"
    },
    {
        "character": {
            "name": "DjaYaithc",
            "teamId": 2,
            "health": 100,
            "location": {
                "x": 798044,
                "y": 20348.67578125,
                "z": 547.231201171875
            },
            "ranking": 0,
            "accountId": "account.b2d6f13944a2487593dd828ed2794231"
        },
        "common": {
            "isGame": 0
        },
        "_D": "2018-04-27T09:13:32.141Z",
        "_T": "LogPlayerCreate"
    },
    {
        "character": {
            "name": "Cloudity",
            "teamId": 2,
            "health": 69.99652862548828,
            "location": {
                "x": 727311.5625,
                "y": 438198.625,
                "z": 2622.329833984375
            },
            "ranking": 0,
            "accountId": "account.65c28d3e23fb471eb925900590e91b67"
        },
        "elapsedTime": 626,
        "numAlivePlayers": 49,
        "vehicle": {
            "vehicleType": "",
            "vehicleId": "",
            "healthPercent": 0,
            "feulPercent": 0
        },
        "common": {
            "isGame": 1.5
        },
        "_D": "2018-04-27T09:25:22.997Z",
        "_T": "LogPlayerPosition"
    },
    {
        "attackId": 587202601,
        "attacker": {
            "name": "GRaBoNeR",
            "teamId": 25,
            "health": 66.3600082397461,
            "location": {
                "x": 543591.75,
                "y": 241830.96875,
                "z": 181.67999267578125
            },
            "ranking": 0,
            "accountId": "account.8544765d5ab34163ba33dec0ebf1ae72"
        },
        "attackType": "Weapon",
        "fireWeaponStackCount": 0,
        "weapon": {
            "itemId": "Item_Weapon_HK416_C",
            "stackCount": 1,
            "category": "Weapon",
            "subCategory": "Main",
            "attachedItems": [
                "Item_Attach_Weapon_Lower_Foregrip_C",
                "Item_Attach_Weapon_Upper_Aimpoint_C",
                "Item_Attach_Weapon_Magazine_Extended_Large_C"
            ]
        },
        "vehicle": {
            "vehicleType": "",
            "vehicleId": "",
            "healthPercent": 0,
            "feulPercent": 0
        },
        "common": {
            "isGame": 1.5
        },
        "_D": "2018-04-27T09:25:29.504Z",
        "_T": "LogPlayerAttack"
    },
    {
        "character": {
            "name": "L-wood",
            "teamId": 19,
            "health": 98.50699615478516,
            "location": {
                "x": 377094.0625,
                "y": 127431.7265625,
                "z": 91.87999725341797
            },
            "ranking": 0,
            "accountId": "account.5e23448e38dd4cc19e42f0dea56e851c"
        },
        "item": {
            "itemId": "Item_Attach_Weapon_Lower_AngledForeGrip_C",
            "stackCount": 1,
            "category": "Attachment",
            "subCategory": "None",
            "attachedItems": []
        },
        "common": {
            "isGame": 1.5
        },
        "_D": "2018-04-27T09:25:30.122Z",
        "_T": "LogItemPickup"
    },
    {
        "character": {
            "name": "FatihDMRK7",
            "teamId": 18,
            "health": 75,
            "location": {
                "x": 354083.0625,
                "y": 407381.5,
                "z": 4530.85986328125
            },
            "ranking": 0,
            "accountId": "account.d721c3a5a62849a8a29b0e9c18c5c93a"
        },
        "item": {
            "itemId": "Item_Weapon_Grenade_C",
            "stackCount": 1,
            "category": "Equipment",
            "subCategory": "Throwable",
            "attachedItems": []
        },
        "common": {
            "isGame": 1.5
        },
        "_D": "2018-04-27T09:25:30.172Z",
        "_T": "LogItemEquip"
    },
    {
        "character": {
            "name": "Nerison",
            "teamId": 40,
            "health": 100,
            "location": {
                "x": 351960.15625,
                "y": 311851.625,
                "z": 576.9199829101562
            },
            "ranking": 0,
            "accountId": "account.65b981cf631d451187de4095ec3fa068"
        },
        "item": {
            "itemId": "Item_Weapon_SmokeBomb_C",
            "stackCount": 1,
            "category": "Equipment",
            "subCategory": "Throwable",
            "attachedItems": []
        },
        "common": {
            "isGame": 1.5
        },
        "_D": "2018-04-27T09:25:36.181Z",
        "_T": "LogItemUnequip"
    },
    {
        "character": {
            "name": "Darkeratom",
            "teamId": 19,
            "health": 80.63734436035156,
            "location": {
                "x": 377161.125,
                "y": 127640.078125,
                "z": 212.73568725585938
            },
            "ranking": 0,
            "accountId": "account.28f8241e7c5842d980a88591e3f2a688"
        },
        "vehicle": {
            "vehicleType": "WheeledVehicle",
            "vehicleId": "BP_Motorbike_04_C",
            "healthPercent": 100,
            "feulPercent": 36.70619201660156
        },
        "seatIndex": 2,
        "common": {
            "isGame": 1.5
        },
        "_D": "2018-04-27T09:25:36.227Z",
        "_T": "LogVehicleRide"
    },
    {
        "gameState": {
            "elapsedTime": 10,
            "numAliveTeams": 49,
            "numJoinPlayers": 99,
            "numStartPlayers": 98,
            "numAlivePlayers": 98,
            "safetyZonePosition": {
                "x": 406387.5,
                "y": 406387.5,
                "z": 0
            },
            "safetyZoneRadius": 579718.6875,
            "poisonGasWarningPosition": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "poisonGasWarningRadius": 0,
            "redZonePosition": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "redZoneRadius": 0
        },
        "common": {
            "isGame": 0.10000000149011612
        },
        "_D": "2018-04-27T09:14:52.262Z",
        "_T": "LogGameStatePeriodic"
    },
    {
        "character": {
            "name": "MukpoBa3ep",
            "teamId": 23,
            "health": 100,
            "location": {
                "x": 128699.5078125,
                "y": 617187.75,
                "z": 150088
            },
            "ranking": 0,
            "accountId": "account.aa4bbc13b0064871b40e81de7980cbc6"
        },
        "vehicle": {
            "vehicleType": "TransportAircraft",
            "vehicleId": "DummyTransportAircraft_C",
            "healthPercent": 0,
            "feulPercent": 0
        },
        "rideDistance": 49.8331298828125,
        "seatIndex": 0,
        "common": {
            "isGame": 0.10000000149011612
        },
        "_D": "2018-04-27T09:14:58.687Z",
        "_T": "LogVehicleLeave"
    },
    {
        "attackId": 1073741859,
        "attacker": {
            "name": "sami_70",
            "teamId": 44,
            "health": 0,
            "location": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "ranking": 0,
            "accountId": "account.bdfbbf10e33f4e33bd5967fa6a8af35d"
        },
        "victim": {
            "name": "ogka121",
            "teamId": 50,
            "health": 100,
            "location": {
                "x": 445670.75,
                "y": 623350.75,
                "z": 985.6199951171875
            },
            "ranking": 0,
            "accountId": "account.54b42bdadae640058f931a1b1fb66793"
        },
        "damageTypeCategory": "Damage_Gun",
        "damageReason": "HeadShot",
        "damage": 100,
        "damageCauserName": "WeapM16A4_C",
        "common": {
            "isGame": 0.10000000149011612
        },
        "_D": "2018-04-27T09:16:19.393Z",
        "_T": "LogPlayerTakeDamage"
    },
    {
        "accountId": "account.4bc589020b7e430ca5a100281c0985f4",
        "common": {
            "isGame": 0.10000000149011612
        },
        "_D": "2018-04-27T09:16:42.764Z",
        "_T": "LogPlayerLogout"
    },
    {
        "character": {
            "name": "TIKIVITUS",
            "teamId": 39,
            "health": 95.58048248291016,
            "location": {
                "x": 240817.59375,
                "y": 527005.4375,
                "z": 861.25
            },
            "ranking": 0,
            "accountId": "account.d5bfd6c4f4d64eb1bf5baca4957b7351"
        },
        "parentItem": {
            "itemId": "Item_Weapon_M16A4_C",
            "stackCount": 1,
            "category": "Weapon",
            "subCategory": "Main",
            "attachedItems": []
        },
        "childItem": {
            "itemId": "Item_Attach_Weapon_Upper_ACOG_01_C",
            "stackCount": 1,
            "category": "Attachment",
            "subCategory": "None",
            "attachedItems": []
        },
        "common": {
            "isGame": 1
        },
        "_D": "2018-04-27T09:16:44.516Z",
        "_T": "LogItemAttach"
    },
    {
        "character": {
            "name": "Seniorhydra",
            "teamId": 21,
            "health": 100,
            "location": {
                "x": 600957.6875,
                "y": 478768.0625,
                "z": 394.97998046875
            },
            "ranking": 0,
            "accountId": "account.af73dcdae86947f8ae07b46c7a389102"
        },
        "item": {
            "itemId": "Item_Armor_E_01_Lv1_C",
            "stackCount": 1,
            "category": "Equipment",
            "subCategory": "Vest",
            "attachedItems": []
        },
        "common": {
            "isGame": 1
        },
        "_D": "2018-04-27T09:16:48.479Z",
        "_T": "LogItemDrop"
    },
    {
        "attackId": 503316482,
        "killer": {
            "name": "CryForHonor",
            "teamId": 17,
            "health": 99.14064025878906,
            "location": {
                "x": 708153.5,
                "y": 335354.1875,
                "z": 144.19000244140625
            },
            "ranking": 0,
            "accountId": "account.6bec6292311f40138a20bac250b0f104"
        },
        "victim": {
            "name": "DevriAlem19",
            "teamId": 24,
            "health": 0,
            "location": {
                "x": 708048.625,
                "y": 335511.28125,
                "z": 116.18999481201172
            },
            "ranking": 0,
            "accountId": "account.767af0c6351a42f5a5eea8ccb0ab1062"
        },
        "damageReason": "TorsoShot",
        "damageTypeCategory": "Damage_Gun",
        "damageCauserName": "WeapBerreta686_C",
        "distance": 190.9481964111328,
        "common": {
            "isGame": 1
        },
        "_D": "2018-04-27T09:16:51.264Z",
        "_T": "LogPlayerKill"
    },
    {
        "character": {
            "name": "BossOfThisGymm",
            "teamId": 22,
            "health": 100,
            "location": {
                "x": 370493.1875,
                "y": 414151.4375,
                "z": 4240.14990234375
            },
            "ranking": 0,
            "accountId": "account.7707ddf7e5f84d1e875390c2951c6986"
        },
        "parentItem": {
            "itemId": "Item_Weapon_M16A4_C",
            "stackCount": 1,
            "category": "Weapon",
            "subCategory": "Main",
            "attachedItems": [
                "Item_Attach_Weapon_Upper_ACOG_01_C"
            ]
        },
        "childItem": {
            "itemId": "Item_Attach_Weapon_Upper_ACOG_01_C",
            "stackCount": 1,
            "category": "Attachment",
            "subCategory": "None",
            "attachedItems": []
        },
        "common": {
            "isGame": 1
        },
        "_D": "2018-04-27T09:16:59.889Z",
        "_T": "LogItemDetach"
    },
    {
        "character": {
            "name": "Tulen99",
            "teamId": 16,
            "health": 75,
            "location": {
                "x": 627868.6875,
                "y": 378629.59375,
                "z": 3197.099853515625
            },
            "ranking": 0,
            "accountId": "account.01036a3b37094fcf907a5f158dacb8b1"
        },
        "item": {
            "itemId": "Item_Heal_FirstAid_C",
            "stackCount": 1,
            "category": "Use",
            "subCategory": "Heal",
            "attachedItems": []
        },
        "common": {
            "isGame": 1
        },
        "_D": "2018-04-27T09:17:16.909Z",
        "_T": "LogItemUse"
    },
    {
        "itemPackage": {
            "itemPackageId": "Carapackage_RedBox_C",
            "location": {
                "x": 453071.46875,
                "y": 406132.8125,
                "z": 30000
            },
            "items": [
                {
                    "itemId": "Item_Weapon_M249_C",
                    "stackCount": 1,
                    "category": "Weapon",
                    "subCategory": "Main",
                    "attachedItems": []
                },
                {
                    "itemId": "Item_Ammo_556mm_C",
                    "stackCount": 100,
                    "category": "Ammunition",
                    "subCategory": "None",
                    "attachedItems": []
                },
                {
                    "itemId": "Item_Attach_Weapon_Upper_ACOG_01_C",
                    "stackCount": 1,
                    "category": "Attachment",
                    "subCategory": "None",
                    "attachedItems": []
                },
                {
                    "itemId": "Item_Back_C_01_Lv3_C",
                    "stackCount": 1,
                    "category": "Equipment",
                    "subCategory": "Backpack",
                    "attachedItems": []
                }
            ]
        },
        "common": {
            "isGame": 1
        },
        "_D": "2018-04-27T09:19:29.226Z",
        "_T": "LogCarePackageSpawn"
    },
    {
        "attackId": 294,
        "attacker": {
            "name": "",
            "teamId": 0,
            "health": 0,
            "location": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "ranking": 0,
            "accountId": ""
        },
        "vehicle": {
            "vehicleType": "WheeledVehicle",
            "vehicleId": "Buggy_A_02_C",
            "healthPercent": 0,
            "feulPercent": 44.3910026550293
        },
        "damageTypeCategory": "Damage_Explosion_RedZone",
        "damageCauserName": "RedZoneBomb_C",
        "distance": -1,
        "common": {
            "isGame": 1
        },
        "_D": "2018-04-27T09:19:52.791Z",
        "_T": "LogVehicleDestroy"
    },
    {
        "itemPackage": {
            "itemPackageId": "Carapackage_RedBox_C",
            "location": {
                "x": 533608.8125,
                "y": 423805.28125,
                "z": 2635.792724609375
            },
            "items": [
                {
                    "itemId": "Item_Weapon_Mk14_C",
                    "stackCount": 1,
                    "category": "Weapon",
                    "subCategory": "Main",
                    "attachedItems": []
                },
                {
                    "itemId": "Item_Ammo_762mm_C",
                    "stackCount": 30,
                    "category": "Ammunition",
                    "subCategory": "None",
                    "attachedItems": []
                },
                {
                    "itemId": "Item_Ammo_762mm_C",
                    "stackCount": 30,
                    "category": "Ammunition",
                    "subCategory": "None",
                    "attachedItems": []
                },
                {
                    "itemId": "Item_Attach_Weapon_Stock_AR_Composite_C",
                    "stackCount": 1,
                    "category": "Attachment",
                    "subCategory": "None",
                    "attachedItems": []
                },
                {
                    "itemId": "Item_Armor_C_01_Lv3_C",
                    "stackCount": 1,
                    "category": "Equipment",
                    "subCategory": "Vest",
                    "attachedItems": []
                }
            ]
        },
        "common": {
            "isGame": 3
        },
        "_D": "2018-04-27T09:33:50.684Z",
        "_T": "LogCarePackageLand"
    },
    {
        "attackId": 285213655,
        "attacker": {
            "name": "just9n",
            "teamId": 7,
            "health": 0,
            "location": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "ranking": 0,
            "accountId": "account.c9c08c8befe54788ad28f86ad5f03374"
        },
        "victim": {
            "name": "friday_blunt",
            "teamId": 8,
            "health": 41.18181610107422,
            "location": {
                "x": 250741.4375,
                "y": 175829.65625,
                "z": 1520.4000244140625
            },
            "ranking": 0,
            "accountId": "account.f94eac9c507d43bfaef65a6b5efd484a"
        },
        "damageTypeCategory": "Damage_Gun",
        "damageReason": "TorsoShot",
        "damageCauserName": "WeapHK416_C",
        "item": {
            "itemId": "Item_Armor_C_01_Lv3_C",
            "stackCount": 1,
            "category": "Equipment",
            "subCategory": "Vest",
            "attachedItems": []
        },
        "distance": 11793.1943359375,
        "common": {
            "isGame": 4
        },
        "_D": "2018-07-01T04:58:59.198Z",
        "_T": "LogArmorDestroy"
    },
    {
        "character": {
            "name": "Razgriz_ExE",
            "teamId": 5,
            "health": 100,
            "location": {
                "x": 333650.375,
                "y": 353544.375,
                "z": -210.01318359375
            },
            "ranking": 0,
            "accountId": "account.85f20f9b10c14d67a3a7e8e3f1ffada1"
        },
        "common": {
            "isGame": 0
        },
        "_D": "2018-07-01T04:42:54.608Z",
        "_T": "LogSwimStart"
    },
    {
        "character": {
            "name": "Jtbarry",
            "teamId": 24,
            "health": 100,
            "location": {
                "x": 213904.4375,
                "y": 292718.8125,
                "z": 123.52888488769531
            },
            "ranking": 0,
            "accountId": "account.f519378643464daf8b352bec6868c222"
        },
        "swimDistance": 7.032623291015625,
        "common": {
            "isGame": 1.5
        },
        "_D": "2018-07-01T04:47:35.061Z",
        "_T": "LogSwimEnd"
    },
    {
        "attackId": 301991499,
        "attacker": {
            "name": "shroud",
            "teamId": 7,
            "health": 0,
            "location": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "ranking": 0,
            "accountId": "account.d50fdc18fcad49c691d38466bed6f8fd"
        },
        "vehicle": {
            "vehicleType": "WheeledVehicle",
            "vehicleId": "Dacia_A_01_v2_C",
            "healthPercent": 92.83333587646484,
            "feulPercent": 41.6783332824707
        },
        "damageTypeCategory": "Damage_Gun",
        "damageCauserName": "WeapHK416_C",
        "common": {
            "isGame": 2.5
        },
        "_D": "2018-07-01T04:52:58.363Z",
        "_T": "LogWheelDestroy"
    },
    {
        "reviver": {
            "name": "AL3X_madrinas",
            "teamId": 7,
            "health": 84,
            "location": {
                "x": 263633.75,
                "y": 212517.890625,
                "z": 2821.739990234375
            },
            "ranking": 0,
            "accountId": "account.77a8626f5f1b4a16bf563ad2cc6f38e6"
        },
        "victim": {
            "name": "just9n",
            "teamId": 7,
            "health": 10,
            "location": {
                "x": 263635.21875,
                "y": 212597.921875,
                "z": 2822.9599609375
            },
            "ranking": 0,
            "accountId": "account.c9c08c8befe54788ad28f86ad5f03374"
        },
        "common": {
            "isGame": 3.5
        },
        "_D": "2018-07-01T04:56:06.303Z",
        "_T": "LogPlayerRevive"
    },
    {
        "attackId": 301991566,
        "attacker": {
            "name": "shroud",
            "teamId": 7,
            "health": 50.97999954223633,
            "location": {
                "x": 262029.4375,
                "y": 216320.53125,
                "z": 3132.679931640625
            },
            "ranking": 0,
            "accountId": "account.d50fdc18fcad49c691d38466bed6f8fd"
        },
        "victim": {
            "name": "AdmiralNavarro",
            "teamId": 23,
            "health": 0,
            "location": {
                "x": 260638.09375,
                "y": 219681.640625,
                "z": 3652.25
            },
            "ranking": 0,
            "accountId": "account.978c661765d74d7995fb6dd5f18a97bf"
        },
        "damageReason": "HeadShot",
        "damageTypeCategory": "Damage_Gun",
        "damageCauserName": "WeapHK416_C",
        "distance": 3674.621826171875,
        "isAttackerInVehicle": false,
        "dBNOId": 989855744,
        "common": {
            "isGame": 3.5
        },
        "_D": "2018-07-01T04:56:12.104Z",
        "_T": "LogPlayerMakeGroggy"
    },
    {
        "mapName": "Erangel_Main",
        "weatherId": "Clear_02",
        "isCustomGame": false,
        "isEventMode": false,
        "characters": [
            {
                "name": "TunAflex",
                "teamId": 40,
                "health": 0,
                "location": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "ranking": 0,
                "accountId": "account.2a6598f579924a87a5767b120882ecc0"
            }
        ],
        "cameraViewBehaviour": "FpsOnly",
        "teamSize": 1,
        "blueZoneCustomOptions": "[{\"phaseNum\":0,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":1,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":2,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":3,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":4,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":5,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":6,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":7,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":8,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693}]",
        "common": {
            "isGame": 0.10000000149011612
        },
        "_D": "2018-04-27T09:14:41.702Z",
        "_T": "LogMatchStart"
    },
    {
        "characters": [
            {
                "name": "DjaYaithc",
                "teamId": 2,
                "health": 0,
                "location": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "ranking": 18,
                "accountId": "account.b2d6f13944a2487593dd828ed2794231"
            },
            {
                "name": "Seniorhydra",
                "teamId": 21,
                "health": 0,
                "location": {
                    "x": 0,
                    "y": 0,
                    "z": 0
                },
                "ranking": 37,
                "accountId": "account.af73dcdae86947f8ae07b46c7a389102"
            },
        ],
        "common": {
            "isGame": 7.5
        },
        "_D": "2018-04-27T09:45:43.640Z",
        "_T": "LogMatchEnd"
    },
];
/* tslint:enable */
//#endregion
describe('Telemetry entity', () => {
    let tm;
    beforeEach(() => {
        tm = new __1.Telemetry(API_RESPONSE);
    });
    it('should parse armor destroy events', () => {
        chai_1.expect(tm.armorDestroyEvents).to.have.length(1);
        const event = tm.armorDestroyEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-07-01T04:58:59.198Z'));
        chai_1.expect(event.attackId).to.eq(285213655);
        chai_1.expect(event.damageTypeCategory).to.eq('Damage_Gun');
        chai_1.expect(event.damageReason).to.eq('TorsoShot');
        chai_1.expect(event.damageCauserName).to.eq('WeapHK416_C');
        chai_1.expect(event.distance).to.eq(11793.1943359375);
        const attacker = event.attacker;
        chai_1.expect(attacker.name).to.eq('just9n');
        chai_1.expect(attacker.teamId).to.eq(7);
        chai_1.expect(attacker.health).to.eq(0);
        chai_1.expect(attacker.location.x).to.eq(0);
        chai_1.expect(attacker.location.y).to.eq(0);
        chai_1.expect(attacker.location.z).to.eq(0);
        chai_1.expect(attacker.ranking).to.eq(0);
        chai_1.expect(attacker.accountId).to.eq('account.c9c08c8befe54788ad28f86ad5f03374');
        const victim = event.victim;
        chai_1.expect(victim.name).to.eq('friday_blunt');
        chai_1.expect(victim.teamId).to.eq(8);
        chai_1.expect(victim.health).to.eq(41.18181610107422);
        chai_1.expect(victim.location.x).to.eq(250741.4375);
        chai_1.expect(victim.location.y).to.eq(175829.65625);
        chai_1.expect(victim.location.z).to.eq(1520.4000244140625);
        chai_1.expect(victim.ranking).to.eq(0);
        chai_1.expect(victim.accountId).to.eq('account.f94eac9c507d43bfaef65a6b5efd484a');
        const item = event.item;
        chai_1.expect(item.itemId).to.eq('Item_Armor_C_01_Lv3_C');
        chai_1.expect(item.stackCount).to.eq(1);
        chai_1.expect(item.category).to.eq('Equipment');
        chai_1.expect(item.subCategory).to.eq('Vest');
        chai_1.expect(item.attachedItems).to.eql([]);
    });
    it('should parse care package land events', () => {
        chai_1.expect(tm.carePackageLandEvents).to.have.length(1);
        const event = tm.carePackageLandEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:33:50.684Z'));
        const itemPackage = event.itemPackage;
        chai_1.expect(itemPackage.itemPackageId).to.equal('Carapackage_RedBox_C');
        chai_1.expect(itemPackage.location.x).to.equal(533608.8125);
        chai_1.expect(itemPackage.location.y).to.equal(423805.28125);
        chai_1.expect(itemPackage.location.z).to.equal(2635.792724609375);
        chai_1.expect(itemPackage.items).to.have.length(5);
        const [mk14, ammo1, ammo2, stock, armor] = itemPackage.items;
        chai_1.expect(mk14.itemId).to.equal('Item_Weapon_Mk14_C');
        chai_1.expect(mk14.stackCount).to.equal(1);
        chai_1.expect(mk14.category).to.equal('Weapon');
        chai_1.expect(mk14.subCategory).to.equal('Main');
        chai_1.expect(mk14.attachedItems).to.eql([]);
        chai_1.expect(ammo1.itemId).to.equal('Item_Ammo_762mm_C');
        chai_1.expect(ammo1.stackCount).to.equal(30);
        chai_1.expect(ammo1.category).to.equal('Ammunition');
        chai_1.expect(ammo1.subCategory).to.equal('None');
        chai_1.expect(ammo1.attachedItems).to.eql([]);
        chai_1.expect(ammo2.itemId).to.equal('Item_Ammo_762mm_C');
        chai_1.expect(ammo2.stackCount).to.equal(30);
        chai_1.expect(ammo2.category).to.equal('Ammunition');
        chai_1.expect(ammo2.subCategory).to.equal('None');
        chai_1.expect(ammo2.attachedItems).to.eql([]);
        chai_1.expect(stock.itemId).to.equal('Item_Attach_Weapon_Stock_AR_Composite_C');
        chai_1.expect(stock.stackCount).to.equal(1);
        chai_1.expect(stock.category).to.equal('Attachment');
        chai_1.expect(stock.subCategory).to.equal('None');
        chai_1.expect(stock.attachedItems).to.eql([]);
        chai_1.expect(armor.itemId).to.equal('Item_Armor_C_01_Lv3_C');
        chai_1.expect(armor.stackCount).to.equal(1);
        chai_1.expect(armor.category).to.equal('Equipment');
        chai_1.expect(armor.subCategory).to.equal('Vest');
        chai_1.expect(armor.attachedItems).to.eql([]);
    });
    it('should parse care package spawn events', () => {
        chai_1.expect(tm.carePackageSpawnEvents).to.have.length(1);
        const event = tm.carePackageSpawnEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:19:29.226Z'));
        const itemPackage = event.itemPackage;
        chai_1.expect(itemPackage.itemPackageId).to.equal('Carapackage_RedBox_C');
        chai_1.expect(itemPackage.location.x).to.equal(453071.46875);
        chai_1.expect(itemPackage.location.y).to.equal(406132.8125);
        chai_1.expect(itemPackage.location.z).to.equal(30000);
        chai_1.expect(itemPackage.items).to.have.length(4);
        const [m249, ammo, acog, backpack] = itemPackage.items;
        chai_1.expect(m249.itemId).to.equal('Item_Weapon_M249_C');
        chai_1.expect(m249.stackCount).to.equal(1);
        chai_1.expect(m249.category).to.equal('Weapon');
        chai_1.expect(m249.subCategory).to.equal('Main');
        chai_1.expect(m249.attachedItems).to.eql([]);
        chai_1.expect(ammo.itemId).to.equal('Item_Ammo_556mm_C');
        chai_1.expect(ammo.stackCount).to.equal(100);
        chai_1.expect(ammo.category).to.equal('Ammunition');
        chai_1.expect(ammo.subCategory).to.equal('None');
        chai_1.expect(ammo.attachedItems).to.eql([]);
        chai_1.expect(acog.itemId).to.equal('Item_Attach_Weapon_Upper_ACOG_01_C');
        chai_1.expect(acog.stackCount).to.equal(1);
        chai_1.expect(acog.category).to.equal('Attachment');
        chai_1.expect(acog.subCategory).to.equal('None');
        chai_1.expect(acog.attachedItems).to.eql([]);
        chai_1.expect(backpack.itemId).to.equal('Item_Back_C_01_Lv3_C');
        chai_1.expect(backpack.stackCount).to.equal(1);
        chai_1.expect(backpack.category).to.equal('Equipment');
        chai_1.expect(backpack.subCategory).to.equal('Backpack');
        chai_1.expect(backpack.attachedItems).to.eql([]);
    });
    it('should parse game state periodic events', () => {
        chai_1.expect(tm.gameStatePeriodicEvents).to.have.length(1);
        const event = tm.gameStatePeriodicEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:14:52.262Z'));
        const gameState = event.gameState;
        chai_1.expect(gameState.elapsedTime).to.eq(10);
        chai_1.expect(gameState.numAlivePlayers).to.eq(98);
        chai_1.expect(gameState.numAliveTeams).to.eq(49);
        chai_1.expect(gameState.numJoinPlayers).to.eq(99);
        chai_1.expect(gameState.poisonGasWarningPosition.x).to.eq(0);
        chai_1.expect(gameState.poisonGasWarningPosition.y).to.eq(0);
        chai_1.expect(gameState.poisonGasWarningPosition.z).to.eq(0);
        chai_1.expect(gameState.poisonGasWarningRadius).to.eq(0);
        chai_1.expect(gameState.redZonePosition.x).to.eq(0);
        chai_1.expect(gameState.redZonePosition.y).to.eq(0);
        chai_1.expect(gameState.redZonePosition.z).to.eq(0);
        chai_1.expect(gameState.redZoneRadius).to.eq(0);
        chai_1.expect(gameState.safetyZonePosition.x).to.eq(406387.5);
        chai_1.expect(gameState.safetyZonePosition.y).to.eq(406387.5);
        chai_1.expect(gameState.safetyZonePosition.z).to.eq(0);
        chai_1.expect(gameState.safetyZoneRadius).to.eq(579718.6875);
    });
    it('should parse item attach events', () => {
        chai_1.expect(tm.itemAttachEvents).to.have.length(1);
        const event = tm.itemAttachEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:16:44.516Z'));
        const character = event.character;
        chai_1.expect(character.accountId).to.eq('account.d5bfd6c4f4d64eb1bf5baca4957b7351');
        chai_1.expect(character.health).to.eq(95.58048248291016);
        chai_1.expect(character.location.x).to.eq(240817.59375);
        chai_1.expect(character.location.y).to.eq(527005.4375);
        chai_1.expect(character.location.z).to.eq(861.25);
        chai_1.expect(character.name).to.eq('TIKIVITUS');
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.teamId).to.eq(39);
        const parentItem = event.parentItem;
        chai_1.expect(parentItem.attachedItems).to.eql([]);
        chai_1.expect(parentItem.category).to.eq('Weapon');
        chai_1.expect(parentItem.itemId).to.eq('Item_Weapon_M16A4_C');
        chai_1.expect(parentItem.stackCount).to.eq(1);
        chai_1.expect(parentItem.subCategory).to.eq('Main');
        const childItem = event.childItem;
        chai_1.expect(childItem.attachedItems).to.eql([]);
        chai_1.expect(childItem.category).to.eq('Attachment');
        chai_1.expect(childItem.itemId).to.eq('Item_Attach_Weapon_Upper_ACOG_01_C');
        chai_1.expect(childItem.stackCount).to.eq(1);
        chai_1.expect(childItem.subCategory).to.eq('None');
    });
    it('should parse item detach events', () => {
        chai_1.expect(tm.itemDetachEvents).to.have.length(1);
        const event = tm.itemDetachEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:16:59.889Z'));
        const character = event.character;
        chai_1.expect(character.accountId).to.eq('account.7707ddf7e5f84d1e875390c2951c6986');
        chai_1.expect(character.health).to.eq(100);
        chai_1.expect(character.location.x).to.eq(370493.1875);
        chai_1.expect(character.location.y).to.eq(414151.4375);
        chai_1.expect(character.location.z).to.eq(4240.14990234375);
        chai_1.expect(character.name).to.eq('BossOfThisGymm');
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.teamId).to.eq(22);
        const parentItem = event.parentItem;
        chai_1.expect(parentItem.attachedItems).to.eql(['Item_Attach_Weapon_Upper_ACOG_01_C']);
        chai_1.expect(parentItem.category).to.eq('Weapon');
        chai_1.expect(parentItem.itemId).to.eq('Item_Weapon_M16A4_C');
        chai_1.expect(parentItem.stackCount).to.eq(1);
        chai_1.expect(parentItem.subCategory).to.eq('Main');
        const childItem = event.childItem;
        chai_1.expect(childItem.attachedItems).to.eql([]);
        chai_1.expect(childItem.category).to.eq('Attachment');
        chai_1.expect(childItem.itemId).to.eq('Item_Attach_Weapon_Upper_ACOG_01_C');
        chai_1.expect(childItem.stackCount).to.eq(1);
        chai_1.expect(childItem.subCategory).to.eq('None');
    });
    it('should parse item drop events', () => {
        chai_1.expect(tm.itemDropEvents).to.have.length(1);
        const event = tm.itemDropEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:16:48.479Z'));
        const character = event.character;
        chai_1.expect(character.accountId).to.eq('account.af73dcdae86947f8ae07b46c7a389102');
        chai_1.expect(character.health).to.eq(100);
        chai_1.expect(character.location.x).to.eq(600957.6875);
        chai_1.expect(character.location.y).to.eq(478768.0625);
        chai_1.expect(character.location.z).to.eq(394.97998046875);
        chai_1.expect(character.name).to.eq('Seniorhydra');
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.teamId).to.eq(21);
        const item = event.item;
        chai_1.expect(item.attachedItems).to.eql([]);
        chai_1.expect(item.category).to.eq('Equipment');
        chai_1.expect(item.itemId).to.eq('Item_Armor_E_01_Lv1_C');
        chai_1.expect(item.stackCount).to.eq(1);
        chai_1.expect(item.subCategory).to.eq('Vest');
    });
    it('should parse item equip events', () => {
        chai_1.expect(tm.itemEquipEvents).to.have.length(1);
        const event = tm.itemEquipEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:25:30.172Z'));
        const character = event.character;
        chai_1.expect(character.accountId).to.eq('account.d721c3a5a62849a8a29b0e9c18c5c93a');
        chai_1.expect(character.health).to.eq(75);
        chai_1.expect(character.location.x).to.eq(354083.0625);
        chai_1.expect(character.location.y).to.eq(407381.5);
        chai_1.expect(character.location.z).to.eq(4530.85986328125);
        chai_1.expect(character.name).to.eq('FatihDMRK7');
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.teamId).to.eq(18);
        const item = event.item;
        chai_1.expect(item.attachedItems).to.eql([]);
        chai_1.expect(item.category).to.eq('Equipment');
        chai_1.expect(item.itemId).to.eq('Item_Weapon_Grenade_C');
        chai_1.expect(item.stackCount).to.eq(1);
        chai_1.expect(item.subCategory).to.eq('Throwable');
    });
    it('should parse item pickup events', () => {
        chai_1.expect(tm.itemPickupEvents).to.have.length(1);
        const event = tm.itemPickupEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:25:30.122Z'));
        const character = event.character;
        chai_1.expect(character.accountId).to.eq('account.5e23448e38dd4cc19e42f0dea56e851c');
        chai_1.expect(character.health).to.eq(98.50699615478516);
        chai_1.expect(character.location.x).to.eq(377094.0625);
        chai_1.expect(character.location.y).to.eq(127431.7265625);
        chai_1.expect(character.location.z).to.eq(91.87999725341797);
        chai_1.expect(character.name).to.eq('L-wood');
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.teamId).to.eq(19);
        const item = event.item;
        chai_1.expect(item.attachedItems).to.eql([]);
        chai_1.expect(item.category).to.eq('Attachment');
        chai_1.expect(item.itemId).to.eq('Item_Attach_Weapon_Lower_AngledForeGrip_C');
        chai_1.expect(item.stackCount).to.eq(1);
        chai_1.expect(item.subCategory).to.eq('None');
    });
    it('should parse item unequip events', () => {
        chai_1.expect(tm.itemUnequipEvents).to.have.length(1);
        const event = tm.itemUnequipEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:25:36.181Z'));
        const character = event.character;
        chai_1.expect(character.accountId).to.eq('account.65b981cf631d451187de4095ec3fa068');
        chai_1.expect(character.health).to.eq(100);
        chai_1.expect(character.location.x).to.eq(351960.15625);
        chai_1.expect(character.location.y).to.eq(311851.625);
        chai_1.expect(character.location.z).to.eq(576.9199829101562);
        chai_1.expect(character.name).to.eq('Nerison');
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.teamId).to.eq(40);
        const item = event.item;
        chai_1.expect(item.attachedItems).to.eql([]);
        chai_1.expect(item.category).to.eq('Equipment');
        chai_1.expect(item.itemId).to.eq('Item_Weapon_SmokeBomb_C');
        chai_1.expect(item.stackCount).to.eq(1);
        chai_1.expect(item.subCategory).to.eq('Throwable');
    });
    it('should parse item use events', () => {
        chai_1.expect(tm.itemUseEvents).to.have.length(1);
        const event = tm.itemUseEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:17:16.909Z'));
        const character = event.character;
        chai_1.expect(character.accountId).to.eq('account.01036a3b37094fcf907a5f158dacb8b1');
        chai_1.expect(character.health).to.eq(75);
        chai_1.expect(character.location.x).to.eq(627868.6875);
        chai_1.expect(character.location.y).to.eq(378629.59375);
        chai_1.expect(character.location.z).to.eq(3197.099853515625);
        chai_1.expect(character.name).to.eq('Tulen99');
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.teamId).to.eq(16);
        const item = event.item;
        chai_1.expect(item.attachedItems).to.eql([]);
        chai_1.expect(item.category).to.eq('Use');
        chai_1.expect(item.itemId).to.eq('Item_Heal_FirstAid_C');
        chai_1.expect(item.stackCount).to.eq(1);
        chai_1.expect(item.subCategory).to.eq('Heal');
    });
    it('should parse match definition events', () => {
        chai_1.expect(tm.matchDefinitionEvents).to.have.length(1);
        const event = tm.matchDefinitionEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:14:41.705Z'));
        /* tslint:disable-next-line:max-line-length */
        chai_1.expect(event.matchId).to.equal('match.bro.official.2018-04.eu.duo-fpp.2018.04.27.8c1c8a56-4104-46ef-8aec-5e012b041574');
        chai_1.expect(event.pingQuality).to.equal('low');
        chai_1.expect(event.seasonState).to.equal(__1.SeasonState.PROGRESS);
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:14:41.7057369+00:00'));
    });
    it('should parse match end events', () => {
        chai_1.expect(tm.matchEndEvents).to.have.length(1);
        const event = tm.matchEndEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:45:43.640Z'));
        const [dj, senior] = event.characters;
        chai_1.expect(dj.accountId).to.eq('account.b2d6f13944a2487593dd828ed2794231');
        chai_1.expect(dj.health).to.eq(0);
        chai_1.expect(dj.location.x).to.eq(0);
        chai_1.expect(dj.location.y).to.eq(0);
        chai_1.expect(dj.location.z).to.eq(0);
        chai_1.expect(dj.name).to.eq('DjaYaithc');
        chai_1.expect(dj.ranking).to.eq(18);
        chai_1.expect(dj.teamId).to.eq(2);
        chai_1.expect(senior.accountId).to.eq('account.af73dcdae86947f8ae07b46c7a389102');
        chai_1.expect(senior.health).to.eq(0);
        chai_1.expect(senior.location.x).to.eq(0);
        chai_1.expect(senior.location.y).to.eq(0);
        chai_1.expect(senior.location.z).to.eq(0);
        chai_1.expect(senior.name).to.eq('Seniorhydra');
        chai_1.expect(senior.ranking).to.eq(37);
        chai_1.expect(senior.teamId).to.eq(21);
    });
    it('should parse match start events', () => {
        chai_1.expect(tm.matchStartEvents).to.have.length(1);
        const event = tm.matchStartEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:14:41.702Z'));
        /* tslint:disable-next-line:max-line-length quotemark */
        chai_1.expect(event.blueZoneCustomOptions).to.eq("[{\"phaseNum\":0,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":1,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":2,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":3,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":4,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":5,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":6,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":7,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693},{\"phaseNum\":8,\"startDelay\":0,\"warningDuration\":0,\"releaseDuration\":0,\"poisonGasDamagePerSecond\":0,\"radiusRate\":0,\"spreadRatio\":5.9555184733804726e-43,\"landRatio\":0,\"circleAlgorithm\":-1941693693}]");
        chai_1.expect(event.cameraViewBehaviour).to.eq('FpsOnly');
        chai_1.expect(event.isCustomGame).to.be.false;
        chai_1.expect(event.isEventMode).to.be.false;
        chai_1.expect(event.mapName).to.eq('Erangel_Main');
        chai_1.expect(event.teamSize).to.eq(1);
        chai_1.expect(event.weatherId).to.eq('Clear_02');
        const tuna = event.characters[0];
        chai_1.expect(tuna.accountId).to.eq('account.2a6598f579924a87a5767b120882ecc0');
        chai_1.expect(tuna.health).to.eq(0);
        chai_1.expect(tuna.location.x).to.eq(0);
        chai_1.expect(tuna.location.y).to.eq(0);
        chai_1.expect(tuna.location.z).to.eq(0);
        chai_1.expect(tuna.name).to.eq('TunAflex');
        chai_1.expect(tuna.ranking).to.eq(0);
        chai_1.expect(tuna.teamId).to.eq(40);
    });
    it('should parse player attack events', () => {
        chai_1.expect(tm.playerAttackEvents).to.have.length(1);
        const event = tm.playerAttackEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:25:29.504Z'));
        chai_1.expect(event.attackId).to.eq(587202601);
        chai_1.expect(event.attackType).to.eq('Weapon');
        const attacker = event.attacker;
        chai_1.expect(attacker.accountId).to.eq('account.8544765d5ab34163ba33dec0ebf1ae72');
        chai_1.expect(attacker.health).to.eq(66.3600082397461);
        chai_1.expect(attacker.location.x).to.eq(543591.75);
        chai_1.expect(attacker.location.y).to.eq(241830.96875);
        chai_1.expect(attacker.location.z).to.eq(181.67999267578125);
        chai_1.expect(attacker.name).to.eq('GRaBoNeR');
        chai_1.expect(attacker.ranking).to.eq(0);
        chai_1.expect(attacker.teamId).to.eq(25);
        chai_1.expect(event.fireWeaponStackCount).to.eq(0);
        const weapon = event.weapon;
        chai_1.expect(weapon.attachedItems).to.eql([
            'Item_Attach_Weapon_Lower_Foregrip_C',
            'Item_Attach_Weapon_Upper_Aimpoint_C',
            'Item_Attach_Weapon_Magazine_Extended_Large_C',
        ]);
        chai_1.expect(weapon.category).to.eq('Weapon');
        chai_1.expect(weapon.itemId).to.eq('Item_Weapon_HK416_C');
        chai_1.expect(weapon.stackCount).to.eq(1);
        chai_1.expect(weapon.subCategory).to.eq('Main');
        const vehicle = event.vehicle;
        chai_1.expect(vehicle).to.not.be.undefined;
        chai_1.expect(vehicle.vehicleType).to.eq('');
        chai_1.expect(vehicle.vehicleId).to.eq('');
        chai_1.expect(vehicle.healthPercent).to.eq(0);
        chai_1.expect(vehicle.feulPercent).to.eq(0);
    });
    it('should parse player create events', () => {
        chai_1.expect(tm.playerCreateEvents).to.have.length(1);
        const event = tm.playerCreateEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:13:32.141Z'));
        const character = event.character;
        chai_1.expect(character.accountId).to.eq('account.b2d6f13944a2487593dd828ed2794231');
        chai_1.expect(character.health).to.eq(100);
        chai_1.expect(character.location.x).to.eq(798044);
        chai_1.expect(character.location.y).to.eq(20348.67578125);
        chai_1.expect(character.location.z).to.eq(547.231201171875);
        chai_1.expect(character.name).to.eq('DjaYaithc');
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.teamId).to.eq(2);
    });
    it('should parse player kill events', () => {
        chai_1.expect(tm.playerKillEvents).to.have.length(1);
        const event = tm.playerKillEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:16:51.264Z'));
        chai_1.expect(event.attackId).to.eq(503316482);
        chai_1.expect(event.damageReason).to.eq('TorsoShot');
        chai_1.expect(event.damageTypeCategory).to.eq('Damage_Gun');
        chai_1.expect(event.damageCauserName).to.eq('WeapBerreta686_C');
        chai_1.expect(event.distance).to.eq(190.9481964111328);
        const killer = event.killer;
        chai_1.expect(killer.accountId).to.eq('account.6bec6292311f40138a20bac250b0f104');
        chai_1.expect(killer.health).to.eq(99.14064025878906);
        chai_1.expect(killer.location.x).to.eq(708153.5);
        chai_1.expect(killer.location.y).to.eq(335354.1875);
        chai_1.expect(killer.location.z).to.eq(144.19000244140625);
        chai_1.expect(killer.name).to.eq('CryForHonor');
        chai_1.expect(killer.ranking).to.eq(0);
        chai_1.expect(killer.teamId).to.eq(17);
        const victim = event.victim;
        chai_1.expect(victim.accountId).to.eq('account.767af0c6351a42f5a5eea8ccb0ab1062');
        chai_1.expect(victim.health).to.eq(0);
        chai_1.expect(victim.location.x).to.eq(708048.625);
        chai_1.expect(victim.location.y).to.eq(335511.28125);
        chai_1.expect(victim.location.z).to.eq(116.18999481201172);
        chai_1.expect(victim.name).to.eq('DevriAlem19');
        chai_1.expect(victim.ranking).to.eq(0);
        chai_1.expect(victim.teamId).to.eq(24);
    });
    it('should parse player login events', () => {
        chai_1.expect(tm.playerLoginEvents).to.have.length(1);
        const event = tm.playerLoginEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:13:32.124Z'));
        chai_1.expect(event.accountId).to.eq('account.b2d6f13944a2487593dd828ed2794231');
    });
    it('should parse player logout events', () => {
        chai_1.expect(tm.playerLogoutEvents).to.have.length(1);
        const event = tm.playerLogoutEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:16:42.764Z'));
        chai_1.expect(event.accountId).to.eq('account.4bc589020b7e430ca5a100281c0985f4');
    });
    it('should parse player make groggy events', () => {
        chai_1.expect(tm.playerMakeGroggyEvents).to.have.length(1);
        const event = tm.playerMakeGroggyEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-07-01T04:56:12.104Z'));
        chai_1.expect(event.attackId).to.eq(301991566);
        chai_1.expect(event.damageTypeCategory).to.eq('Damage_Gun');
        chai_1.expect(event.damageCauserName).to.eq('WeapHK416_C');
        chai_1.expect(event.damageReason).to.eq('HeadShot');
        chai_1.expect(event.distance).to.eq(3674.621826171875);
        chai_1.expect(event.isAttackerInVehicle).to.be.false;
        chai_1.expect(event.dBNOId).to.eq(989855744);
        const attacker = event.attacker;
        chai_1.expect(attacker.accountId).to.eq('account.d50fdc18fcad49c691d38466bed6f8fd');
        chai_1.expect(attacker.health).to.eq(50.97999954223633);
        chai_1.expect(attacker.location.x).to.eq(262029.4375);
        chai_1.expect(attacker.location.y).to.eq(216320.53125);
        chai_1.expect(attacker.location.z).to.eq(3132.679931640625);
        chai_1.expect(attacker.name).to.eq('shroud');
        chai_1.expect(attacker.ranking).to.eq(0);
        chai_1.expect(attacker.teamId).to.eq(7);
        const victim = event.victim;
        chai_1.expect(victim.accountId).to.eq('account.978c661765d74d7995fb6dd5f18a97bf');
        chai_1.expect(victim.health).to.eq(0);
        chai_1.expect(victim.location.x).to.eq(260638.09375);
        chai_1.expect(victim.location.y).to.eq(219681.640625);
        chai_1.expect(victim.location.z).to.eq(3652.25);
        chai_1.expect(victim.name).to.eq('AdmiralNavarro');
        chai_1.expect(victim.ranking).to.eq(0);
        chai_1.expect(victim.teamId).to.eq(23);
    });
    it('should parse player position events', () => {
        chai_1.expect(tm.playerPositionEvents).to.have.length(1);
        const event = tm.playerPositionEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:25:22.997Z'));
        chai_1.expect(event.elapsedTime).to.eq(626);
        chai_1.expect(event.numAlivePlayers).to.eq(49);
        const character = event.character;
        chai_1.expect(character.accountId).to.eq('account.65c28d3e23fb471eb925900590e91b67');
        chai_1.expect(character.health).to.eq(69.99652862548828);
        chai_1.expect(character.location.x).to.eq(727311.5625);
        chai_1.expect(character.location.y).to.eq(438198.625);
        chai_1.expect(character.location.z).to.eq(2622.329833984375);
        chai_1.expect(character.name).to.eq('Cloudity');
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.teamId).to.eq(2);
        const vehicle = event.vehicle;
        chai_1.expect(vehicle).to.not.be.undefined;
        chai_1.expect(vehicle.vehicleType).to.eq('');
        chai_1.expect(vehicle.vehicleId).to.eq('');
        chai_1.expect(vehicle.healthPercent).to.eq(0);
        chai_1.expect(vehicle.feulPercent).to.eq(0);
    });
    it('should parse player revive events', () => {
        chai_1.expect(tm.playerReviveEvents).to.have.length(1);
        const event = tm.playerReviveEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-07-01T04:56:06.303Z'));
        const reviver = event.reviver;
        chai_1.expect(reviver.accountId).to.eq('account.77a8626f5f1b4a16bf563ad2cc6f38e6');
        chai_1.expect(reviver.health).to.eq(84);
        chai_1.expect(reviver.location.x).to.eq(263633.75);
        chai_1.expect(reviver.location.y).to.eq(212517.890625);
        chai_1.expect(reviver.location.z).to.eq(2821.739990234375);
        chai_1.expect(reviver.name).to.eq('AL3X_madrinas');
        chai_1.expect(reviver.ranking).to.eq(0);
        chai_1.expect(reviver.teamId).to.eq(7);
        const victim = event.victim;
        chai_1.expect(victim.accountId).to.eq('account.c9c08c8befe54788ad28f86ad5f03374');
        chai_1.expect(victim.health).to.eq(10);
        chai_1.expect(victim.location.x).to.eq(263635.21875);
        chai_1.expect(victim.location.y).to.eq(212597.921875);
        chai_1.expect(victim.location.z).to.eq(2822.9599609375);
        chai_1.expect(victim.name).to.eq('just9n');
        chai_1.expect(victim.ranking).to.eq(0);
        chai_1.expect(victim.teamId).to.eq(7);
    });
    it('should parse player take damage events', () => {
        chai_1.expect(tm.playerTakeDamageEvents).to.have.length(1);
        const event = tm.playerTakeDamageEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:16:19.393Z'));
        chai_1.expect(event.attackId).to.eq(1073741859);
        chai_1.expect(event.damageTypeCategory).to.eq('Damage_Gun');
        chai_1.expect(event.damageCauserName).to.eq('WeapM16A4_C');
        chai_1.expect(event.damage).to.eq(100);
        chai_1.expect(event.damageReason).to.eq('HeadShot');
        const attacker = event.attacker;
        chai_1.expect(attacker).to.not.be.undefined;
        chai_1.expect(attacker.accountId).to.eq('account.bdfbbf10e33f4e33bd5967fa6a8af35d');
        chai_1.expect(attacker.health).to.eq(0);
        chai_1.expect(attacker.location.x).to.eq(0);
        chai_1.expect(attacker.location.y).to.eq(0);
        chai_1.expect(attacker.location.z).to.eq(0);
        chai_1.expect(attacker.name).to.eq('sami_70');
        chai_1.expect(attacker.ranking).to.eq(0);
        chai_1.expect(attacker.teamId).to.eq(44);
        const victim = event.victim;
        chai_1.expect(victim.accountId).to.eq('account.54b42bdadae640058f931a1b1fb66793');
        chai_1.expect(victim.health).to.eq(100);
        chai_1.expect(victim.location.x).to.eq(445670.75);
        chai_1.expect(victim.location.y).to.eq(623350.75);
        chai_1.expect(victim.location.z).to.eq(985.6199951171875);
        chai_1.expect(victim.name).to.eq('ogka121');
        chai_1.expect(victim.ranking).to.eq(0);
        chai_1.expect(victim.teamId).to.eq(50);
    });
    it('should parse swim end events', () => {
        chai_1.expect(tm.swimEndEvents).to.have.length(1);
        const event = tm.swimEndEvents[0];
        chai_1.expect(event.swimDistance).to.eq(7.032623291015625);
        const character = event.character;
        chai_1.expect(character.name).to.eq('Jtbarry');
        chai_1.expect(character.teamId).to.eq(24);
        chai_1.expect(character.health).to.eq(100);
        chai_1.expect(character.location.x).to.eq(213904.4375);
        chai_1.expect(character.location.y).to.eq(292718.8125);
        chai_1.expect(character.location.z).to.eq(123.52888488769531);
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.accountId).to.eq('account.f519378643464daf8b352bec6868c222');
    });
    it('should parse swim start events', () => {
        chai_1.expect(tm.swimStartEvents).to.have.length(1);
        const event = tm.swimStartEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-07-01T04:42:54.608Z'));
        const character = event.character;
        chai_1.expect(character.name).to.eq('Razgriz_ExE');
        chai_1.expect(character.teamId).to.eq(5);
        chai_1.expect(character.health).to.eq(100);
        chai_1.expect(character.location.x).to.eq(333650.375);
        chai_1.expect(character.location.y).to.eq(353544.375);
        chai_1.expect(character.location.z).to.eq(-210.01318359375);
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.accountId).to.eq('account.85f20f9b10c14d67a3a7e8e3f1ffada1');
    });
    it('should parse vehicle destroy events', () => {
        chai_1.expect(tm.vehicleDestroyEvents).to.have.length(1);
        const event = tm.vehicleDestroyEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:19:52.791Z'));
        chai_1.expect(event.attackId).to.eq(294);
        chai_1.expect(event.damageCauserName).to.eq('RedZoneBomb_C');
        chai_1.expect(event.damageTypeCategory).to.eq('Damage_Explosion_RedZone');
        chai_1.expect(event.distance).to.eq(-1);
        const attacker = event.attacker;
        chai_1.expect(attacker.accountId).to.eq('');
        chai_1.expect(attacker.health).to.eq(0);
        chai_1.expect(attacker.location.x).to.eq(0);
        chai_1.expect(attacker.location.y).to.eq(0);
        chai_1.expect(attacker.location.z).to.eq(0);
        chai_1.expect(attacker.name).to.eq('');
        chai_1.expect(attacker.ranking).to.eq(0);
        chai_1.expect(attacker.teamId).to.eq(0);
        const vehicle = event.vehicle;
        chai_1.expect(vehicle.vehicleType).to.eq('WheeledVehicle');
        chai_1.expect(vehicle.vehicleId).to.eq('Buggy_A_02_C');
        chai_1.expect(vehicle.healthPercent).to.eq(0);
        chai_1.expect(vehicle.feulPercent).to.eq(44.3910026550293);
    });
    it('should parse vehicle leave events', () => {
        chai_1.expect(tm.vehicleLeaveEvents).to.have.length(1);
        const event = tm.vehicleLeaveEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:14:58.687Z'));
        chai_1.expect(event.seatIndex).to.eq(0);
        chai_1.expect(event.rideDistance).to.eq(49.8331298828125);
        const character = event.character;
        chai_1.expect(character.accountId).to.eq('account.aa4bbc13b0064871b40e81de7980cbc6');
        chai_1.expect(character.health).to.eq(100);
        chai_1.expect(character.location.x).to.eq(128699.5078125);
        chai_1.expect(character.location.y).to.eq(617187.75);
        chai_1.expect(character.location.z).to.eq(150088);
        chai_1.expect(character.name).to.eq('MukpoBa3ep');
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.teamId).to.eq(23);
        const vehicle = event.vehicle;
        chai_1.expect(vehicle.vehicleType).to.eq('TransportAircraft');
        chai_1.expect(vehicle.vehicleId).to.eq('DummyTransportAircraft_C');
        chai_1.expect(vehicle.healthPercent).to.eq(0);
        chai_1.expect(vehicle.feulPercent).to.eq(0);
    });
    it('should parse vehicle ride events', () => {
        chai_1.expect(tm.vehicleRideEvents).to.have.length(1);
        const event = tm.vehicleRideEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-04-27T09:25:36.227Z'));
        chai_1.expect(event.seatIndex).to.eq(2);
        const character = event.character;
        chai_1.expect(character.accountId).to.eq('account.28f8241e7c5842d980a88591e3f2a688');
        chai_1.expect(character.health).to.eq(80.63734436035156);
        chai_1.expect(character.location.x).to.eq(377161.125);
        chai_1.expect(character.location.y).to.eq(127640.078125);
        chai_1.expect(character.location.z).to.eq(212.73568725585938);
        chai_1.expect(character.name).to.eq('Darkeratom');
        chai_1.expect(character.ranking).to.eq(0);
        chai_1.expect(character.teamId).to.eq(19);
        const vehicle = event.vehicle;
        chai_1.expect(vehicle.vehicleType).to.eq('WheeledVehicle');
        chai_1.expect(vehicle.vehicleId).to.eq('BP_Motorbike_04_C');
        chai_1.expect(vehicle.healthPercent).to.eq(100);
        chai_1.expect(vehicle.feulPercent).to.eq(36.70619201660156);
    });
    it('should parse wheel destroy events', () => {
        chai_1.expect(tm.wheelDestroyEvents).to.have.length(1);
        const event = tm.wheelDestroyEvents[0];
        chai_1.expect(event.dateTime).to.deep.equal(new Date('2018-07-01T04:52:58.363Z'));
        chai_1.expect(event.attackId).to.eq(301991499);
        chai_1.expect(event.damageTypeCategory).to.eq('Damage_Gun');
        chai_1.expect(event.damageCauserName).to.eq('WeapHK416_C');
        const attacker = event.attacker;
        chai_1.expect(attacker.accountId).to.eq('account.d50fdc18fcad49c691d38466bed6f8fd');
        chai_1.expect(attacker.health).to.eq(0);
        chai_1.expect(attacker.location.x).to.eq(0);
        chai_1.expect(attacker.location.y).to.eq(0);
        chai_1.expect(attacker.location.z).to.eq(0);
        chai_1.expect(attacker.name).to.eq('shroud');
        chai_1.expect(attacker.ranking).to.eq(0);
        chai_1.expect(attacker.teamId).to.eq(7);
        const vehicle = event.vehicle;
        chai_1.expect(vehicle.vehicleType).to.eq('WheeledVehicle');
        chai_1.expect(vehicle.vehicleId).to.eq('Dacia_A_01_v2_C');
        chai_1.expect(vehicle.healthPercent).to.eq(92.83333587646484);
        chai_1.expect(vehicle.feulPercent).to.eq(41.6783332824707);
    });
});
//# sourceMappingURL=telemetry.spec.js.map