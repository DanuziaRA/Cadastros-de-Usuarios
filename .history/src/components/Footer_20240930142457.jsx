import { FaFacebook, FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom";

function Footer(){
    return (
        <nav>
            <Link to="/">
            < FaFacebook alt=""/>
            </Link>
            <Link to="/">
            < FaI alt=""/>
            </Link>
            <Link to="/">
            < FaFacebook alt=""/>
            </Link>
            <Link to="/">
            < FaFacebook alt=""/>
            </Link>
            </nav>

    );

}
export default Footer