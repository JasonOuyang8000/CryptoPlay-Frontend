import React from 'react';

export default function LayoutFixedHeader() {
    return (
        
        <div className="fixed-height">

            <div className="container">
                {children}
            </div>
        </div>
    );
}