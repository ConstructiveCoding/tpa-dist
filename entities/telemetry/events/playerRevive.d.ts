import { ILogPlayerRevive } from '../../..';
import { Character } from '../objects/character';
import { TelemetryEvent } from './telemetryEvent';
export declare class PlayerRevive extends TelemetryEvent {
    private _reviver;
    private _victim;
    constructor(event: ILogPlayerRevive);
    readonly reviver: Character;
    readonly victim: Character;
}
