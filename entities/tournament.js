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
 * A PUBG Tournament
 *
 * Contains a list of matches associated with a tournament
 */
class Tournament {
    static get(api, tournamentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const tournamentsAPI = new __1.TournamentPubgAPI(api);
            const tournamentData = yield tournamentsAPI.get(tournamentId);
            console.log(tournamentId);
        });
    }
}
exports.Tournament = Tournament;
//# sourceMappingURL=tournament.js.map