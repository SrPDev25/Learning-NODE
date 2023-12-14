import { Party, Player } from "../../../../dtb/tables/parties/types";

/** General type to info request */
export type IDefaultPhaseFilter = Pick<Party, '_id' | 'simpleId' | 'gameConfig' | 'gamePhase' | 'players'>

/**
 * Words phase type to info request
 */
export type IWordsPhaseFilter = Pick<Party, '_id' | 'simpleId' | 'gameConfig' | 'gamePhase' | 'players' | 'wordInGame'>

/** Filter at votingPhase */
export type IVotingPhaseFilter = Pick<Party, '_id' | 'simpleId' | 'gameConfig' | 'gamePhase' | 'players' | 'wordInGame'> & {
    votePhase: IPlayerVoteInfo
}

/**
 * Vote phase info player can see
 */
export type IPlayerVoteInfo = {
    /**Player current vote
     * undefined if player hasn't voted yet
     * null if player has voted blank
     * Player['_id'] if player has voted for someone
     */
    playerVote?: Player['_id'] | null,
    /** Players can be voted */
    playerOptions?: {
        /** Player id */
        player: Player['_id'] | null,
        /** Player votes for him */
        votes?: number
    }[],
    /** Total null votes */
    abstentions?: number
}