import { IStatus, PubgAPI } from '..';
/**
 * The status of the api
 */
export declare class Status {
    private _id;
    private _ping;
    private _type;
    private constructor();
    static get(api: PubgAPI): Promise<Status>;
    static fromDetail(statusDetail: IStatus): Status;
    readonly id: string;
    readonly ping: number;
    readonly type: string;
}
