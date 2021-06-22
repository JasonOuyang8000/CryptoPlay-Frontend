import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Header.scss";


export default function Header() {
    return (
        <header>
            <div className="container">
                <nav className="d-flex nav align-items-center">   
                   <div className="brand-title me-5">
                        
                        
                        <h1>Crypto Play</h1>
                   </div>
                    <ul className="navlinks">
                        <li>
                            <Link to="/" activeClassName="active-nav">Home</Link>
                        </li>
                   
                        <li>
                            <Link to="/cryptos" activeClassName="active-nav">Cryptos</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active-nav">About</Link>
                        </li>

                    </ul>
                    <ul className="d-flex ms-auto login-signup">
                        <li><button className="shadow">Login</button></li>
                        <li><button className="shadow">Signup</button></li>
                    </ul>


                </nav>
            </div>
        </header>
    )
}