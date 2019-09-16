import { ICharacter } from '../../..';
import { Location } from './location';
export declare class Character {
    private _name;
    private _teamId;
    private _health;
    private _location;
    private _ranking;
    private _accountId;
    constructor(character: ICharacter);
    readonly name: string;
    readonly teamId: number;
    readonly health: number;
    readonly location: Location;
    readonly ranking: number;
    readonly accountId: string;
}
