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
 * The status of the api
 */
class Status {
    constructor(statusData) {
        this._id = statusData.data.id;
        this._ping = statusData.data.ping;
        this._type = statusData.data.type;
    }
    static get(api) {
        return __awaiter(this, void 0, void 0, function* () {
            const statusAPI = new __1.StatusPubgAPI();
            const startDate = new Date();
            const statusData = yield statusAPI.get();
            const ping = (new Date().getTime() - startDate.getTime());
            statusData.data.data.ping = ping;
            return Status.fromDetail(statusData.data);
        });
    }
    static fromDetail(statusDetail) {
        return new Status(statusDetail);
    }
    get id() {
        return this._id;
    }
    get ping() {
        return this._ping;
    }
    get type() {
        return this._type;
    }
}
exports.Status = Status;
//# sourceMappingURL=status.js.map