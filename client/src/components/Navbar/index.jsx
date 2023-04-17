import React from 'react';
import { GithubOutlined } from '@ant-design/icons'


import './styles.scss'


function Navbar(props) {
    return (
        <div id='navbar-root'>
            <h1>segmenter</h1>
            <ul className='navmenu'>
                <li>gallery</li>
                <li>team</li>
                <li><GithubOutlined /></li>
            </ul>
        </div>
    );
}

export default Navbar;