
import './Menu.css'
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className={'menu'}>

            <Link to="login"><button className={'headerAndPaginationButton'}>Login</button></Link>
            <Link to={'auth/recipes'}><button className={'headerAndPaginationButton'}>Show Recipes</button></Link>
        </div>
    );
};

export default Menu;