import {PostsType, ReactionsType} from "../../models/dummyJsonResponseType.ts";
import {FC} from "react";
import './post-style.css'

type PostPropsType = {
    item: PostsType
}

const Post: FC<PostPropsType> = ({item}) => {

    const postReactions:ReactionsType = item.reactions

    return (

        <div className={'post'}>
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

export default Post;