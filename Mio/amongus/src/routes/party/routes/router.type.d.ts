import { Request } from "express";
import { Party } from "../../../dtb/tables/parties/types";
import { IUserAuthorization } from "../../auth/app/response.type";

/**
 * Database info is necessary in other controllers at this router
 */
export type IPartyRequestMetaData = {
    userAuthorization?: IUserAuthorization,
    playerParty?: Party
};

/**Router type + PartyContext */
export type IPartyRouterRequest  = Request & IPartyRequestMetaData;