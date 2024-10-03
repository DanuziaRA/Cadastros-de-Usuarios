import { FaFacebook, FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom";

function Footer(){
    return (
        <nav>
            <Link to="/">
            <img src={logo} alt=""/>
            </Link>
            </nav>

    );

}
export default Footer