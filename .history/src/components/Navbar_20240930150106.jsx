import { Link } from "react-router-dom"
import logo from './../assets/LOGO novo.png'
import { Component } from "react";
import './Navbar.css';


const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="navbar-logo">
            <h1>Minha navbar</h1>
            </div>
            <ul className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/">Quem Somos</Link>
            <Link to="/contact">Contatos</Link>
            <Link to="/">
            <img src={logo} alt=""/>
            </ul>
                </Link>
    </nav>
    )
}

export default Navbar
