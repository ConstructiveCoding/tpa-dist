import { ILogArmorDestroy } from '../../..';
import { Character } from '../objects/character';
import { Item } from '../objects/item';
import { TelemetryEvent } from './telemetryEvent';
export declare class ArmorDestroy extends TelemetryEvent {
    private _attackId;
    private _attacker;
    private _victim;
    private _damageTypeCategory;
    private _damageReason;
    private _damageCauserName;
    private _item;
    private _distance;
    constructor(event: ILogArmorDestroy);
    readonly attackId: number;
    readonly attacker: Character;
    readonly victim: Character;
    readonly damageTypeCategory: string;
    readonly damageReason: string;
    readonly damageCauserName: string;
    readonly item: Item;
    readonly distance: number;
}
