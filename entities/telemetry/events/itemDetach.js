"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const item_1 = require("../objects/item");
const telemetryEvent_1 = require("./telemetryEvent");
class ItemDetach extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._character = new character_1.Character(event.character);
        this._parentItem = new item_1.Item(event.parentItem);
        this._childItem = new item_1.Item(event.childItem);
    }
    get character() {
        return this._character;
    }
    get parentItem() {
        return this._parentItem;
    }
    get childItem() {
        return this._childItem;
    }
}
exports.ItemDetach = ItemDetach;
//# sourceMappingURL=itemDetach.js.map