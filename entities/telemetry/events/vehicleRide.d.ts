import { ILogVehicleRide } from '../../..';
import { Character } from '../objects/character';
import { Vehicle } from '../objects/vehicle';
import { TelemetryEvent } from './telemetryEvent';
export declare class VehicleRide extends TelemetryEvent {
    private _character;
    private _vehicle;
    private _seatIndex;
    constructor(event: ILogVehicleRide);
    readonly character: Character;
    readonly vehicle: Vehicle;
    readonly seatIndex: number;
}
