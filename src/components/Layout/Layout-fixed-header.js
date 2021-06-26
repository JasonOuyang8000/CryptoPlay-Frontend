import React from 'react';
import Header from 'components/Header/Header.js';

export default function LayoutFixedHeader({children}) {

    
    return (
        
        <div className="fixed-height">
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
    );
}