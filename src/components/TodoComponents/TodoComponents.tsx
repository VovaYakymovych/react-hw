import {useEffect, useState} from "react";
import {TodoComponentType} from "../../models/TodoComponentType.ts";
import {getToDoArray} from "../../services/api-service-functions.ts";
import TodoComponent from "../TodoComponent/TodoComponent.tsx";
import './TodoComponents-style.css'

const TodoComponents = () => {

    const [todos,setTodos] = useState<TodoComponentType[]>([])

    useEffect(()=>{
        getToDoArray()
            .then(response =>{setTodos(response)})
    },[])



    return (
        <div className={'todoComponents-wrapper'}>
            {todos.map((value) => (
                <TodoComponent item={value} key={value.id}/>
            ))}
        </div>

    )
}

export default TodoComponents;