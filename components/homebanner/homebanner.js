import React, {useState, useEffect, Component } from 'react';
import{Row,Col, Icon, DatePicker} from 'antd';
import { Input } from 'antd';


import './homebanner.css';

const { Search } = Input;

class phase1 extends Component{

    render(){
        return(
                <Row className ="phase1">
                    <Col md={10} offset={0} >
                        <Row className="text">
                            <p className="heading11">The first device to hack your metabolism</p>
                            <Row className="searchbar">
                                <Col md={24} className="searchitem">
                                    <Search
                                    style={{width: "80%"}}
                                    placeholder="search speciality"
                                    onSearch={value => console.log(value)}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <button className="book_now_button">Book Now</button>
                            </Row>
                            {/* <button className="buy_now_button hvr-pulse-grow">BOOK NOW</button>
                            <button className="see_action_button hvr-pulse-grow">SEE IT IN ACTION <Icon type="caret-right" /></button>
                            <hr style={{height:"3px", width:"100%", position:"absolute", top:"77%", color:"black"}}/>
                            <div className="icons">
                            <img style={{padding:"0px"}} src="/images/homebanner/workout.svg"/>
                            <p className="icontext">Optimize Workout</p>
                            <img src="/images/homebanner/nutrition.svg"/>
                            <p className="icontext">Get The Right Nutrition</p>
                            <img src="/images/homebanner/looseweight.svg"/>
                            <p className="icontext">Loose Weight</p>
                            </div> */}
                        </Row>
                    </Col>
                    <Col md={10} sm={4}>
                     <Row className="home_image_container" >
                            <img style={{height:"70vh", marginLeft:"10vh"}} className="home_image" src="/images/homebanner/lumenhome.png"></img>
                     </Row>
                    </Col>
                </Row>
        )
    }
}

export default phase1;