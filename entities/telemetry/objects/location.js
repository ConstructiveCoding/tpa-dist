"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Location {
    constructor(loc) {
        this._x = loc.x;
        this._y = loc.y;
        this._z = loc.z;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get z() {
        return this._z;
    }
}
exports.Location = Location;
//# sourceMappingURL=location.js.map