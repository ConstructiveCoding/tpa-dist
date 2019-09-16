import { ILogCarePackageSpawn } from '../../..';
import { ItemPackage } from '../objects/itemPackage';
import { TelemetryEvent } from './telemetryEvent';
export declare class CarePackageSpawn extends TelemetryEvent {
    private _itemPackage;
    constructor(event: ILogCarePackageSpawn);
    readonly itemPackage: ItemPackage;
}
