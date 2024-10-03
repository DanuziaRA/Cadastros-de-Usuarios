import { FaFacebook, FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa"


function Footer(){
    return (
        <nav>
            <Link to="/">Home</Link>
<Link to="/">{FaFacebook}</Link>
<Link to="/">{FaInstagram}</Link>
<Link to="/">{FaTwitter}</Link>
<Link to="/">{FaLin}</Link>
    </nav>
    );

}
export default Footer