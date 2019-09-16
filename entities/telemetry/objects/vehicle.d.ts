import { IVehicle } from '../../..';
export declare class Vehicle {
    private _vehicleType;
    private _vehicleId;
    private _healthPercent;
    private _feulPercent;
    constructor(vehicle: IVehicle);
    readonly vehicleType: string;
    readonly vehicleId: string;
    readonly healthPercent: number;
    readonly feulPercent: number;
}
