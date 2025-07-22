
import {FC} from "react";
import {IPost} from "../../../models/IPost.ts";


type PostProps = {
    item:IPost
}

const Post:FC<PostProps> = ({item}) => {
    return (
        <div className={'comment'}>
            <h3 className={'name'}>{item.title}</h3>
            <p className={'userP'}>ID: {item.id}</p>
            <p className={'userP'}>User ID: {item.userId}</p>
            <p className={'userP'}>{item.body}</p>
        </div>
    );
};

export default Post;