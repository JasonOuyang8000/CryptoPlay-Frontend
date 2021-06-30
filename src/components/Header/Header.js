import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./Header.scss";


export default function Header() {

    const [showMenu, setShowMenu] = useState(false);


    return (
        <header>
            <div className="container">
                <nav className="d-flex nav align-items-center">   
                   <div className="brand-title me-5">
                        
                        
                        <h1>Crypto Play</h1>
                   </div>
                    <ul className="navlinks">
                        <li>
                            <Link exact={true} to="/" activeClassName="active-nav">Home</Link>
                        </li>
                   
                        <li>
                            <Link to="/cryptos" activeClassName="active-nav">Cryptos</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active-nav">About</Link>
                        </li>

                    </ul>
                    <ul className="ms-auto login-signup">
                   
                        <li><Link className="shadow" to="/login" >Login</Link></li>
                        <li><Link className="shadow" to="/signup" >Sign up</Link></li>
                    </ul>
                    <div className="menu-toggler d-md-none ms-auto shadow">
                        <FontAwesomeIcon className="" icon={faBars} size="2x" />

                    </div>
                    
                  

                </nav>
            </div>
        </header>
    )
}