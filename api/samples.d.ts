import { AxiosPromise } from 'axios';
import { ISample } from '..';
import { PubgAPIEndpoint } from './base';
export declare class SamplesPubgAPI extends PubgAPIEndpoint {
    get(dateStart?: Date): AxiosPromise<ISample>;
}
