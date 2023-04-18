import React from 'react';
import {GithubOutlined} from '@ant-design/icons'

import Title from '../../SectionHeader'

import './styles.scss'

function ContributorsSection(props) {
    const contributors = [
        {
            image: '/stock_face.jpg',
            link: '#'
        },
        {
            image: '/stock_face.jpg',
            link: '#'
        },
        {
            image: '/stock_face.jpg',
            link: '#'
        },
        {
            image: '/stock_face.jpg',
            link: '#'
        },
        {
            image: '/stock_face.jpg',
            link: '#'
        },
    ]

    return (
        <div className='contributors-root'>
            <Title text="contributors" serial="2" />
            <div className='contributors-list'>
                {contributors.map(({link, image}) => (
                    <div className='contributor-image'>
                        <a href={link}>
                            <img src={image} alt="profile" />
                        </a>
                    </div>
                ))}
            </div>
            <div className='project-meta'>

                <button className='contributor-btn'>
                    <p>Contribute</p>
                    <GithubOutlined />
                </button>
                <img src="/kaggle.png" alt=""/>
            </div>
        </div>
    );
}

export default ContributorsSection;