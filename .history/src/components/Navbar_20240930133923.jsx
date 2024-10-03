import { Link } from "react-router-dom"
import logo from './../assets/LOGO novo.png'


const Navbar = () => {
    return (
    <nav class={Navbar.css}>
        <Link to="/">
        <img src={logo} alt=""/>
        </Link>
<Link to="/">Home</Link>
<Link to="/">Quem Somos</Link>
<Link to="/contact">Contatos</Link>
    </nav>
    )
}

export default Navbar
