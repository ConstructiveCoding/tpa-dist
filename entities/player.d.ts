import { IPlayer, IPlayerList, PubgAPI } from '..';
/**
 * A PUBG Player.
 *
 * Contains basic info about a Player, such as ID and name.
 *
 * To retrieve details on the Matches this player took part in, see `Match` class.
 */
export declare class Player {
    private _id;
    private _name;
    private _shardId;
    private _matchIds;
    private constructor();
    /**
     * Fetch a Player from PUBG API.
     *
     * Returns a `Promise` of the corresponding instance of the `Player` class.
     *
     * To retrieve a `Player`, **await** on the result of this method.
     *
     * @param api instance of `PubgAPI` that will be used to make the API request
     * @param playerId ID of the player to retrieve
     */
    static get(api: PubgAPI, playerId: string): Promise<Player>;
    /**
     * Fetch a list of Players from PUBG API given a list of player IDs as input.
     *
     * Returns a `Promise` of a list of `Player` instances of players with the given IDs.
     *
     * To retrieve a list of `Player`s, **await** on the result of this method.
     *
     * @param api instance of `PubgAPI` that will be used to make the API request
     * @param playerIds list of player IDs
     */
    static filterById(api: PubgAPI, playerIds: string[]): Promise<Player[]>;
    /**
     * Fetch a list of Players from PUBG API, given a list of player names as input.
     *
     * Returns a `Promise` of a list of `Player` instances of players with the given names.
     *
     * To retrieve a list of `Player`s, **await** on the result of this method.
     *
     * @param api instance of `PubgAPI` that will be used to make the API request
     * @param playerNames list of player names
     */
    static filterByName(api: PubgAPI, playerNames: string[]): Promise<Player[]>;
    /**
     * Create and return a Player instance from an API player detail reply.
     * @param playerDetail Player resource as returned from PUBG API
     */
    static fromDetail(playerDetail: IPlayer): Player;
    /**
     * Create and return a list of Player instances from an API player list reply.
     * @param playerList PlayerList resource as returned from PUBG API
     */
    static fromList(playerList: IPlayerList): Player[];
    /**
     * Player ID.
     */
    readonly id: string;
    /**
     * Player name.
     */
    readonly name: string;
    /**
     * List of match IDs this player took part in.
     * This list is ordered from most recent to oldest.
     */
    readonly matchIds: string[];
}
