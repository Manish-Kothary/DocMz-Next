import React, { Component } from 'react';
import withBasicLayout from '../../components/layouts/basic-layout/withBasicLayout'
import {Row, Col} from 'antd';

import './index.js';

class howitworks extends Component{
    render(){
        return(
            <div>
            <Row className="top_heading">
                <Col md={12}>
                    <p className="top_heading_text">The technology used in labs, now at your fingertips.</p>
                </Col>
                <Col md={12}>
                    <img className="top_heading_image" src="/images/howitworks/howitworktop.jpeg"></img>
                </Col>
            </Row>
            <Row className="second_section reverse">
                <Col md={12}>
                <img className="second_section_image" src="/images/howitworks/secondsection.png"></img>
                </Col>
                <Col md={12}>
                <p className="second_section_text1">Unlock your metabolism</p>
                <p className="second_section_text2">The CO2 concentration is measured using a unique breath maneuver, which is performed by inhaling a fixed volume of air through the Lumen device (dynamic to each individual), holding it for 10 seconds, and exhaling fully.</p>
                </Col>
            </Row>
            <Row className="third_section">
                <Row className="third_section_heading">
                    <Col>
                    <p className="second_section_text1">How do you measure metabolism?</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    <img className="third_section_image" src="/images/howitworks/beforelumen.jpeg"></img>
                    <p className="second_section_text1">Before Lumen</p>
                    <p className="second_section_text2">The only way to measure your metabolism was in a hospital or clinic with a costly and time-consuming test known as RER (through the breath).</p>
                    </Col>
                    <Col md={12}>
                    <img className="third_section_image" src="/images/howitworks/withlumen.jpeg"></img>
                    <p className="second_section_text1">With Lumen</p>
                    <p className="second_section_text2">Lumen uses RER as the core data point to bring the same measurement to a home environment by measuring the CO2 in your breath through the sensor and flow meter, based on the RER metric.</p>
                    </Col>
                </Row>
            </Row>
            <Row>
                <Row className="wave_image">
                    <img className="wave_image" src="/images/howitworks/wave.png"></img>
                </Row>
                <Row className="forth_section_text">
                    <Col md={20}>
                    <p style={{textAlign:"center"}} className="second_section_text1">Real-time accuracy</p>
                    <p className="second_section_text2">Lumen's technology has been scientifically proven to accurately measure metabolic fuel usage when compared to the gold standard (RER) for measuring metabolism in multiple validation studies.</p>
                    </Col>
                </Row>
            </Row>
            <Row  className="grid_row">
                    <Col md={10} >
                            <div className="gridtext">
                            <p className="heading53">Track your metabolism daily</p>
                            <p className="heading54">See how your metabolism is affected by your sleep, physical activity, and nutrition.</p>
                            </div>
                    </Col>
                    <Col md={10} >
                        <img className="grid" src="/images/howitworks/gettingyouknow.jpeg"/>
                    </Col>
            </Row>
            <Row className="reverse_row">
                    <Col md={10}>
                        <img  className="grid" src="/images/howitworks/takingbreath.jpeg"/>
                    </Col>
                    <Col md={10}>
                        <div className="gridtext">
                            <p className="heading53">Customize your nutrition</p>
                            <p className="heading54">Get daily personalized meal plans. Know exactly what to eat and when.</p>
                        </div>
                    </Col>
            </Row>
            <Row className="grid_row">
                    <Col md={10} >
                        <div className="gridtext">
                            <p className="heading53">Workout optimization</p>
                            <p className="heading54">See if you have enough energy before a workout or if you need to fuel up. Breathe afterwards to see the impact on your body.</p>
                        </div>
                    </Col>
                    <Col md={10}>
                        <img  className="grid" src="/images/howitworks/receivingyourpain.jpeg"/>
                    </Col>
            </Row>
            </div>
        )
    }
}

export default withBasicLayout(howitworks);