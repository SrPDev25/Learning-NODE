import { Users } from "../../../dtb/tables/users/Users";
import { User } from "../../../dtb/tables/users/user.type";
import { parseUserToUserAuthorization } from "./serializer";
import { AuthorizationResponse } from "./type";



export class AuthorizationServices {

	/**
	 * Check if a user exist and return it
	 * @param {string} token 
	 * @returns {Promise<AuthorizationResponse | undefined>}
	 */
	static checkUserToken(token: string): Promise<AuthorizationResponse | undefined> {
		return Users.getUserByToken(token)
			.then((user: User | undefined) => {
				if (user)
					return parseUserToUserAuthorization(user);
				else
					return undefined;
			});
	}
}