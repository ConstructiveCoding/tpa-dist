"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Asset {
    constructor(asset) {
        this._id = asset.id;
        this._url = asset.attributes.URL;
        this._dateCreated = new Date(asset.attributes.createdAt);
    }
    /**
     * Asset ID
     */
    get id() {
        return this._id;
    }
    /**
     * Link to the telemetry.json file
     */
    get url() {
        return this._url;
    }
    /**
     * Time of telemetry creation
     */
    get dateCreated() {
        return this._dateCreated;
    }
}
exports.Asset = Asset;
//# sourceMappingURL=asset.js.map