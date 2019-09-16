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
 * A PUBG Season.
 *
 * Contains ID and info on a Season. The season has an ID and two boolean values that indicate
 * whether or not it is the current season or if it is off-season.
 *
 * Use the `list` static method to get a list of all the seasons.
 */
class Season {
    constructor(season) {
        this._id = season.id;
        this._isCurrentSeason = season.attributes.isCurrentSeason;
        this._isOffSeason = season.attributes.isOffseason;
    }
    /**
     * Return a complete list of Season objects from PUBG API.
     *
     * @param api instance of `PubgAPI` that will be used to make the API request
     */
    static list(api) {
        return __awaiter(this, void 0, void 0, function* () {
            const seasonsAPI = new __1.SeasonsPubgAPI(api);
            const seasonsData = yield seasonsAPI.list();
            return Season.fromList(seasonsData.data);
        });
    }
    static fromList(seasonList) {
        const seasons = [];
        seasonList.data.forEach(season => {
            seasons.push(new Season(season));
        });
        return seasons;
    }
    get id() {
        return this._id;
    }
    /**
     * Indicates if the season is active.
     */
    get isCurrentSeason() {
        return this._isCurrentSeason;
    }
    /**
     * Indicates if the season is not active.
     */
    get isOffSeason() {
        return this._isOffSeason;
    }
}
exports.Season = Season;
//# sourceMappingURL=season.js.map