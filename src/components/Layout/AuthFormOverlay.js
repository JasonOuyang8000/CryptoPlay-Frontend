import DogeCoin from 'images/dogecoin.png';
import React from 'react';
import { Link } from 'react-router-dom';

import './LayoutFixed.scss';

export default function AuthFormOverlay({children}) {
    

    return (
        <div className="form-overlay row p-0 m-0">
        <div className="form-overlay-left d-flex flex-column align-items-center justify-content-center col-12 col-md-7">
            <div className="card-go-back shadow-lg">
                <Link to="/">Back to Home</Link>
            </div>
            <h1>Crypto Play</h1>
            <div className="card shadow">
            <img src={DogeCoin} alt="dogecoin" />
       
            </div>
            <p>
                "It's not just a Hustle. It's the future."
            </p>
            
        </div>

       
        <div className="form-overlay-right col-12 col-md-5 d-flex flex-column align-items-center justify-content-center">
            {children}
        </div>

        </div>
    );
}