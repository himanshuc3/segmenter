import React from 'react';

import "./styles.scss"

function StepCard({ number, title, children }) {
    return (
        <div className='step'>
            <p className='number'>{number}</p>
            <div className='content'>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default StepCard;