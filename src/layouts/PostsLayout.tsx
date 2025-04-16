import {Link, Outlet} from "react-router-dom";
import './layouts-style.css'

const PostsLayout = () => {
    return (
        <div>
            <div className={'buttons-wrap'}>
                <Link to="jsonplaceholder">
                    <button className={'link-button'}>To JsonPlaceholder Posts</button>
                </Link>
                <Link to="dummyjson">
                    <button className={'link-button'}>To DummyJson Posts</button>
                </Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default PostsLayout;