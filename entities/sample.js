"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
/**
 * A list of sample match IDs.
 */
class Sample {
    constructor(sampleData) {
        this._id = sampleData.data.id;
        this._dateCreated = new Date(sampleData.data.attributes.createdAt);
        this._shardId = sampleData.data.attributes.shardId;
        const matchIds = [];
        sampleData.data.relationships.matches.data.forEach(matchData => {
            matchIds.push(matchData.id);
        });
        this._matchIds = matchIds;
    }
    static get(api, fromDate) {
        return __awaiter(this, void 0, void 0, function* () {
            const samplesAPI = new __1.SamplesPubgAPI(api);
            const samplesData = yield samplesAPI.get(fromDate);
            return Sample.fromDetail(samplesData.data);
        });
    }
    static fromDetail(matchDetail) {
        return new Sample(matchDetail);
    }
    get id() {
        return this._id;
    }
    get dateCreated() {
        return this._dateCreated;
    }
    get shardId() {
        return this._shardId;
    }
    get matchIds() {
        return this._matchIds;
    }
}
exports.Sample = Sample;
//# sourceMappingURL=sample.js.map