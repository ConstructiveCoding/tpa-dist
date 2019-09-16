import { ILogItemUnequip } from '../../..';
import { Character } from '../objects/character';
import { Item } from '../objects/item';
import { TelemetryEvent } from './telemetryEvent';
export declare class ItemUnequip extends TelemetryEvent {
    private _character;
    private _item;
    constructor(event: ILogItemUnequip);
    readonly character: Character;
    readonly item: Item;
}
