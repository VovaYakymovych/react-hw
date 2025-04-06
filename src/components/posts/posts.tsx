import {useEffect,useState} from "react";
import {PostsType} from "../../models/dummyJsonResponseType.ts";
import {getDummyJsonResPosts} from "../../service/service-functions.ts";
import Post from "../post/post.tsx";
import './posts-style.css'


const Posts = () => {

    const [posts,setPosts] = useState<PostsType[]>([])
    useEffect(()=>{
        getDummyJsonResPosts()
            .then(response => setPosts(response))
    },[])

    return (
        <div className={'posts'}>
            {posts.map(value => <Post item={value} key={value.id}/>)}
        </div>
    )
};

export default Posts;