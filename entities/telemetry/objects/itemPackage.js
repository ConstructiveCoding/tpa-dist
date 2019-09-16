"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("./item");
const location_1 = require("./location");
class ItemPackage {
    constructor(itemPackage) {
        this._items = [];
        this._itemPackageId = itemPackage.itemPackageId;
        this._location = new location_1.Location(itemPackage.location);
        this._items = itemPackage.items.map(item => new item_1.Item(item));
    }
    get itemPackageId() {
        return this._itemPackageId;
    }
    get location() {
        return this._location;
    }
    get items() {
        return this._items;
    }
}
exports.ItemPackage = ItemPackage;
//# sourceMappingURL=itemPackage.js.map