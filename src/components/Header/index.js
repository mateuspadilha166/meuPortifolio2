import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <header className="header">
            <h2 className="logo">Mateus Padilha</h2>
            <nav className="navbar">
                <Link className="nav-link" to="/Projetos">Projetos</Link>
                <Link className="nav-link" to="/Sobre">Sobre eu</Link>
                <Link className="nav-link" to="/Contato">Contato</Link>
            </nav>
        </header>
    );
}

export default Header;
