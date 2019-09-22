import { PubgAPI } from '..';
/**
 * A PUBG Tournament
 *
 * Contains a list of matches associated with a tournament
 */
export declare class Tournament {
    static get(api: PubgAPI, tournamentId: string): Promise<void>;
}
