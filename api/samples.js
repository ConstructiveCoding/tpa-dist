"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class SamplesPubgAPI extends base_1.PubgAPIEndpoint {
    get(dateStart) {
        if (dateStart) {
            return this.api.axios.get('/samples', { params: { 'filter[createdAt-start]': dateStart.toISOString() } });
        }
        else {
            return this.api.axios.get('/samples');
        }
    }
}
exports.SamplesPubgAPI = SamplesPubgAPI;
//# sourceMappingURL=samples.js.map