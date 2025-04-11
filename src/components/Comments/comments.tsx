import {Link, Outlet} from "react-router-dom";

const Comments = () => {
    return (
        <div>
            <h1>Comments</h1>
            <p className={'link'}><Link to={'jsonplaceholder'}>To JsonPlaceholder</Link></p>
            <Outlet/>
        </div>
    );
};

export default Comments;