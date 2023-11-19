import { PlayerStateEnum } from "./enums"

/** Player object type at the party */
export type Player = {
    /**
     * User's data base id
     */
    _id: string,
    /** Player name */
    name: string,
    /**
     * State of the player at the game
     * @default {PlayerStateEnum.ALIVE}
     */
    state: PlayerStateEnum,
    /**
     * If the player is the traitor at the game
     */
    infiltrator?: boolean,
    /**
     * Rol of the player at the party
     */
    rol?: PlayerStateEnum 
}