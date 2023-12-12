
import { Player } from "../../../dtb/tables/parties/types";
import { User } from "../../../dtb/tables/users/user.type";
import { IAuthorizationShopPlayer, IAuthorizationUser as UserAuthorization } from "./type";


/**
 * Parse user info to AuthorizationResponse filtered
 * @param {User} user user values will parsed
 * @returns {UserAuthorization} filtered user
 */
export const parseUserToUserAuthorization = (user: User): UserAuthorization => {
	const { _id, party } = user;
	return { _id, party };
};

/**
 * Parse player info to AuthorizationResponse filtered
 * @param {Player} player player values will parsed
 * @returns {IAuthorizationShopPlayer} filtered player
 */
export const parsePlayerToIShopPlayerAuthorization = (player: Player): IAuthorizationShopPlayer => {
	const { name, state, rol } = player;
	return { name, state, rol };
};

