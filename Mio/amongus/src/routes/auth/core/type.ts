import { User } from "../../../dtb/tables/users/user.type";


/** User with filtered authorization */
export type AuthorizationResponse = Pick<User, "_id" | "party">;