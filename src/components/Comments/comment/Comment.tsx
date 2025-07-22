
import {FC} from "react";
import {IComment} from "../../../models/IComment.ts";
import './comment.css'

type CommentProps = {
    item:IComment
}

const Comment:FC<CommentProps> = ({item}) => {
    return (
        <div className={'comment'}>
            <h3 className={'name'}>{item.name}</h3>
            <p className={'userP'}>ID: {item.id}</p>
            <p className={'userP'}>E-mail: {item.email}</p>
            <p className={'userP'}>Post ID: {item.postId}</p>
            <p className={'userP'}> {item.body}</p>
        </div>
    );
};

export default Comment;