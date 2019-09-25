import { AxiosPromise } from 'axios';
import { ITournament, ITournamentListResponse } from '../interfaces/tournament';
import { PubgAPIEndpoint } from './base';
export declare class TournamentPubgAPI extends PubgAPIEndpoint {
    list(): AxiosPromise<ITournamentListResponse>;
    get(id: string): AxiosPromise<ITournament>;
}
