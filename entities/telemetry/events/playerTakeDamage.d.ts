import { ILogPlayerTakeDamage } from '../../..';
import { Character } from '../objects/character';
import { TelemetryEvent } from './telemetryEvent';
export declare class PlayerTakeDamage extends TelemetryEvent {
    private _attackId;
    private _attacker?;
    private _victim;
    private _damageTypeCategory;
    private _damageCauserName;
    private _damageReason;
    private _damage;
    constructor(event: ILogPlayerTakeDamage);
    readonly attackId: number;
    readonly attacker: Character | undefined;
    readonly victim: Character;
    readonly damageTypeCategory: string;
    readonly damageCauserName: string;
    readonly damageReason: string;
    readonly damage: number;
}
