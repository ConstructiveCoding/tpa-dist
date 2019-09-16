import { ILogItemUse } from '../../..';
import { Character } from '../objects/character';
import { Item } from '../objects/item';
import { TelemetryEvent } from './telemetryEvent';
export declare class ItemUse extends TelemetryEvent {
    private _character;
    private _item;
    constructor(event: ILogItemUse);
    readonly character: Character;
    readonly item: Item;
}
