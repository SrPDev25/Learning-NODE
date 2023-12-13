import { Request, Response } from "express";
import ErrorStatus from "../../../common/Error/ErrorStatus";
import { IGetAutentification } from "../app/response.type";
import { getPlayerAutentication } from "../app/services";



/**
 * Give autentication information of token's user
 * @get
 * @header {User['token']} token user's token
 * @returns {IGetAutentification} user's general and player information
 */
export const playerAutenticacion = async (req: Request, res: Response) => {
	try {
		//Information filter
		const autentificationInfo: IGetAutentification = await getPlayerAutentication(req.headers.token);

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