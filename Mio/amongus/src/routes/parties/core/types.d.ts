import { GamePhaseEnum } from "./enums"

export type Party = {
    /**Database id of the party */
    _id: string,
    /**Simple unique id with 6 characters to easily find the party */
    simpleId: string,
    /** Setted party config */
    gameConfig: GameConfig,
    /** Phase of the game
     * @default 'recruitment'
     */
    gamePhase: GamePhaseEnum,
    /** Players info */
    players: Player[],
    /** Current game word */
    wordInGame?: string,
    /** Vote phase necessary data */
    votePhaseData?: VotePhaseData
}

/**
 * Configuration of the game
 */
export type GameConfig = {
    /** Min players at the game
     * @enum min 5
     */
    minPlayers: number,
    /** Max players at the game
     * @enum min 5
     */
    maxPlayers: number
}