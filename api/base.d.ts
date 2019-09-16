import { AxiosInstance } from 'axios';
import { PlatformRegion } from '../shared/constants';
/**
 * Instances of this class will be used to make authenticated requests to the PUBG API.
 *
 * Instantiate this by providing your API key and the PlatformRegion.
 *
 * It accepts an optional `useGzip` option which, if set to true, requests that the server
 * compress its response using gzip. This can improve performance for large responses such as
 * matches.
 * The `useGzip` option must NOT be set to true if using a browser to send requests as it handles
 * the `Accept-Encoding` header by itself.
 */
export declare class PubgAPI {
    private _axios;
    private _apiKey;
    private _platformRegion;
    constructor(apiKey: string, platformRegion: PlatformRegion, useGzip?: boolean);
    /**
     * The AxiosInstance used to make authenticated API requests.
     */
    readonly axios: AxiosInstance;
    /**
     * Platform and Region associated with this API instance.
     */
    readonly platformRegion: PlatformRegion;
}
export declare abstract class PubgAPIEndpoint {
    private _api;
    constructor(api: PubgAPI);
    readonly api: PubgAPI;
}
