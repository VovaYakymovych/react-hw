import {useEffect, useState} from "react";
import {CommentsPlaceholderType} from "../../../models/CommentsTypes/CommentsPlaceholderType.ts";
import {getPlaceholderComments} from "../../../services/service-functions.ts";
import JsonPlaceholderComment from "../JsonPlaceholderComment/JsonPlaceholderComment.tsx";


const JsonPlaceholderComments = () => {

    const [comments,setComments]=useState<CommentsPlaceholderType[]>([])
    useEffect(() => {
        getPlaceholderComments().then(response=>setComments(response))
    }, []);

    return (
        <div className={'api-res-component'}>
            {comments.map(value => <JsonPlaceholderComment item={value} key={value.id}/>)}
        </div>
    );
};

export default JsonPlaceholderComments;