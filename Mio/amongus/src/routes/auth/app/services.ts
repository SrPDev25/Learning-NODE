import { Request, Response } from "express";
import { isTokenValid } from "../../../dtb/tables/users/utils/token";
import { AuthorizationServices } from "../core/provider";
import { IGetAutentification } from "./response.type";
import ErrorStatus from "../../../utils/Error/ErrorStatus";


/**
 * Get the autentification of a player
 * @header {User['token']} token user's token
 * @returns 
 */
export const playerAutenticacion = async (req: Request, res: Response) => {
	try {
		//Params validation
		const badRequest = isTokenValid(req.headers.token);
		if (badRequest)
			throw new ErrorStatus(400, badRequest);
		
		//Database request
		const user = await AuthorizationServices.checkUserToken(req.headers.token as string);
		const party = await AuthorizationServices.getPartyPlayerInfo(user._id, user.party);
		
		//Information filter
		const autentificationInfo: IGetAutentification = { ...user, ...party };

		//Response
		return res.status(200).send(autentificationInfo);
	} catch (error) {
		if (error instanceof ErrorStatus) {
			return res.status(error.status).send(error.message);
		} else {
			return res.status(500).send('Internal server error');
		}
	}
};