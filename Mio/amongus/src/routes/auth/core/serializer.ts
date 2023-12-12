
import { User } from "../../../dtb/tables/users/user.type";
import { AuthorizationResponse as UserAuthorization } from "./type";


/**
 * Parse user info to AuthorizationResponse filtered
 * @param {User} user user values will parsed
 * @returns {UserAuthorization} filtered user
 */
export const parseUserToUserAuthorization = (user: User): UserAuthorization => {
	const { _id, party } = user;
	return { _id, party };
};