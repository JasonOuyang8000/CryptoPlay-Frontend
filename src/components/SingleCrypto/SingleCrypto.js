import React from 'react';
import './SingleCrypto.scss';

import LayoutFixedHeader from 'components/Layout/Layout-fixed-header';
import { useEffect, useState } from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';
import JumbotronCrypto from 'components/Jumbotron/JumbotronCrypto';
const HtmlToReactParser = require('html-to-react').Parser;




export default function SingleCrypto() {

    const [page, setPage] = useState({});
    const {id} = useParams();

    const htmlParser = new HtmlToReactParser();

    useEffect(() => {
        fetch(`${process.env.BACKEND}/crypto/${id}`)
        .then(res => res.json())
        .then(data => {
            setPage(data);
        })
        .catch(error => console.log(error));
    }, []);

    console.log(page)
    
    return (
        <>

        <LayoutFixedHeader>
            <JumbotronCrypto page={page} />
            <div className="container">
                <div className="fixed-section">
                    <div className="single-crypto-card justify-content-center flex-row align-items-center shadow card">
                        <img className="me-4" src={page.iconUrl} />
                        <h1 className="text-center">{page.name}</h1>
                    </div>
                </div>

                <div className="section">

                    {page.description === null ? <p className="text-center">No Description Available</p> : 
                    page.description === htmlParser.parse(page.description) ? <p>{page.description}</p>
                    : htmlParser.parse(page.description)
                    }


                </div>
            </div>
       
        </LayoutFixedHeader>
        </>
    );
}