import { Link } from "react-router-dom"
url ("src/assets/cabecalho.jpg")


const Navbar = () => {
    return (
    <nav>
<Link to="/">Home</Link>
<Link to="/">Quem Somos</Link>
<Link to="/contact">Contatos</Link>
    </nav>
    )
}

export default Navbar
