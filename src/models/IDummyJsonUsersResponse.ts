import {IDummyJsonResponse} from "./IDummyJsonResponse.ts";
import {IUser} from "./IUser.ts";

export interface IDummyJsonUsersResponse extends IDummyJsonResponse {
    users: IUser[];
}