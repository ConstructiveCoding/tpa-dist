import { ILogItemDetach } from '../../..';
import { Character } from '../objects/character';
import { Item } from '../objects/item';
import { TelemetryEvent } from './telemetryEvent';
export declare class ItemDetach extends TelemetryEvent {
    private _character;
    private _parentItem;
    private _childItem;
    constructor(event: ILogItemDetach);
    readonly character: Character;
    readonly parentItem: Item;
    readonly childItem: Item;
}
