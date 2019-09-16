"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const __1 = require("..");
const sample_1 = require("./sample");
/* tslint:disable */
const API_RESPONSE = {
    "data": {
        "type": "sample",
        "id": "258d93e8-9250-467b-84e0-13444d3e4080",
        "attributes": {
            "createdAt": "2018-04-25T23:57:50Z",
            "titleId": "bluehole-pubg",
            "shardId": "pc-na"
        },
        "relationships": {
            "matches": {
                "data": [
                    {
                        "type": "match",
                        "id": "83f01a5f-9664-4e4d-be60-f6a5ba332f40"
                    },
                    {
                        "type": "match",
                        "id": "81dff04f-115c-4edd-b2ef-ba9eafeb683d"
                    },
                    {
                        "type": "match",
                        "id": "db4c21ef-84c7-4bdb-97a4-2f4a6f40361a"
                    }
                    // *snip*
                ]
            }
        }
    }
};
/* tslint:enable */
describe('Sample entity', () => {
    it('should initialize Sample object from response', () => {
        const sample = sample_1.Sample.fromDetail(API_RESPONSE);
        chai_1.expect(sample.id).to.equal('258d93e8-9250-467b-84e0-13444d3e4080');
        chai_1.expect(sample.dateCreated).to.deep.equal(new Date('2018-04-25T23:57:50Z'));
        chai_1.expect(sample.shardId).to.equal(__1.PlatformRegion.PC_NA);
        chai_1.expect(sample.matchIds).to.eql([
            '83f01a5f-9664-4e4d-be60-f6a5ba332f40',
            '81dff04f-115c-4edd-b2ef-ba9eafeb683d',
            'db4c21ef-84c7-4bdb-97a4-2f4a6f40361a',
        ]);
    });
});
//# sourceMappingURL=sample.spec.js.map