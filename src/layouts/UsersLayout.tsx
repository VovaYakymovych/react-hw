import {Link, Outlet} from "react-router-dom";


const UsersLayout = () => {
    return (
        <div>
            <Link to="jsonplaceholder">
                <button>To JsonPlaceholder Users</button>
            </Link>
            <Link to="dummyjson">
                <button>To DummyJson Users</button>
            </Link>
            <Outlet/>
        </div>
    );
};

export default UsersLayout;