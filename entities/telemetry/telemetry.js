"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const events_1 = require("./events");
class Telemetry {
    constructor(telemetryData) {
        this._armorDestroyEvents = [];
        this._carePackageLandEvents = [];
        this._carePackageSpawnEvents = [];
        this._gameStatePeriodicEvents = [];
        this._itemAttachEvents = [];
        this._itemDetachEvents = [];
        this._itemDropEvents = [];
        this._itemEquipEvents = [];
        this._itemPickupEvents = [];
        this._itemUnequipEvents = [];
        this._itemUseEvents = [];
        this._matchDefinitionEvents = [];
        this._matchEndEvents = [];
        this._matchStartEvents = [];
        this._playerAttackEvents = [];
        this._playerCreateEvents = [];
        this._playerKillEvents = [];
        this._playerLoginEvents = [];
        this._playerLogoutEvents = [];
        this._playerMakeGroggyEvents = [];
        this._playerPositionEvents = [];
        this._playerReviveEvents = [];
        this._playerTakeDamageEvents = [];
        this._swimEndEvents = [];
        this._swimStartEvents = [];
        this._vehicleDestroyEvents = [];
        this._vehicleLeaveEvents = [];
        this._vehicleRideEvents = [];
        this._wheelDestroyEvents = [];
        telemetryData.forEach(elem => {
            switch (elem._T) {
                // switch on discriminant = elem type automatically "cast" as correct type
                case __1.TelemetryEventType.LOGARMORDESTROY:
                    this._armorDestroyEvents.push(new events_1.ArmorDestroy(elem));
                    break;
                case __1.TelemetryEventType.LOGCAREPACKAGELAND:
                    this._carePackageLandEvents.push(new events_1.CarePackageLand(elem));
                    break;
                case __1.TelemetryEventType.LOGCAREPACKAGESPAWN:
                    this._carePackageSpawnEvents.push(new events_1.CarePackageSpawn(elem));
                    break;
                case __1.TelemetryEventType.LOGGAMESTATEPERIODIC:
                    this._gameStatePeriodicEvents.push(new events_1.GameStatePeriodic(elem));
                    break;
                case __1.TelemetryEventType.LOGITEMATTACH:
                    this._itemAttachEvents.push(new events_1.ItemAttach(elem));
                    break;
                case __1.TelemetryEventType.LOGITEMDETACH:
                    this._itemDetachEvents.push(new events_1.ItemDetach(elem));
                    break;
                case __1.TelemetryEventType.LOGITEMDROP:
                    this._itemDropEvents.push(new events_1.ItemDrop(elem));
                    break;
                case __1.TelemetryEventType.LOGITEMEQUIP:
                    this._itemEquipEvents.push(new events_1.ItemEquip(elem));
                    break;
                case __1.TelemetryEventType.LOGITEMPICKUP:
                    this._itemPickupEvents.push(new events_1.ItemPickup(elem));
                    break;
                case __1.TelemetryEventType.LOGITEMUNEQUIP:
                    this._itemUnequipEvents.push(new events_1.ItemUnequip(elem));
                    break;
                case __1.TelemetryEventType.LOGITEMUSE:
                    this._itemUseEvents.push(new events_1.ItemUse(elem));
                    break;
                case __1.TelemetryEventType.LOGMATCHDEFINITION:
                    this._matchDefinitionEvents.push(new events_1.MatchDefinition(elem));
                    break;
                case __1.TelemetryEventType.LOGMATCHEND:
                    this._matchEndEvents.push(new events_1.MatchEnd(elem));
                    break;
                case __1.TelemetryEventType.LOGMATCHSTART:
                    this._matchStartEvents.push(new events_1.MatchStart(elem));
                    break;
                case __1.TelemetryEventType.LOGPLAYERATTACK:
                    this._playerAttackEvents.push(new events_1.PlayerAttack(elem));
                    break;
                case __1.TelemetryEventType.LOGPLAYERCREATE:
                    this._playerCreateEvents.push(new events_1.PlayerCreate(elem));
                    break;
                case __1.TelemetryEventType.LOGPLAYERKILL:
                    this._playerKillEvents.push(new events_1.PlayerKill(elem));
                    break;
                case __1.TelemetryEventType.LOGPLAYERLOGIN:
                    this._playerLoginEvents.push(new events_1.PlayerLogin(elem));
                    break;
                case __1.TelemetryEventType.LOGPLAYERLOGOUT:
                    this._playerLogoutEvents.push(new events_1.PlayerLogout(elem));
                    break;
                case __1.TelemetryEventType.LOGPLAYERMAKEGROGGY:
                    this._playerMakeGroggyEvents.push(new events_1.PlayerMakeGroggy(elem));
                    break;
                case __1.TelemetryEventType.LOGPLAYERPOSITION:
                    this._playerPositionEvents.push(new events_1.PlayerPosition(elem));
                    break;
                case __1.TelemetryEventType.LOGPLAYERREVIVE:
                    this._playerReviveEvents.push(new events_1.PlayerRevive(elem));
                    break;
                case __1.TelemetryEventType.LOGPLAYERTAKEDAMAGE:
                    this._playerTakeDamageEvents.push(new events_1.PlayerTakeDamage(elem));
                    break;
                case __1.TelemetryEventType.LOGSWIMSTART:
                    this._swimStartEvents.push(new events_1.SwimStart(elem));
                    break;
                case __1.TelemetryEventType.LOGSWIMEND:
                    this._swimEndEvents.push(new events_1.SwimEnd(elem));
                    break;
                case __1.TelemetryEventType.LOGVEHICLEDESTROY:
                    this._vehicleDestroyEvents.push(new events_1.VehicleDestroy(elem));
                    break;
                case __1.TelemetryEventType.LOGVEHICLELEAVE:
                    this._vehicleLeaveEvents.push(new events_1.VehicleLeave(elem));
                    break;
                case __1.TelemetryEventType.LOGVEHICLERIDE:
                    this._vehicleRideEvents.push(new events_1.VehicleRide(elem));
                    break;
                case __1.TelemetryEventType.LOGWHEELDESTROY:
                    this._wheelDestroyEvents.push(new events_1.WheelDestroy(elem));
                    break;
            }
        });
    }
    //#region GETTERS
    get armorDestroyEvents() {
        return this._armorDestroyEvents;
    }
    get carePackageLandEvents() {
        return this._carePackageLandEvents;
    }
    get carePackageSpawnEvents() {
        return this._carePackageSpawnEvents;
    }
    get gameStatePeriodicEvents() {
        return this._gameStatePeriodicEvents;
    }
    get itemAttachEvents() {
        return this._itemAttachEvents;
    }
    get itemDetachEvents() {
        return this._itemDetachEvents;
    }
    get itemDropEvents() {
        return this._itemDropEvents;
    }
    get itemEquipEvents() {
        return this._itemEquipEvents;
    }
    get itemPickupEvents() {
        return this._itemPickupEvents;
    }
    get itemUnequipEvents() {
        return this._itemUnequipEvents;
    }
    get itemUseEvents() {
        return this._itemUseEvents;
    }
    get matchDefinitionEvents() {
        return this._matchDefinitionEvents;
    }
    get matchEndEvents() {
        return this._matchEndEvents;
    }
    get matchStartEvents() {
        return this._matchStartEvents;
    }
    get playerAttackEvents() {
        return this._playerAttackEvents;
    }
    get playerCreateEvents() {
        return this._playerCreateEvents;
    }
    get playerKillEvents() {
        return this._playerKillEvents;
    }
    get playerLoginEvents() {
        return this._playerLoginEvents;
    }
    get playerLogoutEvents() {
        return this._playerLogoutEvents;
    }
    get playerMakeGroggyEvents() {
        return this._playerMakeGroggyEvents;
    }
    get playerPositionEvents() {
        return this._playerPositionEvents;
    }
    get playerReviveEvents() {
        return this._playerReviveEvents;
    }
    get playerTakeDamageEvents() {
        return this._playerTakeDamageEvents;
    }
    get swimStartEvents() {
        return this._swimStartEvents;
    }
    get swimEndEvents() {
        return this._swimEndEvents;
    }
    get vehicleDestroyEvents() {
        return this._vehicleDestroyEvents;
    }
    get vehicleLeaveEvents() {
        return this._vehicleLeaveEvents;
    }
    get vehicleRideEvents() {
        return this._vehicleRideEvents;
    }
    get wheelDestroyEvents() {
        return this._wheelDestroyEvents;
    }
}
exports.Telemetry = Telemetry;
//# sourceMappingURL=telemetry.js.map