import React, {Component} from 'react';

import {Form, Input, Button } from 'antd';
import './contactus_form.css';

const { TextArea } = Input;
class contactusform extends Component{
    render(){
        return(
            <div className="form">
                <Form.Item>
                <label className="required"><p>Name: </p></label>
                <Input className="forminput"  type="text" placeholder="web name" />
                </Form.Item>
                <Form.Item>
                <label class="required"><p>Email: </p></label>
                <Input className="forminput" type="email" placeholder="web email" />
                </Form.Item>
                <Form.Item>
                <label class="required"><p>Subject: </p></label>
                <Input className="forminput" type="text" placeholder="Subject" />
                </Form.Item>
                <Form.Item>
                <label class="required">Description:</label>
                <TextArea autoSize={{ minRows: 1, maxRows: 5 }} className="forminput" placeholder="description" />
                </Form.Item>
                <button className="submit_button">SUBMIT</button>
            </div>
        )
    }
}

export default contactusform;