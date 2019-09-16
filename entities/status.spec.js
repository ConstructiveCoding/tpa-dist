"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("mocha");
const __1 = require("..");
/* tslint:disable */
const API_RESPONSE = {
    "data": {
        "type": "status",
        "id": "pubg-api",
        "ping": 20
    }
};
/* tslint:enable */
describe('Status entity', () => {
    it('should initialize Status object from response', () => {
        const status = __1.Status.fromDetail(API_RESPONSE);
        chai_1.expect(status.id).to.equal('pubg-api');
        chai_1.expect(status.type).to.equal('status');
        chai_1.expect(status.ping).to.equal(20);
    });
});
//# sourceMappingURL=status.spec.js.map