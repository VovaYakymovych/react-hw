import {TodoComponentType} from "../models/TodoComponentType.ts";

export const getToDoArray = async ():Promise<TodoComponentType[]> =>{
    return await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(value => value.json())
}