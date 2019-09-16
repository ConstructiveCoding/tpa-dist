import { ISeasonList, PubgAPI } from '..';
/**
 * A PUBG Season.
 *
 * Contains ID and info on a Season. The season has an ID and two boolean values that indicate
 * whether or not it is the current season or if it is off-season.
 *
 * Use the `list` static method to get a list of all the seasons.
 */
export declare class Season {
    private _id;
    private _isCurrentSeason;
    private _isOffSeason;
    private constructor();
    /**
     * Return a complete list of Season objects from PUBG API.
     *
     * @param api instance of `PubgAPI` that will be used to make the API request
     */
    static list(api: PubgAPI): Promise<Season[]>;
    static fromList(seasonList: ISeasonList): Season[];
    readonly id: string;
    /**
     * Indicates if the season is active.
     */
    readonly isCurrentSeason: boolean;
    /**
     * Indicates if the season is not active.
     */
    readonly isOffSeason: boolean;
}
