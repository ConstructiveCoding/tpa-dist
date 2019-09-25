"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeathType;
(function (DeathType) {
    DeathType["ALIVE"] = "alive";
    DeathType["BY_PLAYER"] = "byplayer";
    DeathType["SUICIDE"] = "suicide";
})(DeathType = exports.DeathType || (exports.DeathType = {}));
var GameMode;
(function (GameMode) {
    GameMode["DUO"] = "duo";
    GameMode["DUO_FPP"] = "duo-fpp";
    GameMode["SOLO"] = "solo";
    GameMode["SOLO_FPP"] = "solo-fpp";
    GameMode["SQUAD"] = "squad";
    GameMode["SQUAD_FPP"] = "squad-fpp";
})(GameMode = exports.GameMode || (exports.GameMode = {}));
var MapName;
(function (MapName) {
    MapName["DESERT_MAIN"] = "Desert_Main";
    MapName["ERANGEL_MAIN"] = "Erangel_Main";
    MapName["SANHOK_MAIN"] = "Savage_Main";
})(MapName = exports.MapName || (exports.MapName = {}));
var PlatformRegion;
(function (PlatformRegion) {
    // PC Platforms
    PlatformRegion["STEAM"] = "steam";
    PlatformRegion["KAKAO"] = "kakao";
    PlatformRegion["PC_AS"] = "pc-as";
    PlatformRegion["PC_EU"] = "pc-eu";
    PlatformRegion["PC_JP"] = "pc-jp";
    PlatformRegion["PC_KRJP"] = "pc-krjp";
    PlatformRegion["PC_KAKAO"] = "pc-kakao";
    PlatformRegion["PC_NA"] = "pc-na";
    PlatformRegion["PC_OC"] = "pc-oc";
    PlatformRegion["PC_RU"] = "pc-ru";
    PlatformRegion["PC_SA"] = "pc-sa";
    PlatformRegion["PC_SEA"] = "pc-sea";
    PlatformRegion["TOURNEY"] = "tournament";
    // PSN Platforms
    PlatformRegion["PSN"] = "psn";
    PlatformRegion["PSN_AS"] = "psn-as";
    PlatformRegion["PSN_EU"] = "psn-eu";
    PlatformRegion["PSN_NA"] = "psn-na";
    PlatformRegion["PSN_OC"] = "psn-oc";
    // XBOX Platforms
    PlatformRegion["XBOX"] = "xbox";
    PlatformRegion["XBOX_AS"] = "xbox-as";
    PlatformRegion["XBOX_EU"] = "xbox-eu";
    PlatformRegion["XBOX_NA"] = "xbox-na";
    PlatformRegion["XBOX_OC"] = "xbox-oc";
    PlatformRegion["XBOX_SA"] = "xbox-sa";
    PlatformRegion["NULL"] = "";
})(PlatformRegion = exports.PlatformRegion || (exports.PlatformRegion = {}));
var SeasonState;
(function (SeasonState) {
    SeasonState["CLOSED"] = "closed";
    SeasonState["PREPARE"] = "prepare";
    SeasonState["PROGRESS"] = "progress";
})(SeasonState = exports.SeasonState || (exports.SeasonState = {}));
var TelemetryEventType;
(function (TelemetryEventType) {
    TelemetryEventType["LOGPLAYERLOGIN"] = "LogPlayerLogin";
    TelemetryEventType["LOGPLAYERCREATE"] = "LogPlayerCreate";
    TelemetryEventType["LOGPLAYERPOSITION"] = "LogPlayerPosition";
    TelemetryEventType["LOGPLAYERATTACK"] = "LogPlayerAttack";
    TelemetryEventType["LOGITEMPICKUP"] = "LogItemPickup";
    TelemetryEventType["LOGITEMEQUIP"] = "LogItemEquip";
    TelemetryEventType["LOGITEMUNEQUIP"] = "LogItemUnequip";
    TelemetryEventType["LOGVEHICLERIDE"] = "LogVehicleRide";
    TelemetryEventType["LOGMATCHDEFINITION"] = "LogMatchDefinition";
    TelemetryEventType["LOGMATCHSTART"] = "LogMatchStart";
    TelemetryEventType["LOGGAMESTATEPERIODIC"] = "LogGameStatePeriodic";
    TelemetryEventType["LOGVEHICLELEAVE"] = "LogVehicleLeave";
    TelemetryEventType["LOGPLAYERTAKEDAMAGE"] = "LogPlayerTakeDamage";
    TelemetryEventType["LOGPLAYERLOGOUT"] = "LogPlayerLogout";
    TelemetryEventType["LOGITEMATTACH"] = "LogItemAttach";
    TelemetryEventType["LOGITEMDROP"] = "LogItemDrop";
    TelemetryEventType["LOGPLAYERKILL"] = "LogPlayerKill";
    TelemetryEventType["LOGITEMDETACH"] = "LogItemDetach";
    TelemetryEventType["LOGITEMUSE"] = "LogItemUse";
    TelemetryEventType["LOGCAREPACKAGESPAWN"] = "LogCarePackageSpawn";
    TelemetryEventType["LOGVEHICLEDESTROY"] = "LogVehicleDestroy";
    TelemetryEventType["LOGCAREPACKAGELAND"] = "LogCarePackageLand";
    TelemetryEventType["LOGMATCHEND"] = "LogMatchEnd";
    TelemetryEventType["LOGSWIMSTART"] = "LogSwimStart";
    TelemetryEventType["LOGSWIMEND"] = "LogSwimEnd";
    TelemetryEventType["LOGARMORDESTROY"] = "LogArmorDestroy";
    TelemetryEventType["LOGWHEELDESTROY"] = "LogWheelDestroy";
    TelemetryEventType["LOGPLAYERMAKEGROGGY"] = "LogPlayerMakeGroggy";
    TelemetryEventType["LOGPLAYERREVIVE"] = "LogPlayerRevive";
})(TelemetryEventType = exports.TelemetryEventType || (exports.TelemetryEventType = {}));
//# sourceMappingURL=constants.js.map