import axios from "axios";
import {IAuthUser} from "../models/IAuthUser.ts";
import {ILoginInputData} from "../models/ILoginInputData.ts";
import {IRecipe} from "../models/IRecipe.ts";
import {IDummyBaseResponse} from "../models/IDummyBaseResponse.ts";

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

export const getAllRecipes = async ():Promise<IRecipe[]> => {
    try {
        const response = await axios.get<IDummyBaseResponse>('/recipes');
        return response.data.recipes;
    } catch (error) {
        console.error("Failed to fetch recipes:", error);
        throw error;
    }
}