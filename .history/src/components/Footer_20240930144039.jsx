import { FaFacebook, FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom";

function Footer(){
    return (
        <nav>
            <Link to="/">
            < FaFacebook alt=""/>
            </Link>
            <Link to="/">
            < FaInstagram alt=""/>
            </Link>
            <Link to="/">
            < FaTwitter alt=""/>
            </Link>
            <Link to="/">
            < FaLinkedin alt=""/>
            </Link>
            <p>Centro</p>
            </nav>
            

    );

}
export default Footer