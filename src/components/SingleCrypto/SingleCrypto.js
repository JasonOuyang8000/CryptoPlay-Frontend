import React from 'react';
import './SingleCrypto.scss';

import LayoutFixedHeader from 'components/Layout/Layout-fixed-header';
import { useEffect, useState } from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';
import JumbotronCrypto from 'components/Jumbotron/JumbotronCrypto';


import RenderComp from 'components/RenderComp/RenderComp';


export default function SingleCrypto() {

    const [page, setPage] = useState({});
    const [active, setActive] = useState('Stats');
    const {id} = useParams();



    useEffect(() => {
        fetch(`${process.env.BACKEND}/crypto/${id}`)
        .then(res => res.json())
        .then(data => {
            setPage(data);
        })
        .catch(error => console.log(error));
    }, []);



    const changeActive = (e,activeState) => {
        if (active !== activeState) {
            setActive(activeState);
        }
    }
    
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
                    <div className="menu-section">
                        <div onClick={e => changeActive(e,'Stats')} className={`menu-item ${active === 'Stats' ? 'menu-item-active': ''}`}>
                            Stats
                        </div>
                        <div onClick={e => changeActive(e,'Description')} className={`menu-item ${active === 'Description' ? 'menu-item-active': ''}`}>
                            Description
                        </div>
                        <div onClick={e => changeActive(e,'Graph')} className={`menu-item ${active === 'Graph' ? 'menu-item-active': ''}`}>
                            Graph
                        </div>
                    </div>

                    {
                        <RenderComp active={active} page={page} />
                    }

                   
                </div>

               
            </div>
       
        </LayoutFixedHeader>
        </>
    );
}