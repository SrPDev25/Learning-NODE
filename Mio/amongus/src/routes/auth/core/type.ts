import { Player } from "../../../dtb/tables/parties/types";
import { User } from "../../../dtb/tables/users/user.type";


/** User public info */
export type IUserInfo = Pick<User, "_id" | "party">;

export type IAuthorizationShopPlayer = Pick<Player, 'name' | 'state' | 'rol'>;