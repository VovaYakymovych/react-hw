import {useEffect, useState} from "react";
import {commentsType} from "../../models/commentsType.ts";
import {getComments} from "../../service/service-functions.ts";
import Comment from "../commentComponent/comment.tsx";
import './comments-style.css'


const Comments = () => {

    const [comments,setComments]=useState<commentsType[]>([])
    useEffect(() => {
        getComments().then(response=>setComments(response))
    }, []);

    return (
        <div className={'comments'}>
            {comments.map(value => <Comment item={value} key={value.id}/>)}
        </div>
    );
};

export default Comments;