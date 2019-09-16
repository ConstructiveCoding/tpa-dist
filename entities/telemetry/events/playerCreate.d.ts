import { ILogPlayerCreate } from '../../..';
import { Character } from '../objects/character';
import { TelemetryEvent } from './telemetryEvent';
export declare class PlayerCreate extends TelemetryEvent {
    private _character;
    constructor(event: ILogPlayerCreate);
    readonly character: Character;
}
