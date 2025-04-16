import {useEffect, useState} from "react";
import {PostsPlaceholderType} from "../../../models/PostsTypes/PostsPlaceholdertype.ts";
import {getPlaceholderPosts} from "../../../services/service-functions.ts";
import JsonPlaceholderPost from "../JsonPlaceholderPost/JsonPlaceholderPost.tsx";


const JsonPlaceholderPosts = () => {

    const [posts,setPosts]=useState<PostsPlaceholderType[]>([])
    useEffect(() => {
        getPlaceholderPosts().then(response=>setPosts(response))
    }, []);

    return (
        <div className={'api-res-component'}>
            {posts.map(value => <JsonPlaceholderPost item={value} key={value.id}/>)}
        </div>
    );
};

export default JsonPlaceholderPosts;