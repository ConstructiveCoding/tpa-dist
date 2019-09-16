import { ILogMatchStart } from '../../..';
import { Character } from '../objects/character';
import { TelemetryEvent } from './telemetryEvent';
export declare class MatchStart extends TelemetryEvent {
    private _mapName;
    private _weatherId;
    private _characters;
    private _cameraViewBehaviour;
    private _teamSize;
    private _isCustomGame;
    private _isEventMode;
    private _blueZoneCustomOptions;
    constructor(event: ILogMatchStart);
    readonly mapName: string;
    readonly weatherId: string;
    readonly characters: Character[];
    readonly cameraViewBehaviour: string;
    readonly teamSize: number;
    readonly isCustomGame: boolean;
    readonly isEventMode: boolean;
    readonly blueZoneCustomOptions: string;
}
