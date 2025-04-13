import {useEffect, useState} from "react";
import {getDummyJsonResPosts} from "../../../services/service-functions.ts";
import {PostsDummyType} from "../../../models/PostsTypes/dummyJsonResponsePostsType.ts";
import DummyJsonPost from "../DummyJsonPost/DummyJsonPost.tsx";


const DummyJsonPosts = () => {
    const [posts,setPosts] = useState<PostsDummyType[]>([])
    useEffect(()=>{
        getDummyJsonResPosts()
            .then(response => setPosts(response))
    },[])

    return (
        <div className={'api-res-component'}>
            {posts.map(value => <DummyJsonPost item={value} key={value.id}/>)}
        </div>
    )
};

export default DummyJsonPosts;