import {IDummyJsonUsersResponse} from "../models/IDummyJsonUsersResponse.ts";

const baseURL = import.meta.env.VITE_DUMMY_JSON_BASE_URL

export const getUsers = async (page:number):Promise<IDummyJsonUsersResponse> => {
    const limit = 6
    const skip:number = limit*(+page)-limit

    const response = await fetch(baseURL+"/users"+"?limit="+limit+"&skip="+skip)
        .then(value => value.json())

    return response
}