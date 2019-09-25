"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const constants_1 = require("../shared/constants");
/**
 * Instances of this class will be used to make authenticated requests to the PUBG API.
 *
 * Instantiate this by providing your API key and the PlatformRegion.
 *
 * It accepts an optional `useGzip` option which, if set to true, requests that the server
 * compress its response using gzip. This can improve performance for large responses such as
 * matches.
 * The `useGzip` option must NOT be set to true if using a browser to send requests as it handles
 * the `Accept-Encoding` header by itself.
 */
class PubgAPI {
    constructor(apiKey, platformRegion, useGzip = false) {
        this._apiKey = apiKey;
        this._platformRegion = platformRegion;
        const headers = {
            'Authorization': `Bearer ${this._apiKey}`,
            'Accept': 'application/json',
        };
        if (useGzip) {
            headers['Accept-Encoding'] = 'gzip';
        }
        const baseURL = platformRegion === constants_1.PlatformRegion.NULL ? 'https://api.playbattlegrounds.com/' : `https://api.playbattlegrounds.com/shards/${this._platformRegion}/`;
        console.log(`Creating API with baseURL: ${baseURL}`);
        this._axios = axios_1.default.create({
            baseURL,
            headers,
        });
    }
    /**
     * The AxiosInstance used to make authenticated API requests.
     */
    get axios() {
        return this._axios;
    }
    /**
     * Platform and Region associated with this API instance.
     */
    get platformRegion() {
        return this._platformRegion;
    }
}
exports.PubgAPI = PubgAPI;
class PubgAPIEndpoint {
    constructor(api) {
        this._api = api;
    }
    get api() {
        return this._api;
    }
}
exports.PubgAPIEndpoint = PubgAPIEndpoint;
//# sourceMappingURL=base.js.map