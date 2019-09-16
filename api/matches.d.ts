import { AxiosPromise } from 'axios';
import { IMatch } from '..';
import { PubgAPIEndpoint } from './base';
export declare class MatchesPubgAPI extends PubgAPIEndpoint {
    get(id: string): AxiosPromise<IMatch>;
}
