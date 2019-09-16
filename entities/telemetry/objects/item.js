"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(item) {
        this._itemId = item.itemId;
        this._stackCount = item.stackCount;
        this._category = item.category;
        this._subCategory = item.subCategory;
        this._attachedItems = item.attachedItems;
    }
    get itemId() {
        return this._itemId;
    }
    get stackCount() {
        return this._stackCount;
    }
    get category() {
        return this._category;
    }
    get subCategory() {
        return this._subCategory;
    }
    get attachedItems() {
        return this._attachedItems;
    }
}
exports.Item = Item;
//# sourceMappingURL=item.js.map