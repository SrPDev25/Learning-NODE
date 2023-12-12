import { Parties } from "../../../dtb/tables/parties/Parties";
import { Party, Player } from "../../../dtb/tables/parties/types";
import { Users } from "../../../dtb/tables/users/Users";
import { User } from "../../../dtb/tables/users/user.type";
import ErrorStatus from "../../../utils/Error/ErrorStatus";
import { parsePlayerToIShopPlayerAuthorization, parseUserToUserAuthorization } from "./serializer";
import { IAuthorizationShopPlayer, IAuthorizationUser } from "./type";


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

	static async getPartyPlayerInfo(userId: Player['_id'], partyId: Party['_id']): Promise<IAuthorizationShopPlayer> {
		const party = await Parties.getPartyById(partyId);
		if (party){
			const player = party.players.find(player => player._id === userId);
			if (player)
				return parsePlayerToIShopPlayerAuthorization(player);
			else
				throw new ErrorStatus(404, 'Player not found');
		} else{
			throw new ErrorStatus(404, 'Party not found');
		}
			
			
	}
}