import {useEffect, useState} from "react";
import {PostsType} from "../../models/PostsType.ts";
import {getPosts} from "../../services/api-service-functions.ts";
import PostComponent from "../PostComponent/PostComponent.tsx";
import './PostsComponent-style.css'


const PostsComponent = () => {

    const [posts,setPosts] = useState<PostsType[]>([])
    useEffect(()=>{
        getPosts()
            .then(response => setPosts(response))
    },[])

    return (
        <div className={'posts'}>
            {posts.map(value => <PostComponent item={value} key={value.id}/>)}
        </div>
    );
};

export default PostsComponent;