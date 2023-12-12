import users = require("./usuarios.json")
import parties = require("./parties.json")
import { User } from "./tables/users/user.type";
import { Party } from "./tables/parties/types";

/**
 * Fake database to make the MVP project
 */

export const fakeUserDataBase = users as User[];
export const fakePartyDataBase = parties as Party[];