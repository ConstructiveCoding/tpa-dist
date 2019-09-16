import { ILogSwimEnd } from '../../..';
import { Character } from '../objects/character';
import { TelemetryEvent } from './telemetryEvent';
export declare class SwimEnd extends TelemetryEvent {
    private _character;
    private _swimDistance;
    constructor(event: ILogSwimEnd);
    readonly character: Character;
    readonly swimDistance: number;
}
