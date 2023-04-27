import React from 'react';

import Title from '../../SectionHeader'
import './styles.scss'


function GallerySection(props) {


    const images = [
        {
            name: 'Martin Cola',
            date: '27th May, 2022',
            img: '/segmented_image.png'
        },
        {
            name: 'Saurskey',
            date: '3rd Oct, 1976',
            img: '/segmented_image.png'
        },
        {
            name: 'Martin Cola',
            date: '27th May, 2022',
            img: '/segmented_image.png'
        },
        {
            name: 'Martin Cola',
            date: '27th May, 2022',
            img: '/segmented_image.png'
        },
    ]

    return (
        <div className='gallery-section'>
            <Title text="gallery" serial="1" />
            <p className='help-text'>History of terrain images segmented, classified stored in our database.
                Given we have a limited capacity, this would be showing recent few images
                uploaded by users.</p>

            <div className='image-grid-container'>
                {images.map(({ img, name, date }) => (
                    <div>
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GallerySection;