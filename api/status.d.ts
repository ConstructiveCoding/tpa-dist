import { AxiosPromise } from 'axios';
import { IStatus } from '..';
export declare class StatusPubgAPI {
    private _axios;
    constructor();
    get(): AxiosPromise<IStatus>;
}
