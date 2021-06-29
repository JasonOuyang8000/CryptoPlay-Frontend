import React from 'react';
import { Link } from 'react-router-dom';
import './CryptoTable.scss';


export default function CrytpoTable({data}) {
   

    return (
        
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Market Cap</th>
                    <th scope="col">24hr Change</th>
                    <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(coin => {
                         return (
                            <tr className="">
                                <td className="td-1"><span>{coin.rank}</span></td>
                                <td className="td-2"><img className="me-3" src={coin.iconUrl} alt={coin.name} /><span>{coin.name} </span></td>
                                <td className="td-3"><span>{parseFloat(coin.price).toFixed(6)}</span></td>
                                <td className="td-4"><span>{parseFloat(coin.marketCap).toFixed(6)}</span></td>
                                <td className=""><span>{coin.change}</span></td>
                                <td className="td-5"><Link to={`cryptos/${coin.uuid}`}>More Info</Link></td>
                            </tr>
                         );  
                        })   
                    }

               
                </tbody>
                </table>


 

    );
}


 