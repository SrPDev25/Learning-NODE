import { isTokenValid } from "../../../dtb/tables/users/utils/token";
import { AuthorizationServices } from "../core/provider";
import { IGetAutentification } from "./response.type";
import ErrorStatus from "../../../common/Error/ErrorStatus";


/**
 * Check user autentication and 
 * @header {User['token']} token user's token
 * @returns {IGetAutentification} user's general and player information
 */
export const getPlayerAutentication = async (userToken: unknown): Promise<IGetAutentification> => {
	//Params validation
	const badRequest = isTokenValid(userToken);
	if (badRequest)
		throw new ErrorStatus(400, badRequest);

	//Database request
	const user = await AuthorizationServices.checkUserToken(userToken as string);
	const player = await AuthorizationServices.getPartyPlayerInfo(user._id, user.party);

	//Information filter
	const autentificationInfo: IGetAutentification = { ...user, playerInfo: player};

	//Response
	return autentificationInfo;
};