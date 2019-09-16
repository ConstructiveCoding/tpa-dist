import { IRoster } from '..';
import { Participant } from './participant';
export declare class Roster {
    private _id;
    private _hasWon;
    private _rank;
    private _teamId;
    private _participants;
    constructor(roster: IRoster);
    readonly id: string;
    readonly hasWon: boolean;
    readonly rank: number;
    readonly teamId: number;
    readonly participants: Participant[];
}
