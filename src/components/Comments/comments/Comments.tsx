import {useAppDispatch, useAppSelector} from "../../../redux/store.ts";
import {useEffect, useState} from "react";
import Comment from "../comment/Comment.tsx";
import {commentActions} from "../../../redux/slices/commentSlice.ts";
import Pagination from "../../Pagination/Pagination.tsx";
import './comments.css'


const Comments = () => {

    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);

    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 6;

    const indexOfLast = currentPage * commentsPerPage;
    const indexOfFirst = indexOfLast - commentsPerPage;
    const currentComments = comments.slice(indexOfFirst, indexOfLast);

    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, []);

    return (
        <>
        <div className={'comments'}>
            {currentComments.map(value => <Comment key={value.id} item={value}/>)}
        </div>
            <Pagination
                totalItems={comments.length}
                itemsPerPage={commentsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </>
    );
};

export default Comments;