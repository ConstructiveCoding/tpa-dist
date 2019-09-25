import { ITournament, PubgAPI } from '..';
/**
 * A PUBG Tournament
 *
 * Contains a list of matches associated with a tournament
 */
export declare class Tournament {
    static list(api: PubgAPI): Promise<import("axios").AxiosResponse<import("../interfaces/tournament").ITournamentListResponse>>;
    static get(api: PubgAPI, tournamentId: string): Promise<import("axios").AxiosResponse<ITournament>>;
}
