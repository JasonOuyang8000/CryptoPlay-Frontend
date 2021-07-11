import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './SearchContent.scss';



export default function SearchContent({searchInput, setSearchInput, closeModal}) {

    const [ coins, setCoins ] = useState([]);

    useEffect(() => {
        fetch(`${process.env.BACKEND}/crypto?search=${searchInput}`)
        .then(res => res.json())
        .then(data => {
        
           setCoins(data.results.data.coins);
           setSearchInput('');
        })
        .catch(error => console.log(error)); 
    }, []);

    return (
        <div className="row">

            {coins.map(coin => (
                <div key={coin.uuid} className="col-4">
                    <Link onClick={closeModal} to={`/cryptos/${coin.uuid}`} className="search-card shadow">
                        <h3>{coin.symbol}</h3>
                        <img src={coin.iconUrl} alt={coin.name} />
                    </Link>
                </div>
            ))}



        </div>
    );
};