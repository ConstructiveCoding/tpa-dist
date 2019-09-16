import { AxiosPromise } from 'axios';
import { Asset, ITelemetry } from '..';
import { PubgAPIEndpoint } from './base';
export declare class TelemetryPubgAPI extends PubgAPIEndpoint {
    get(arg: Asset | string): AxiosPromise<ITelemetry>;
}
