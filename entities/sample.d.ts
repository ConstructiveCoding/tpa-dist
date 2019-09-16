import { ISample, PlatformRegion, PubgAPI } from '..';
/**
 * A list of sample match IDs.
 */
export declare class Sample {
    private _id;
    private _dateCreated;
    private _shardId;
    private _matchIds;
    private constructor();
    static get(api: PubgAPI, fromDate?: Date): Promise<Sample>;
    static fromDetail(matchDetail: ISample): Sample;
    readonly id: string;
    readonly dateCreated: Date;
    readonly shardId: PlatformRegion;
    readonly matchIds: string[];
}
