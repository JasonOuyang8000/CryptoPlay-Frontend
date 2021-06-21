import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";


export default function Header() {
    return (
        <header>
            <div className="container">
                <nav>   
                   <div className="brand-title">
                        <h1>CrytoPlay</h1>
                   </div>
                    <ul className="navbar">
                        <li>
                            <Link></Link>

                        </li>

                    </ul>

                </nav>
            </div>
        </header>
    )
}