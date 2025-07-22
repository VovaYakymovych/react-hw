

import {useAppDispatch, useAppSelector} from "../../../redux/store.ts";
import {useEffect, useState} from "react";
import {postActions} from "../../../redux/slices/postSlice.ts";
import Post from "../post/Post.tsx";
import Pagination from "../../Pagination/Pagination.tsx";


const Posts = () => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.postStoreSlice.posts);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentPosts = posts.slice(indexOfFirst, indexOfLast);

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);

    return (
        <>
            <div className={'comments'}>
                {currentPosts.map(value => <Post key={value.id} item={value}/>)}
            </div>
            <Pagination
                totalItems={posts.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </>
    );
};

export default Posts;