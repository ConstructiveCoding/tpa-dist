import { IItem } from '../../..';
export declare class Item {
    private _itemId;
    private _stackCount;
    private _category;
    private _subCategory;
    private _attachedItems;
    constructor(item: IItem);
    readonly itemId: string;
    readonly stackCount: number;
    readonly category: string;
    readonly subCategory: string;
    readonly attachedItems: string[];
}
