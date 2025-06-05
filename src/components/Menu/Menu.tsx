
import './Menu.css'
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className={'menu'}>

            <Link to="/cars"><button>Show All Cars</button></Link>
            <Link to={'/editcars'}><button>Edit Cars</button></Link>
        </div>
    );
};

export default Menu;