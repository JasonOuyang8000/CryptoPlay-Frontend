import React from 'react';
import './SingleCrypto.scss';

import LayoutFixedHeader from 'components/Layout/Layout-fixed-header';
import { useEffect } from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';


export default function SingleCrypto() {

    const {id} = useParams();

    useEffect(() => {
        fetch(`${process.env.BACKEND}/crypto/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
    })


    return (
        <LayoutFixedHeader>
            <div className="bg-container">



            </div>
        </LayoutFixedHeader>
    );
}