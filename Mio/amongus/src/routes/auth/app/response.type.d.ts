import { Player } from "../../../dtb/tables/parties/types";
import { IUserInfo } from "../core/type";

/**
 * Response of authorization
 */
export type IUserAuthorization = IUserInfo & {
    playerInfo: Player
};