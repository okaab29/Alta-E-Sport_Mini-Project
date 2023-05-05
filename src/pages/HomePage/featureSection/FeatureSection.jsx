import { Button, Col, Row } from 'antd';
import React from 'react';
import './featureSection.css'
import FeatureImage from '../../../assets/featureImage.svg'

const FeatureSection = () => {
    return (
        <div style={{ padding: '0 80px' }}>
            <div className='containerText'>
                <p className='featureText'>F<span style={{ color: 'white' }}>eature</span></p>
                <div className='garisFeature'/>
            </div>
            <Row className='containerFeature'>
                <Col span={12}>
                    <img src={FeatureImage} alt="Image Feature" />
                </Col>
                <Col span={12} className='rightFeature'>
                    <div className="containerTextFeature">
                        <h1 className='titleFeature'>Feature</h1>
                        <div className='garisFeature2'></div>
                    </div>
                    <div className='containerText2'>
                        <p className='textFeature'>
                            Start sharing about our team with other!
                        </p>
                        <Button type='primary'>Click Here!</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default FeatureSection;
