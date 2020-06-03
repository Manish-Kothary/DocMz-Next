import React, { Component } from 'react';
import {Row, Col} from 'antd';

import './homegrid.css';

class phase5 extends Component{
    render(){
        return(
            <div className="phase5">
                    <Row >
                        <Col md={15} >
                            <div className="text51">
                                <p className="heading51">Like having a nutritionist in your pocket</p>
                                <p className="heading52">Know what and when to eat to fuel your workout, improve your metabolic flexibility and support fat burn.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row  className="grid_row">
                        <Col md={10} >
                            <div className="gridtext">
                            <p className="heading53">Track your metabolism daily</p>
                            <p className="heading54">See how your metabolism is affected by your sleep, physical activity, and nutrition.</p>
                            </div>
                        </Col>
                        <Col md={10} >
                        <img className="grid" src="/images/homegrid/phase51.jpg"/>
                        </Col>
                    </Row>
                    <Row className="reverse_row">
                        <Col md={10}>
                        <img  className="grid" src="/images/homegrid/phase52.jpg"/>
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
                        <img  className="grid" src="/images/homegrid/phase53.jpg"/>
                        </Col>
                    </Row>
                    <Row className="reverse_row">
                        <Col md={10}>
                            <img  className="grid" src="/images/homegrid/phase54.jpg"/>
                        </Col>
                        <Col md={10}>
                        <div className="gridtext">
                            <p className="heading53">Monitor and improve  metabolic health</p>
                            <p className="heading54">Over time, Lumen tracks your metabolism, sleep, nutrition, and fitness data to provide a Lumen Flex Score, which reflects your success and helps sustain results.</p>
                        </div>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default phase5;