
import './Menu.css'
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className={'menu'}>

            <Link to="users"><button className={'headerAndPaginationButton'}>Show Users</button></Link>
            <Link to={'comments'}><button className={'headerAndPaginationButton'}>Show Comments</button></Link>
            <Link to={'posts'}><button className={'headerAndPaginationButton'}>Show Posts</button></Link>
            <Link to={'users/:id'}><button className={'headerAndPaginationButton'}>User Info</button></Link>

        </div>
    );
};

export default Menu;