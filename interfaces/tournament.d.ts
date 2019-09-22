import { IAPIObject, ISimpleAPIObject } from './common';
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
