import { Link } from "react-router-dom"

const Navbar = () => {
    return (
    <nav>
<Link to="/">Home</Link>
<Link to="/contact">Contatos</Link>
<Link to="/">Cadastro</Link>
    </nav>
    )
}

export default Navbar
