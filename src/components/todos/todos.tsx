import {useEffect, useState} from "react";
import {getDummyJsonResTodos} from "../../service/service-functions.ts";
import './todos-style.css'
import {TodosType} from "../../models/dummyJsonResponseTodosType.ts";
import Todo from "../todo/todo.tsx";


const Todos = () => {

    const [todos,setTodos] = useState<TodosType[]>([])
    useEffect(()=>{
        getDummyJsonResTodos()
            .then(response => setTodos(response))
    },[])

    return (
        <div className={'todos'}>
            {todos.map(value => <Todo item={value} key={value.id}/>)}
        </div>
    )
};

export default Todos;