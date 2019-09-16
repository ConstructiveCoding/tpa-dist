import { ILogPlayerPosition } from '../../..';
import { Vehicle } from '../objects';
import { Character } from '../objects/character';
import { TelemetryEvent } from './telemetryEvent';
export declare class PlayerPosition extends TelemetryEvent {
    private _character;
    private _elapsedTime;
    private _numAlivePlayers;
    private _vehicle?;
    constructor(event: ILogPlayerPosition);
    readonly character: Character;
    readonly elapsedTime: number;
    readonly numAlivePlayers: number;
    readonly vehicle: Vehicle | undefined;
}
