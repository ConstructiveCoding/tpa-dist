import { AxiosPromise } from 'axios';
import { ISeasonList } from '..';
import { PubgAPIEndpoint } from './base';
export declare class SeasonsPubgAPI extends PubgAPIEndpoint {
    list(): AxiosPromise<ISeasonList>;
}
