import {Link, Outlet} from "react-router-dom";


const PostsLayout = () => {
    return (
        <div>
            <Link to="jsonplaceholder">
                <button>To JsonPlaceholder Posts</button>
            </Link>
            <Link to="dummyjson">
                <button>To DummyJson Posts</button>
            </Link>
            <Outlet/>
        </div>
    );
};

export default PostsLayout;