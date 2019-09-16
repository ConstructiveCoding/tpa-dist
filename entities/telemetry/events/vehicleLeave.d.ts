import { ILogVehicleLeave } from '../../..';
import { Character } from '../objects/character';
import { Vehicle } from '../objects/vehicle';
import { TelemetryEvent } from './telemetryEvent';
export declare class VehicleLeave extends TelemetryEvent {
    private _character;
    private _vehicle;
    private _rideDistance;
    private _seatIndex;
    constructor(event: ILogVehicleLeave);
    readonly character: Character;
    readonly vehicle: Vehicle;
    readonly rideDistance: number;
    readonly seatIndex: number;
}
