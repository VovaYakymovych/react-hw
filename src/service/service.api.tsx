import axios from 'axios';
import {ICar} from "../models/ICar.ts";


const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
})

export const getAllCars = async ():Promise<ICar[]> =>{
    const axiosResponse = await axiosInstance.get<ICar>('/cars')
    return axiosResponse.data
}

export const saveCar = async (car:ICar)=>{
    await axiosInstance.post<ICar>('/cars',car)
}