import axios from "axios";
import {IAuthUser} from "../models/IAuthUser.ts";
import {ILoginInputData} from "../models/ILoginInputData.ts";
import {IRecipe} from "../models/IRecipe.ts";
import {IDummyBaseResponse} from "../models/IDummyBaseResponse.ts";
import {getLSInfo} from "./helpers.ts";
import {IToken} from "../models/IToken.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

axiosInstance.interceptors.request.use(request => {
    if(request.method?.toUpperCase()==='GET'){
        request.headers.Authorization = 'Bearer ' + getLSInfo<IAuthUser>('user').accessToken;
    }
    return request
})

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

export const getAllRecipes = async ():Promise<IRecipe[]> => {
    try {
        const {data: {recipes}} = await axiosInstance.get<IDummyBaseResponse>('/recipes');
        return recipes
    } catch (error) {
        console.error("Failed to fetch recipes:", error);
        throw error;
    }
}

export const refreshTokens = async () => {
    const user = getLSInfo<IAuthUser>('user');
    try {
        const { data: { accessToken, refreshToken } } = await axiosInstance.post<IToken>('/refresh', {
            refreshToken: user.refreshToken,
            expiresInMins: 5
        });

        const updatedUser = {
            ...user,
            accessToken,
            refreshToken
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    } catch (error) {
        console.error("Failed to refresh tokens:", error);
        throw error;
    }
};
