import { ILogPlayerAttack } from '../../..';
import { Character } from '../objects/character';
import { Item } from '../objects/item';
import { Vehicle } from '../objects/vehicle';
import { TelemetryEvent } from './telemetryEvent';
export declare class PlayerAttack extends TelemetryEvent {
    private _attackId;
    private _attacker;
    private _attackType;
    private _fireWeaponStackCount;
    private _weapon;
    private _vehicle?;
    constructor(event: ILogPlayerAttack);
    readonly attackId: number;
    readonly attacker: Character;
    readonly attackType: string;
    readonly fireWeaponStackCount: number;
    readonly weapon: Item;
    readonly vehicle: Vehicle | undefined;
}
