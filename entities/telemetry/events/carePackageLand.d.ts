import { ILogCarePackageLand } from '../../..';
import { ItemPackage } from '../objects/itemPackage';
import { TelemetryEvent } from './telemetryEvent';
export declare class CarePackageLand extends TelemetryEvent {
    private _itemPackage;
    constructor(event: ILogCarePackageLand);
    readonly itemPackage: ItemPackage;
}
