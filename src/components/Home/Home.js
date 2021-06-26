import React, { useEffect, useState} from "react";
import Jumbotron from 'components/Jumbotron/Jumbotron.js';
import Header from 'components/Header/Header.js';

import './Home.scss';

export default function Home({setLoaded}) {

    const [coins,setCoins] = useState([]);

    useEffect(() => {
        fetch(`${process.env.BACKEND}/crypto/random?amt=4`)
        .then(res => res.json())
        .then(data => {

            let newCoins = data.coins.map(coin => {
                const newPrice = parseFloat(coin.price).toFixed(5);
          
                return {
                    ...coin,
                    price: newPrice
                }
            })
            
            setCoins(newCoins);
            setLoaded(true);
        })
        .catch(error => console.log(error))


    }, []);

    console.log(coins);

    return (
        <>

        <Header />
        <div className="home">
            <Jumbotron />
            <div className="container">
                <div className="row random-cards">

                    {
                        coins.map(coin => (
                            <div key={coin.uuid} className="col-3 p-5">
                                <div 

                                className="coin-card p-3 shadow-lg">
                                <div className="row">
                                    <div className="col-12 mb-3 d-flex align-items-center justify-content-center">
                                        <img className="me-3" src={coin.iconUrl} alt={coin.symbol}/>    
                                        <h3>{coin.symbol}</h3>
                                      
                                    </div>
                                    <div className="col-12 d-flex align-items-center justify-content-center">
                                        <p>${coin.price}</p>
                                    </div>
                                </div>

                                </div>
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