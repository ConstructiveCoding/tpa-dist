import { ILogPlayerMakeGroggy } from '../../..';
import { Character } from '../objects/character';
import { TelemetryEvent } from './telemetryEvent';
export declare class PlayerMakeGroggy extends TelemetryEvent {
    private _attackId;
    private _attacker;
    private _victim;
    private _damageReason;
    private _damageTypeCategory;
    private _damageCauserName;
    private _distance;
    private _isAttackerInVehicle;
    private _dBNOId;
    constructor(event: ILogPlayerMakeGroggy);
    readonly attackId: number;
    readonly attacker: Character;
    readonly victim: Character;
    readonly damageReason: string;
    readonly damageTypeCategory: string;
    readonly damageCauserName: string;
    readonly distance: number;
    readonly isAttackerInVehicle: boolean;
    readonly dBNOId: number;
}
