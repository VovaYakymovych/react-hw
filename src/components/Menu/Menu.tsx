
import './Menu.css'
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className={'menu'}>

            <Link to="/cars"><button className={'headerAndPaginationButton'}>Show All Cars</button></Link>
            <Link to={'/editcars'}><button className={'headerAndPaginationButton'}>Edit Cars</button></Link>
        </div>
    );
};

export default Menu;