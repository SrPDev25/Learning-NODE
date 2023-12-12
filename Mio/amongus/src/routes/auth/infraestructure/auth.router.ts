import express from 'express'
import { isTokenValid } from '../../users/utils/token.util';
import { AuthorizationServices } from '../core/services';


//Instacia dentro de express para indicar una ruta
const router = express.Router()

/**
 * Get
 * Devuelve la información que necesita el usuario para usar la aplicacións
 * @headers {string} token
 * @returns {IUserInfos}
 */
router.get('/', async (req, res) => {
	try {
		//400 bad request
		const badRequest = isTokenValid(req.headers.token);
		if (badRequest) {
			return res.status(400).send(badRequest);
		}
		//404 not found usr not found
		const user = await AuthorizationServices.checkUserToken(req.headers.token as string);
		if (!user) {
			return res.status(404).send('User not found');
		}
		//404 shop not found


		//200 ok
		return res.status(200).send(user);
	} catch (error) {
		return res.status(500).send(error);
	}
})


//Devuelve la ruta despues de configurada
export default router