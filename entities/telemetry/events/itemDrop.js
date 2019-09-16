"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const character_1 = require("../objects/character");
const item_1 = require("../objects/item");
const telemetryEvent_1 = require("./telemetryEvent");
class ItemDrop extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._character = new character_1.Character(event.character);
        this._item = new item_1.Item(event.item);
    }
    get character() {
        return this._character;
    }
    get item() {
        return this._item;
    }
}
exports.ItemDrop = ItemDrop;
//# sourceMappingURL=itemDrop.js.map