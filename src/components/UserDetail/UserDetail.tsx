import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {useEffect, useState} from "react";
import {userActions} from "../../redux/slices/userSlice.ts";
import {postActions} from "../../redux/slices/postSlice.ts";
import {commentActions} from "../../redux/slices/commentSlice.ts";
import {useNavigate, useParams} from "react-router-dom";
import './UserDetail.css'

const UserDetail = () => {
    const { id } = useParams<{ id?: string }>();
    const [inputId, setInputId] = useState(id || "");
    const user = useAppSelector((state) => state.userStoreSlice.user);
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    const comments = useAppSelector((state) => state.commentStoreSlice.comments);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            dispatch(userActions.loadUsers());
        }
        if (!posts.length) {
            dispatch(postActions.loadPosts());
        }
        if (!comments.length) {
            dispatch(commentActions.loadComments());
        }
    }, [])

    useEffect(() => {
        if (id) {
            dispatch(userActions.loadUser(id));
        }
        dispatch(postActions.loadPosts());
        dispatch(commentActions.loadComments());
    }, [id, dispatch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputId(value);
        if (value) {
            navigate(`/users/${value}`);
        }
    };

    const userPosts = posts.filter(post => post.userId === Number(id));
    const getCommentsForPost = (postId: number) =>
        comments.filter(comment => comment.postId === postId);

    return (
        <div>
            <div className={'inputDiv'}>
                <span>Enter User's ID:</span>
                <input
                    type="text"
                    placeholder="Enter user ID"
                    value={inputId}
                    onChange={handleChange}
                />
            </div>

            {user && (
                <div className={'userDetails'}>
                    <h3 className={'name'}>{user.name}</h3>
                    <p className={'userP'}>ID: {user.id}</p>
                    <p className={'userP'}>E-mail: {user.email}</p>
                    <p className={'userP'}>Phone Number: {user.phone}</p>
                    <p className={'userP'}>Website: {user.website}</p>
                </div>
            )}

            <div className={'userPosts'}>

                {userPosts.map(post => (
                    <div key={post.id} className="userPost">
                        <h5 className={'postTittle'}>{post.title}</h5>
                        <p className={'postBody'}>{post.body}</p>
                        <div className={'commentsDiv'}>
                            <h5>Comments:</h5>
                            <div className={'userCommentsWrapper'}>

                            {getCommentsForPost(post.id).map(comment => (
                                <div key={comment.id} className={'userComment'}>
                                    <p className={'commentBody'}><b>{comment.id}. {comment.name}</b>: {comment.body}</p>
                                    <p className={'email'}>E-mail: {comment.email}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default UserDetail;