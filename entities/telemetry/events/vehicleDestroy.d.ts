import { ILogVehicleDestroy } from '../../..';
import { Character } from '../objects/character';
import { Vehicle } from '../objects/vehicle';
import { TelemetryEvent } from './telemetryEvent';
export declare class VehicleDestroy extends TelemetryEvent {
    private _attackId;
    private _attacker;
    private _vehicle;
    private _damageTypeCategory;
    private _damageCauserName;
    private _distance;
    constructor(event: ILogVehicleDestroy);
    readonly attackId: number;
    readonly attacker: Character;
    readonly vehicle: Vehicle;
    readonly damageTypeCategory: string;
    readonly damageCauserName: string;
    readonly distance: number;
}
