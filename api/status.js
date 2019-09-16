"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class StatusPubgAPI {
    constructor() {
        this._axios = axios_1.default.create({
            baseURL: `https://api.playbattlegrounds.com/`,
        });
    }
    get() {
        return this._axios.get(`/status`);
    }
}
exports.StatusPubgAPI = StatusPubgAPI;
//# sourceMappingURL=status.js.map