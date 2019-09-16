import { DeathType, IParticipant } from '..';
export declare class Participant {
    private _id;
    private _DBNOs;
    private _assists;
    private _boosts;
    private _damageDealt;
    private _deathType;
    private _headshotKills;
    private _heals;
    private _killPlace;
    private _killPoints?;
    private _killPointsDelta?;
    private _killStreaks;
    private _kills;
    private _lastKillPoints;
    private _lastWinPoints;
    private _longestKill;
    private _mostDamage;
    private _name;
    private _playerId;
    private _revives;
    private _rideDistance;
    private _roadKills;
    private _swimDistance;
    private _teamKills;
    private _timeSurvived;
    private _vehicleDestroys;
    private _walkDistance;
    private _weaponsAcquired;
    private _winPlace;
    private _winPoints?;
    private _winPointsDelta?;
    constructor(participant: IParticipant);
    readonly id: string;
    /**
     * Number of times this participant was downed
     */
    readonly DBNOs: number;
    readonly assists: number;
    /**
     * Total number of boost items used
     */
    readonly boosts: number;
    readonly damageDealt: number;
    readonly deathType: DeathType;
    readonly headshotKills: number;
    /**
     * Number of healing items used
     */
    readonly heals: number;
    readonly killPlace: number;
    readonly killPoints: number | undefined;
    /**
     * Change in kill points
     */
    readonly killPointsDelta: number | undefined;
    /**
     * Total number of kill streaks
     */
    readonly killStreaks: number;
    readonly kills: number;
    readonly lastKillPoints: number;
    readonly lastWinPoints: number;
    readonly longestKill: number;
    /**
     * Highest amount of damage dealt with a single attack
     */
    readonly mostDamage: number;
    /**
     * Username of the player associated with this participant
     */
    readonly name: string;
    /**
     * Account ID of the player associated with this participant
     */
    readonly playerId: string;
    /**
     * Number of times this participant revived others
     */
    readonly revives: number;
    /**
     * Total distance traveled in vehicles
     */
    readonly rideDistance: number;
    /**
     * Number of kills while in a vehicle
     */
    readonly roadKills: number;
    /**
     * Total distance traveled while swimming measured in meters
     */
    readonly swimDistance: number;
    readonly teamKills: number;
    readonly timeSurvived: number;
    readonly vehicleDestroys: number;
    readonly walkDistance: number;
    readonly weaponsAcquired: number;
    readonly winPlace: number;
    readonly winPoints: number | undefined;
    readonly winPointsDelta: number | undefined;
    readonly totalDistance: number;
}
