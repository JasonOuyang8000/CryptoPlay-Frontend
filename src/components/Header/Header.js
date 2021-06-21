import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Header.scss";


export default function Header() {
    return (
        <header>
            <div className="container">
                <nav className="d-flex nav align-items-center">   
                   <div className="brand-title me-4">
                        
                        
                        <h1>CryptoPlay</h1>
                   </div>
                    <ul className="navlinks">
                        <li>
                            <Link to="/" activeClassName="active-nav">Home</Link>
                        </li>
                   
                        <li>
                            <Link to="/cryptos" activeClassName="active-nav">Cryptos</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active-nav">Signup</Link>
                        </li>

                    </ul>

                </nav>
            </div>
        </header>
    )
}