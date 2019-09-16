import { ILogPlayerLogin } from '../../..';
import { TelemetryEvent } from './telemetryEvent';
export declare class PlayerLogin extends TelemetryEvent {
    private _accountId;
    constructor(event: ILogPlayerLogin);
    readonly accountId: string;
}
