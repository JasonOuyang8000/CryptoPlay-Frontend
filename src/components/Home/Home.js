import React, { useEffect, useState} from "react";
import Jumbotron from 'components/Jumbotron/Jumbotron.js';
import Header from 'components/Header/Header.js';

import './Home.scss';
import { faLongArrowAltDown, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Home({setLoaded}) {

    const [coins,setCoins] = useState([]);

    useEffect(() => {

        setLoaded(false);
        fetch(`${process.env.BACKEND}/crypto/random?amt=4`)
        .then(res => res.json())
        .then(data => {

            let newCoins = data.coins.map(coin => {
                const newPrice = parseFloat(coin.price).toFixed(7);

                const increase = parseFloat(coin.change) > 0 
          
                return {
                    ...coin,
                    price: newPrice,
                    increase
                }
            })
            
            setCoins(newCoins);
            setLoaded(true);
        })
        .catch(error => console.log(error))


    }, []);


    return (
        <>

        <Header />
        <div className="home">
            <Jumbotron />
            <div className="container">
                <div className="row random-cards">

                    {
                        coins.map(coin => (
                            <div key={coin.uuid} className="col-12 col-md-6 col-lg-3 p-5">
                                <Link 
                                to={`/cryptos/${coin.uuid}`}
                                className="coin-card p-3 shadow-lg">
                                <div className="card-container">
                                    <div className="mb-4 d-flex align-items-center justify-content-center">
                                        <img className="me-3" src={coin.iconUrl} alt={coin.symbol}/>    
                                        <h3>{coin.symbol}</h3>
                                      
                                    </div>
                                    <div className={`d-flex align-items-center justify-content-center ${coin.increase ? 'price-green' : 'price-red'}`}>
                                        <p className="me-2">${coin.price}</p>
                                         <FontAwesomeIcon icon={coin.increase ? faLongArrowAltUp : faLongArrowAltDown} />
                                    </div>
                                </div>

                                </Link>
                            </div>
                        ))
                    }

                </div>
            
                {/* <div className="filter-white"></div> */}
                

            </div>
        </div>
        </>
    );

}