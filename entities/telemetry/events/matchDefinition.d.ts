import { ILogMatchDefinition, SeasonState } from '../../..';
import { TelemetryEvent } from './telemetryEvent';
export declare class MatchDefinition extends TelemetryEvent {
    private _matchId;
    private _pingQuality;
    private _seasonState;
    constructor(event: ILogMatchDefinition);
    readonly matchId: string;
    readonly pingQuality: string;
    readonly seasonState: SeasonState;
}
