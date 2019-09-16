import { ILogItemEquip } from '../../..';
import { Character } from '../objects/character';
import { Item } from '../objects/item';
import { TelemetryEvent } from './telemetryEvent';
export declare class ItemEquip extends TelemetryEvent {
    private _character;
    private _item;
    constructor(event: ILogItemEquip);
    readonly character: Character;
    readonly item: Item;
}
