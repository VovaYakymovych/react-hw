import {useEffect, useState} from "react";
import {CommentsType} from "../../models/dummyJsonCommentsResponseType.ts";
import {getDummyJsonResComments} from "../../service/service-functions.ts";
import Comment from "../comment/comment.tsx";
import './comments-style.css'


const Comments = () => {

    const [posts,setPosts] = useState<CommentsType[]>([])
    useEffect(()=>{
        getDummyJsonResComments()
            .then(response => setPosts(response))
    },[])

    return (
        <div className={'comments'}>
            {posts.map(value => <Comment item={value} key={value.id}/>)}
        </div>
    )
};

export default Comments;