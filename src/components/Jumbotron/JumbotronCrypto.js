import React from 'react';
import './Jumbotron.scss';

export default function JumbotronCrypto({page}) {
   
    return (
        <div  className="jumbotron-crypto">
            <div style={{background: page.color === null ?' #2a60d3': page.color}} className='bg-container'>
                
            </div>
      


        </div>
    );
}