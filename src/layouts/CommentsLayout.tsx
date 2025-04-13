import {Link, Outlet} from "react-router-dom";

const CommentsLayout = () => {
    return (
        <div>
            <Link to="jsonplaceholder">
                <button>To JsonPlaceholder Comments</button>
            </Link>
            <Link to="dummyjson">
                <button>To DummyJson Comments</button>
            </Link>
            <Outlet/>
        </div>
    );
};

export default CommentsLayout;