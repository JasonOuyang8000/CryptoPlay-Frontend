import { faCoins, faCrown, faDollarSign, faExchangeAlt, faHandPeace, faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function StatsContainer({page}) {
    page.price = parseFloat(page.price).toFixed(6);
    page.btcPrice = parseFloat(page.btcPrice).toFixed(6);
    page.increase = page.change > 0;    
    

    


    const prices = (page.supply ?  [page.supply.total - page.supply.circulating, page.supply.circulating] : [0, 1]).map(price => parseFloat(price).toFixed(4))



    const data = {
        labels: ['Non-Circulating', 'Circulating'],
        datasets: [
          {
            label: 'Circulating Supply',
            data: prices,
            backgroundColor: [
              '#A0CCFF',
              '#0C386A',
         
       
            ],
            borderColor: [
              '#A0CCFF',
              '#0C386A',
         
            ],
            borderWidth: 1,
          },

        ],

        spacing: 2,
     
      };


    return (
        <div className="stats-container ">
        <div className="row">
            <div className="col-12 col-lg-7 stats-box line-right">
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
                    <div className="col-4 d-flex align-items-center">
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
            <div className="col-12 col-lg-4 stats-box p-4">
                <h3>Supply Info</h3>
                <p className="custom-place">{(parseFloat(prices[1]) /(parseFloat(prices[0]) + parseFloat(prices[1])) * 100).toFixed(2)}%</p>
                <div className="chart-box w-100 mb-5">
                   
                    <Doughnut 
                
                
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    }}
                height={240}
           
                data={data} />

                </div>
            
                <p>Circulating Supply: {prices[1]}</p>
                <p>Non-Circulating Supply: {prices[0]}</p>
                <p>Total Supply: {parseFloat(prices[0]) + parseFloat(prices[1])}</p>
            </div>

        </div>
     

    </div>
    );
}