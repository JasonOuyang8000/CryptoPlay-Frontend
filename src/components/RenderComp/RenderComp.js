import { faCoins, faCrown, faDollarSign, faExchangeAlt, faHandPeace, faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const HtmlToReactParser = require('html-to-react').Parser;

export default function RenderCom({active,page}) {
    const htmlParser = new HtmlToReactParser();
    page.price = parseFloat(page.price).toFixed(6);
    page.btcPrice = parseFloat(page.btcPrice).toFixed(6);
    page.increase = page.change > 0;    





    switch(active) {
        case 'Stats':
            return (
                

                <div className="stats-container ">
                    <div className="row">
                        <div className="col-12 col-lg-6 stats-box line-right">
                            <h3>Cool Stats</h3>
                            <div className="stats-column">
                                <div className="col-4 d-flex align-items-center">
                                    <FontAwesomeIcon className="me-5" icon={faDollarSign} size='3x' />
                                    <h2>Dollar Price</h2>
                                </div>
                                <div className="col-8">
                                    <p>{page.price}</p>
                                </div>
                            </div>
                            <div className="stats-column">
                                <div className="col-4   d-flex align-items-center">
                                    <FontAwesomeIcon className="me-5" icon={faCoins} size='2x' />
                                    <h2>Bitcoin Price</h2>
                                </div>
                                <div className="col-8">
                                    <p>{page.btcPrice}</p>
                                </div>
                            </div>
                            <div className="stats-column">
                                <div className="col-4  d-flex align-items-center ">
                                    <FontAwesomeIcon className="me-5" icon={faExchangeAlt} size='2x' />
                                    <h2>Change</h2>
                                </div>
                                <div className="col-8 align-items-center d-flex justify-content-center">
                                    <p className={page.increase ? 'price-green' : 'price-red'}>{page.btcPrice}</p>
                                    <FontAwesomeIcon size='2x' className={page.increase ? 'price-green' : 'price-red'} icon={page.increase ? faLongArrowAltUp : faLongArrowAltDown} />
                                </div>
                            </div>
                            <div className="stats-column">
                                <div className="col-4   d-flex align-items-center">
                                    <FontAwesomeIcon className="me-5" icon={faCrown} size='2x' />
                                    <h2>Rank</h2>
                                </div>
                                <div className="col-8">
                                    <p>{page.rank}</p>
                                </div>
                            </div>
                            <div className="stats-column">
                                <div className="col-4 d-flex align-items-center">
                                    <FontAwesomeIcon className="me-5" icon={faHandPeace} size='2x' />
                                    <h2>Best Price</h2>
                                </div>
                                <div className="col-8">
                                    <p>{page.allTimeHigh ? parseFloat(page.allTimeHigh.price).toFixed(6) : 'null'}</p>
                                </div>
                            </div>


                        </div>
                        <div className="col-12 col-lg-6 stats-box">
                            <h3>Supply Info</h3>
                        </div>

                    </div>
                 

                </div>
              
            )
        case 'Description':
            return page.description === null ? <p className="text-center">No Description Available</p> : 
            page.description === htmlParser.parse(page.description) ? <p>{page.description}</p>
            : htmlParser.parse(page.description)
            
        case 'Graph':
           
        default: 

    }

   
}