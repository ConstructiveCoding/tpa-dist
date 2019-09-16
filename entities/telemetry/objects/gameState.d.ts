import { IGameState } from '../../..';
import { Location } from './location';
export declare class GameState {
    private _elapsedTime;
    private _numAliveTeams;
    private _numJoinPlayers;
    private _numAlivePlayers;
    private _safetyZonePosition;
    private _safetyZoneRadius;
    private _poisonGasWarningPosition;
    private _poisonGasWarningRadius;
    private _redZonePosition;
    private _redZoneRadius;
    constructor(gs: IGameState);
    readonly elapsedTime: number;
    readonly numAliveTeams: number;
    readonly numJoinPlayers: number;
    readonly numAlivePlayers: number;
    readonly safetyZonePosition: Location;
    readonly safetyZoneRadius: number;
    readonly poisonGasWarningPosition: Location;
    readonly poisonGasWarningRadius: number;
    readonly redZonePosition: Location;
    readonly redZoneRadius: number;
}
