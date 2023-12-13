import { Parties } from "../../../dtb/tables/parties/Parties";
import { Party, Player } from "../../../dtb/tables/parties/types";
import { Users } from "../../../dtb/tables/users/Users";
import { User } from "../../../dtb/tables/users/user.type";
import ErrorStatus from "../../../common/Error/ErrorStatus";
import { parseUserToUserAuthorization } from "./serializer";
import { IAuthorizationUser } from "./type";


export class AuthorizationServices {

	/**
	 * Check if a user exist and return it
	 * @param {string} token 
	 * @returns {Promise<IAuthorizationUser>}
	 */
	static checkUserToken(token: string): Promise<IAuthorizationUser> {
		return Users.getUserByToken(token)
			.then((user: User | undefined) => {
				if (user)
					return parseUserToUserAuthorization(user);
				else
					throw new ErrorStatus(404, 'User not found');
			});
	}

	/**
	 * Search the user at party database and return it
	 * @param {string} userId player's _id
	 * @param {string} partyId party's _id
	 * @throws {ErrorStatus} 404 if party or player not found
	 * @returns 
	 */
	static async getPartyPlayerInfo(userId: Player['_id'], partyId: Party['_id']): Promise<Player> {
		const party = await Parties.getPartyById(partyId);
		if (party){
			const player = party.players.find(player => player._id === userId);
			if (player)
				return player;
			else{
				throw new ErrorStatus(404, 'Player not found');
			}
		//User at users database but not at party database
		} else{
			throw new ErrorStatus(404, 'Party not found');
		}
			
			
	}
}