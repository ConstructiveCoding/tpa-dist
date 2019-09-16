import { ILogItemDrop } from '../../..';
import { Character } from '../objects/character';
import { Item } from '../objects/item';
import { TelemetryEvent } from './telemetryEvent';
export declare class ItemDrop extends TelemetryEvent {
    private _character;
    private _item;
    constructor(event: ILogItemDrop);
    readonly character: Character;
    readonly item: Item;
}
