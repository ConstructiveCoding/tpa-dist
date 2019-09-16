import { ILogGameStatePeriodic } from '../../..';
import { GameState } from '../objects/gameState';
import { TelemetryEvent } from './telemetryEvent';
export declare class GameStatePeriodic extends TelemetryEvent {
    private _gameState;
    constructor(event: ILogGameStatePeriodic);
    readonly gameState: GameState;
}
