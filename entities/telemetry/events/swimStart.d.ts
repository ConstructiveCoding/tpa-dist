import { ILogSwimStart } from '../../..';
import { Character } from '../objects/character';
import { TelemetryEvent } from './telemetryEvent';
export declare class SwimStart extends TelemetryEvent {
    private _character;
    constructor(event: ILogSwimStart);
    readonly character: Character;
}
