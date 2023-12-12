import { fakePartyDataBase } from "../../fakeDatabase";
import { Party } from "./types";



/**
 * Parties table's request
 */
export class Parties {

	/**
	 * Find party by their _id
	 * @param {string} _id 
	 * @returns 
	 */
	static async getPartyById(_id: Party['_id']): Promise<Party | undefined> {
		const party = fakePartyDataBase.find(party => party._id === _id);
		return party;
	}
}