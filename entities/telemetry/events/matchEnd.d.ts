import { ILogMatchEnd } from '../../..';
import { Character } from '../objects/character';
import { TelemetryEvent } from './telemetryEvent';
export declare class MatchEnd extends TelemetryEvent {
    private _characters;
    constructor(event: ILogMatchEnd);
    readonly characters: Character[];
}
