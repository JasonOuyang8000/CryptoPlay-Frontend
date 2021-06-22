import React from 'react';
import Rocket from 'images/rocket.svg';
import './Jumbotron.scss';


export default function Jumbotron() {
    return (
        <div className="jumbotron">
            <div className="container">

     
                <div className="row h-100">
                    <div className="col-12 col-md-8 jumbotron-left d-flex ">
                       
                        <h1 id="intro-text">
                            Always Shoot For the Moon.
                        </h1>
                   
                    </div>
                    <div className="col-12 col-md-4 jumbotron-right">
                        <img src={Rocket} alt="Rocket" />
                    </div>
                </div>
            </div>
        </div>
    );
}