import { IAuthorizationShopPlayer, IAuthorizationUser } from "../core/type";

/**
 * Response of authorization
 */
export type IGetAutentification = IAuthorizationUser & IAuthorizationShopPlayer;