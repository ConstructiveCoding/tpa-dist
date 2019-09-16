import { IBaseTelemetryEvent } from '../../..';
export declare abstract class TelemetryEvent {
    private _D;
    protected constructor(event: IBaseTelemetryEvent);
    readonly dateTime: Date;
}
