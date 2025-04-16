import {PostsDummyType, ReactionsType} from "../../../models/PostsTypes/dummyJsonResponsePostsType.ts";
import {FC} from "react";
import './dummy-post-style.css'

type PostDummyPropsType = {
    item: PostsDummyType
}

const DummyJsonPost: FC<PostDummyPropsType> = ({item}) => {

    const postReactions:ReactionsType = item.reactions

    return (

        <div className={'dummy-post'}>
            <h2 className={'title'}>{item.title}</h2>
            <p className={"ids"}>Post ID: {item.id} | Users`s ID: {item.userId}</p>
            <p className={'body'}>{item.body}</p>
            <p className={'reactions'}>👍{postReactions.likes}   |  👎{postReactions.dislikes}</p>
            <ul className={'tags'}>
                {item.tags.map((tag, index) => <li key={index}>#{tag}</li>)}
            </ul>
            <p className={'views'}>👁️{item.views}</p>
        </div>
    );
};

export default DummyJsonPost;