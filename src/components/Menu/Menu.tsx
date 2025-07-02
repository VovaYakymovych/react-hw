
import './Menu.css'
import {Link} from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcer.tsx";

const Menu = () => {
    return (
        <div className={'menu'}>

            <Link to="login"><button className={'headerAndPaginationButton'}>Login</button></Link>
            <Link to={'auth/recipes'}><button className={'headerAndPaginationButton'}>Show Recipes</button></Link>
            <Link to={'users'}><button className={'headerAndPaginationButton'}>Show Users</button></Link>
            <ThemeSwitcher/>

        </div>
    );
};

export default Menu;