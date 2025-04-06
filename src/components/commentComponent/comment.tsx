import {commentsType} from "../../models/commentsType.ts";
import {FC} from "react";
import './comment-style.css'

type CommentPropsType ={
    item:commentsType
}


const Comment:FC<CommentPropsType> = ({item}) => {
    return (
        <div className={'comment'}>
            <h2>{item.name}</h2>
            <p className={"ids"}>Post ID: {item.postId} | Comment ID: {item.id}</p>
            <p className={'email'}>{item.email}</p>
            <p className={'body'}>{item.body}</p>
        </div>
    );
};

export default Comment;