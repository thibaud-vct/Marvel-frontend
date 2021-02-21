import { Link } from "react-router-dom";
import logo from "../assets/img/marvel.png";

const Header = (props) => {
    return (
        <header>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <Link to="/" className="characters">
                    <span>Personnages</span>
                </Link>
                <Link to="/comics" className="comics">
                    <span>Comics</span>
                </Link>
                <Link to="/favorites" className="favorites">
                    <span>Favoris</span>
                </Link>
            </div>
        </header>
    );
};
export default Header;
