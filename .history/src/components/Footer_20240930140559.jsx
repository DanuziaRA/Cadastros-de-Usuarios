import { FaFacebook, FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer(){
    return (
        <nav>
            <Link to="/">Home</Link>
<Link to="/">{FaFacebook}</Link>
<Link to="/">{FaInstagram}</Link>
<Link to="/">{FaTwitter}</Link>
<Link to="/">{FaLinkedin}</Link>
    </nav>
    );

}
export default Footer