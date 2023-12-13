import { IAuthorizationUser } from "../core/type";

/**
 * Response of authorization
 */
export type IGetAutentification = IAuthorizationUser & {
    playerInfo: Player
};