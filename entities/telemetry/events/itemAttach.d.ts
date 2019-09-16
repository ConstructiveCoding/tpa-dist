import { ILogItemAttach } from '../../..';
import { Character } from '../objects/character';
import { Item } from '../objects/item';
import { TelemetryEvent } from './telemetryEvent';
export declare class ItemAttach extends TelemetryEvent {
    private _character;
    private _parentItem;
    private _childItem;
    constructor(event: ILogItemAttach);
    readonly character: Character;
    readonly parentItem: Item;
    readonly childItem: Item;
}
