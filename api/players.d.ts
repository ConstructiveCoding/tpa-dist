import { AxiosPromise } from 'axios';
import { IPlayer, IPlayerList, IPlayerSeason } from '..';
import { PubgAPIEndpoint } from './base';
export declare class PlayersPubgAPI extends PubgAPIEndpoint {
    get(id: string): AxiosPromise<IPlayer>;
    getSeasonStats(playerId: string, seasonId: string): AxiosPromise<IPlayerSeason>;
    listByID(playerIDs: string[]): AxiosPromise<IPlayerList>;
    listByName(playerNames: string[]): AxiosPromise<IPlayerList>;
}
