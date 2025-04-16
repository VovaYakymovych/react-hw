import {Link, Outlet} from "react-router-dom";
import './layouts-style.css'

const UsersLayout = () => {
    return (
        <div>
            <div className={'buttons-wrap'}>
                <Link to="jsonplaceholder">
                    <button className={'link-button'}>To JsonPlaceholder Users</button>
                </Link>
                <Link to="dummyjson">
                    <button className={'link-button'}>To DummyJson Users</button>
                </Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default UsersLayout;