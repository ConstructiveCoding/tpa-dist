import { GameModeStats, IPlayerSeason, PubgAPI } from '..';
/**
 * Statistics for a player in a given season.
 *
 * Initialize this by calling the `get` method with an instance of `PubgAPI`, a player ID and
 * a season ID.
 *
 * The returned instance of this class will contain, for each game mode, the stats and a list of
 * Match IDs.
 */
export declare class PlayerSeason {
    private _playerId;
    private _seasonId;
    private _duoFPPStats;
    private _duoStats;
    private _duoMatchIds;
    private _duoFPPMatchIds;
    private _soloFPPStats;
    private _soloStats;
    private _soloMatchIds;
    private _soloFPPMatchIds;
    private _squadFPPStats;
    private _squadStats;
    private _squadMatchIds;
    private _squadFPPMatchIds;
    private constructor();
    static get(api: PubgAPI, playerId: string, seasonId: string): Promise<PlayerSeason>;
    static fromSeasonData(seasonData: IPlayerSeason): PlayerSeason;
    readonly playerId: string;
    readonly seasonId: string;
    readonly duoFPPStats: GameModeStats;
    readonly duoStats: GameModeStats;
    readonly duoMatchIds: string[];
    readonly duoFPPMatchIds: string[];
    readonly soloFPPStats: GameModeStats;
    readonly soloStats: GameModeStats;
    readonly soloMatchIds: string[];
    readonly soloFPPMatchIds: string[];
    readonly squadFPPStats: GameModeStats;
    readonly squadStats: GameModeStats;
    readonly squadMatchIds: string[];
    readonly squadFPPMatchIds: string[];
}
