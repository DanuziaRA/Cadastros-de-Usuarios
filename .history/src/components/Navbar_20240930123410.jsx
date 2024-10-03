import { Link } from "react-router-dom"

const Navbar = () => {
    return (
    <nav>
<Link to="/">Home</Link>
<Link to="/">Sobre nós</Link>
<Link to="/contact">Contatos</Link>
    </nav>
    )
}

export default Navbar
