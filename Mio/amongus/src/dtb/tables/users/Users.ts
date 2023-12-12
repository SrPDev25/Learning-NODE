
import { fakeUserDataBase } from "../../fakeDatabase";
import { User } from "./user.type";



export class Users {

	/**
	 * Find at database a user by their token
	 * @param {string} token 18 characters token
	 * @returns {Promise<User | undefined>} User founded or undefined
	 */
	static async getUserByToken(token: string): Promise<User | undefined> {
		const user = fakeUserDataBase.find((user: User) => user.token === token);
		return user;
	}
}