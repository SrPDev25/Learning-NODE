/**
 * State of the player at the game
 */
export enum PlayerStateEnum {
	ALIVE = 'alive',
	DEAD = 'dead',
	SPECTATOR = 'spectator',
	MASTER = 'master'
}

/**
 * Rol of the player at the party
 */
export enum PlayerRolEnum {
	MASTER = 'master',
    PLAYER = 'player'
}