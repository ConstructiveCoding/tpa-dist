"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemPackage_1 = require("../objects/itemPackage");
const telemetryEvent_1 = require("./telemetryEvent");
class CarePackageLand extends telemetryEvent_1.TelemetryEvent {
    constructor(event) {
        super(event);
        this._itemPackage = new itemPackage_1.ItemPackage(event.itemPackage);
    }
    get itemPackage() {
        return this._itemPackage;
    }
}
exports.CarePackageLand = CarePackageLand;
//# sourceMappingURL=carePackageLand.js.map