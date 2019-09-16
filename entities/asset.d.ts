import { IAsset } from '..';
export declare class Asset {
    private _id;
    private _url;
    private _dateCreated;
    constructor(asset: IAsset);
    /**
     * Asset ID
     */
    readonly id: string;
    /**
     * Link to the telemetry.json file
     */
    readonly url: string;
    /**
     * Time of telemetry creation
     */
    readonly dateCreated: Date;
}
