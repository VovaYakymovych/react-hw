import { FC, useState } from 'react';
import { CommentsType, UserType } from "../../models/dummyJsonCommentsResponseType.ts";
import './comment-style.css';

type CommentPropsType = {
    item: CommentsType
};

const Comment: FC<CommentPropsType> = ({ item }) => {
    const user: UserType = item.user;


    const [likes, setLikes] = useState<number>(item.likes);
    const like = () => {
        setLikes(prev => prev + 1);
        console.log('like');
    };

    return (
        <div className={'comment'}>
            <h2 className={'body'}>{item.body}</h2>
            <p className={'ids'}>Comment ID: {item.id} | Post ID: {item.postId}</p>
            <div className={'user'}>
                <h3 className={'username'}>{user.username}</h3>
                <p className={'user-fullName'}>{user.fullName}</p>
                <p className={'userId'}>User`s ID: {user.id}</p>
            </div>
            <p className={'likes'} onClick={like}>
                👍 {likes}
            </p>
        </div>
    );
};

export default Comment;