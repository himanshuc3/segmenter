import React from 'react';

import './styles.scss'

function SectionHeader({ serial, text }) {
    return (
        <div className='section-header'>
            <h1>0{serial} &#8212; {text}</h1>
            <div className='underline' />
        </div>
    );
}

export default SectionHeader;