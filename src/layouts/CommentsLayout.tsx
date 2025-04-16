import {Link, Outlet} from "react-router-dom";
import './layouts-style.css'

const CommentsLayout = () => {
    return (
        <div>
            <div className={'buttons-wrap'}>
                <Link to="jsonplaceholder">
                    <button className={'link-button'}>To JsonPlaceholder Comments</button>
                </Link>
                <Link to="dummyjson">
                    <button className={'link-button'}>To DummyJson Comments</button>
                </Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default CommentsLayout;