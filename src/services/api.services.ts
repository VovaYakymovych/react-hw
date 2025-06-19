import axios from "axios";
import {IAuthUser} from "../models/IAuthUser.ts";
import {ILoginInputData} from "../models/ILoginInputData.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

export const login = async ({username, password, expiresInMins}:ILoginInputData):Promise<IAuthUser> => {
    try {
        const {data:UserWithTokens} = await axiosInstance.post('/login', {username, password, expiresInMins});
        localStorage.setItem('user', JSON.stringify(UserWithTokens));
        console.log(UserWithTokens)
        return UserWithTokens
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};