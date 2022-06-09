import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav id="navbars">
                <div className="nav-wrapper">
                    <ul id="menu">
                        <li>
                            <Link to="/">Início</Link>
                        </li>
                        <li>
                            <Link to="/">Contatos</Link>
                        </li>
                        <li>
                            <Link to="/">Depoimentos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}




export default Navbar;