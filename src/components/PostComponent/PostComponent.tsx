import {FC} from 'react';
import {PostsType} from "../../models/PostsType.ts";
import './PostComponent-style.css'

type PostsPropsType ={
    item:PostsType
}

const PostComponent:FC<PostsPropsType> = ({item}) => {
    return (
        <div className={'post'}>
            <h2>{item.title}</h2>
            <p className={"ids"}>Post ID: {item.id} | Users`s ID: {item.userId}</p>
            <p>{item.body}</p>
        </div>
    );
};

export default PostComponent;