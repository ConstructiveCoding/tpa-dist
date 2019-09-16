import { ILogPlayerKill } from '../../..';
import { Character } from '../objects/character';
import { TelemetryEvent } from './telemetryEvent';
export declare class PlayerKill extends TelemetryEvent {
    private _attackId;
    private _killer;
    private _victim;
    private _damageReason;
    private _damageTypeCategory;
    private _damageCauserName;
    private _distance;
    constructor(event: ILogPlayerKill);
    readonly attackId: number;
    readonly killer: Character;
    readonly victim: Character;
    readonly damageReason: string;
    readonly damageTypeCategory: string;
    readonly damageCauserName: string;
    readonly distance: number;
}
