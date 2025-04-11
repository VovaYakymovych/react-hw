import {Link} from "react-router-dom";
import './menu-style.css'

const Menu = () => {
    return (
        <ul className={'menu'}>
            <li>
                <Link to={'users'}>Users</Link>
            </li>
            <li>
                <Link to={'comments'}>Comments</Link>
            </li>
            <li>
                <Link to={'/posts'}>Posts</Link>
            </li>
            <li>
                <Link to={'products'}>Products</Link>
            </li>
        </ul>
    );
};

export default Menu;