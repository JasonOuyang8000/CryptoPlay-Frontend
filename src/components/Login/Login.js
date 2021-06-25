import React from "react";
import './Login.scss';
import DogeCoin from 'images/dogecoin.png';


export default function Login() {


    return (
  
     
     
        <div className="form-overlay d-flex">
            <div className="form-overlay-left d-flex align-items-center justify-content-center col-6">
                <div className="card shadow">
                <img src={DogeCoin} alt="dogecoin" />

                </div>
                
            </div>
            <div className="form-overlay-right col-6">
                    <form>

                        
                    </form>
            </div>

        </div>
    
    
    );

}