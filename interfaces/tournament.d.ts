import { IAPIObject, ISimpleAPIObject } from './common';
export interface ITournamentListResponseAttributes {
    createdAt: string;
}
export interface ITournamentListResponseData extends IAPIObject<ITournamentListResponseAttributes> {
}
export interface ITournamentListResponse {
    data: ITournamentListResponseData[];
    links: {
        self: string;
    };
    meta: {};
}
export interface IIncludedMatchAttributes {
    createdAt: string;
}
export interface IIncludedMatch extends IAPIObject<IIncludedMatchAttributes> {
}
export interface ITournament {
    data: {
        type: string;
        id: string;
        relationships: {
            matches: {
                data: ISimpleAPIObject[];
            };
        };
    };
    included: IIncludedMatch[];
    links: {
        self: string;
    };
    meta: {};
}
