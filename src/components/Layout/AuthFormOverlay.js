import DogeCoin from 'images/dogecoin.png';
import React from 'react';

import './LayoutFixed.scss';

export default function AuthFormOverlay({children}) {
    

    return (
        <div className="form-overlay d-flex">
        <div className="form-overlay-left d-flex flex-column align-items-center justify-content-center col-6">

            <h1>Crypto Play</h1>
            <div className="card shadow">
            <img src={DogeCoin} alt="dogecoin" />
       
            </div>
            <p>
                "It's not just a Hustle. It's the future"
            </p>
            
        </div>

       
        <div className="form-overlay-right col-6 d-flex flex-column align-items-center justify-content-center">
            {children}
        </div>

        </div>
    );
}