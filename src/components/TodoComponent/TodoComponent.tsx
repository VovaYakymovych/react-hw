import {TodoComponentType} from "../../models/TodoComponentType.ts";
import {FC} from "react";
import './TodoComponent-style.css'

type TodoPropType = {
    item:TodoComponentType
}

const TodoComponent:FC<TodoPropType> = ({item}) => {
    return (
        <div className={'todoComponentWrapper'}>
            <h2>{item.title}</h2>
            <p className={'id'}>ID: {item.id}</p>
            <p className={'userId'}>User`s ID: {item.userId}</p>
            <p className={'completed'}>Status: {item.completed}</p>
        </div>
    );
};

export default TodoComponent;