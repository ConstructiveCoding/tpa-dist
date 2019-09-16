import { ILogItemPickup } from '../../..';
import { Character } from '../objects/character';
import { Item } from '../objects/item';
import { TelemetryEvent } from './telemetryEvent';
export declare class ItemPickup extends TelemetryEvent {
    private _character;
    private _item;
    constructor(event: ILogItemPickup);
    readonly character: Character;
    readonly item: Item;
}
