import React from 'react';
import { Upload } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons'

import './styles.scss';
import StepCard from '../../StepCard';
import nextImg from './next.png'

const { Dragger } = Upload

function LandingSection(props) {



    return (
        <div className='landing-section-root'>
            <div className='hero'>
                <h1>Classify local terrain images <br />
                    for autonomous robots</h1>
                <p>Feed in locally sourced images to our trained classifier <br />
                    based on CNN. It is able to distinguish terrain from <br />
                    environment noise and has an accuracy greater than 88%.</p>

            </div>
            <div className='steps'>
                <StepCard number={1} title="Segment terrain" >
                    <p>
                        But I must explain to you how all this mistaken idea <br />
                        of denouncing pleasure and praising pain was born and I <br />
                        will give you a complete account of the system, and expound <br />
                        the actual teachings
                    </p>
                </StepCard>
                <img src={nextImg} alt="" className='next-image' />
                <StepCard number={2} title="Classify segments" >
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos <br />
                        ducimus qui blanditiis praesentium voluptatum deleniti <br />
                        atque corrupti quos dolores et quas molestias excepturi <br />
                        sint occaecati cupiditate non provident
                    </p>
                </StepCard>
                <img src={nextImg} alt="" className='next-image' />
                <StepCard number={3} title="Expose API" >
                    <p>
                        The ML models are exposed through python scripts. The <br />
                        RESTful APIs are exposed through python which launches <br />
                        a python command interface to execute the ML. <br />
                    </p>
                </StepCard>

            </div>
            <div className='upload-container'>

                <Dragger className='uploader'>
                    <h3>Upload your image</h3>
                    <p>only PNG images of 1920x1080
                        resolution are allowed</p>
                    <div>
                        <p className="ant-upload-icon">
                            <CloudUploadOutlined />
                        </p>

                        <p>
                            Drag and drop or browse to
                            upload image
                        </p>
                    </div>

                </Dragger>
            </div>
        </div >
    );
}

export default LandingSection;