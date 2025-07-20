import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

export const getApiData = async <T>(endpoint: string) => {
    try {
        const response = await axiosInstance.get<T>(endpoint);
        console.log(response.data)
        return response.data as T
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

