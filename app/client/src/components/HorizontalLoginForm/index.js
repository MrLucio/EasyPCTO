import React from "react";
import { Form, Icon, Input, Button } from "antd";

class HorizontalLoginForm extends React.Component{
    
    handleSubmit = e => {
        console.log(e)
    }

    render(){
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item>
                    <Input 
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item>
                    <Input 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        )
    }

}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default WrappedHorizontalLoginForm;