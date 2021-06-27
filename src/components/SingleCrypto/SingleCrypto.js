import React from 'react';
import './SingleCrypto.scss';

import LayoutFixedHeader from 'components/Layout/Layout-fixed-header';
import { useEffect, useState } from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';


export default function SingleCrypto() {

    const [page, setPage] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch(`${process.env.BACKEND}/crypto/${id}`)
        .then(res => res.json())
        .then(data => {
            setPage(data);
        })
        .catch(error => console.log(error));
    }, []);


    return (
        <>
        <div style={{background: page.color}} className="bg-container">



        </div>
        <LayoutFixedHeader>
       
        </LayoutFixedHeader>
        </>
    );
}