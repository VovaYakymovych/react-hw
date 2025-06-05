import {IDummyJsonUsersResponse} from "../models/IDummyJsonUsersResponse.ts";

const baseURL = import.meta.env.VITE_DUMMY_JSON_BASE_URL

export const getUsers = async (page: string): Promise<IDummyJsonUsersResponse> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    const response = await fetch(baseURL + '/users' + '?skip=' + skip)
        .then(value => value.json());

    return response;
}