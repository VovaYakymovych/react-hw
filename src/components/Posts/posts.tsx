import {Link, Outlet} from "react-router-dom";

const Posts = () => {
    return (
        <div>
            <h1>Posts</h1>
            <p className={'link'}><Link to={'jsonplaceholder'}>To JsonPlaceholder</Link></p>
            <p className={'link'}><Link to={'dummyjson'}>To DummyJson</Link></p>
            <Outlet/>
        </div>
    );
};

export default Posts;