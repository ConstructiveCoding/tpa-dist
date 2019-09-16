import { IItemPackage } from '../../..';
import { Item } from './item';
import { Location } from './location';
export declare class ItemPackage {
    private _itemPackageId;
    private _location;
    private _items;
    constructor(itemPackage: IItemPackage);
    readonly itemPackageId: string;
    readonly location: Location;
    readonly items: Item[];
}
