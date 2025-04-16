import {CommentsPlaceholderType} from "../../../models/CommentsTypes/CommentsPlaceholderType.ts";
import {FC} from "react";
import './placeholder-comment-style.css'


type CommentPlaceholderPropsType ={
    item:CommentsPlaceholderType
}


const JsonPlaceholderComment:FC<CommentPlaceholderPropsType> = ({item}) => {
    return (
        <div className={'placeholer-comment'}>
            <h2><strong>{item.name}</strong></h2>
            <p className={"ids"}>Post ID: {item.postId} | Comment ID: {item.id}</p>
            <p className={'email'}>{item.email}</p>
            <p className={'body'}>{item.body}</p>
        </div>
    );
};

export default JsonPlaceholderComment;