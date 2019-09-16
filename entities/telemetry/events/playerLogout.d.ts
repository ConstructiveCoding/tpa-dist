import { ILogPlayerLogout } from '../../..';
import { TelemetryEvent } from './telemetryEvent';
export declare class PlayerLogout extends TelemetryEvent {
    private _accountId;
    constructor(event: ILogPlayerLogout);
    readonly accountId: string;
}
