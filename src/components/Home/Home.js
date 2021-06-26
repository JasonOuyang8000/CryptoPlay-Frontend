import React, { useEffect, useState} from "react";
import Jumbotron from 'components/Jumbotron/Jumbotron.js';
import Header from 'components/Header/Header.js';
;

export default function Home({setLoaded}) {

    const [coins,setCoins] = useState([]);

    useEffect(() => {
        fetch(`${process.env.BACKEND}/crypto/random?amt=4`)
        .then(res => res.json())
        .then(data => {

 
            setCoins(data.coins);
            setLoaded(true);
        })
        .catch(error => console.log(error))


    }, []);

    return (
        <>

        <Header />
        <div className="home">
                <Jumbotron />

        
            {/* <div className="filter-white"></div> */}
            

        </div>
        </>
    );

}