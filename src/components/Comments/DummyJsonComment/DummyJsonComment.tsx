import {CommentsDummyType, UserType} from "../../../models/CommentsTypes/dummyJsonResponseCommentsType.ts";
import {FC, useState} from "react";
import './dummyJsonComment-style.css'

type CommentDummyPropsType = {
    item: CommentsDummyType
};

const DummyJsonComment: FC<CommentDummyPropsType> = ({item}) => {
    const user: UserType = item.user;


    const [likes, setLikes] = useState<number>(item.likes);
    const like = () => {
        setLikes(prev => prev + 1);
        console.log('like');
    };

    return (
        <div className={'dummy-comment'}>
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
}
export default DummyJsonComment;