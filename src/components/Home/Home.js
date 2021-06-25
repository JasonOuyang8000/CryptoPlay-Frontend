import React from "react";
import Jumbotron from 'components/Jumbotron/Jumbotron.js';
import Header from 'components/Header/Header.js';

export default function Home() {

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