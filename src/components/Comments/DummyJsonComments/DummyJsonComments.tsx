import {getDummyJsonResComments} from "../../../services/service-functions.ts";
import {CommentsDummyType} from "../../../models/CommentsTypes/dummyJsonResponseCommentsType.ts";
import {useEffect, useState} from "react";
import DummyJsonComment from "../DummyJsonComment/DummyJsonComment.tsx";


const DummyJsonComments = () => {

    const [comments,setComments] = useState<CommentsDummyType[]>([])
    useEffect(()=>{
        getDummyJsonResComments()
            .then(response => setComments(response))
    },[])

    return (
        <div className={'api-res-component'}>
            {comments.map(value => <DummyJsonComment item={value} key={value.id}/>)}
        </div>
    )
};

export default DummyJsonComments;