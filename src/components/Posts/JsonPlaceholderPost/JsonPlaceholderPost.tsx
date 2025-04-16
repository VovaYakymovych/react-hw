import {FC} from "react";
import {PostsPlaceholderType} from "../../../models/PostsTypes/PostsPlaceholdertype.ts";
import '../JsonPlaceholderPost/placeholder-post-style.css'

type PostPlaceholderPropsType = {
    item:PostsPlaceholderType
}

const JsonPlaceholderPost:FC<PostPlaceholderPropsType> = ({item}) => {
    return (
        <div className={'placeholder-post'}>
            <h2>{item.title}</h2>
            <p className={"ids"}>User ID: {item.userId} | Post ID: {item.id}</p>
            <p className={'body'}>{item.body}</p>
        </div>
    );
};

export default JsonPlaceholderPost;