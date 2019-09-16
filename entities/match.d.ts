import { Asset, GameMode, IMatch, MapName, Participant, PlatformRegion, PubgAPI, Roster, SeasonState, Telemetry } from '..';
/**
 * A PUBG Match.
 *
 * Contains information and statistics on a Match, such as date, duration, map, participants
 * and teams.
 */
export declare class Match {
    private _id;
    private _dateCreated;
    private _duration;
    private _gameMode;
    private _isCustomMatch;
    private _map;
    private _patchVersion;
    private _seasonState;
    private _shardId;
    private _participants;
    private _rosters;
    private _asset?;
    private constructor();
    static get(api: PubgAPI, matchId: string): Promise<Match>;
    static fromDetail(matchDetail: IMatch): Match;
    /**
     * Match ID
     */
    readonly id: string;
    /**
     * Time this match object was stored in the API
     */
    readonly dateCreated: Date;
    /**
     * Length of the match
     */
    readonly duration: number;
    /**
     * Game mode played
     */
    readonly gameMode: GameMode;
    readonly isCustomMatch: boolean;
    readonly map: MapName;
    readonly patchVersion: string | undefined;
    readonly seasonState: SeasonState;
    readonly shardId: PlatformRegion;
    /**
     * The Asset object linked to this Match. Contains the URL for telemetry data.
     */
    readonly asset: Asset;
    /**
     * A list of `Participant` objects, one for each player that took part in the Match.
     */
    readonly participants: Participant[];
    /**
     * A list of `Roster` objects, one for each team that played the Match.
     */
    readonly rosters: Roster[];
    /**
     * Return the Participant object with the given ID or undefined if not found.
     * @param id ID of the player to search
     */
    getParticipantById(id: string): Participant | undefined;
    /**
     * Return the Participant object with the given name or undefined if not found.
     * @param name name of the player to search
     */
    getParticipantByName(name: string): Participant | undefined;
    /**
     * Return a list of the Participants that won this match.
     */
    getWinners(): Participant[];
    getTelemetry(api: PubgAPI): Promise<Telemetry>;
}
