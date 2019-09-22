import { AxiosPromise } from 'axios';
import { ITournament } from '../interfaces/tournament';
import { PubgAPIEndpoint } from './base';
export declare class TournamentPubgAPI extends PubgAPIEndpoint {
    get(id: string): AxiosPromise<ITournament>;
}
