
import ErrorStatus from "../../../common/Error/ErrorStatus";
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


	/**
	 * Delete a user founded by their _id
	 * @param {number} _id user's _id
	 */
	static async deleteUserById(_id: number): Promise<void> {
		const index = fakeUserDataBase.findIndex((user: User) => user._id === _id);
		//Filter found user error
		if(index !== -1)
			throw new ErrorStatus(500, 'Error at delete user');
		fakeUserDataBase.splice(index, 1);
		console.log(fakeUserDataBase);
	}
}