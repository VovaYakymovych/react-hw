import {FC} from 'react';
import './todo-style.css';
import {TodosType} from "../../models/dummyJsonResponseTodosType.ts";

type TodoPropsType = {
    item: TodosType
};

const Comment: FC<TodoPropsType> = ({item}) => {

    return (
        <div className={'todoComponentWrapper'}>
            <h2>{item.todo}</h2>
            <p className={'id'}>ID: {item.id}</p>
            <p className={'userId'}>User`s ID: {item.userId}</p>
            <p className={'completed'}>Status: {item.completed.toString()}</p>
        </div>
    );
};

export default Comment;