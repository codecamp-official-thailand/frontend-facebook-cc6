import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';

const formLayout = {
    labelCol: { xs: 24, sm: 24, md: 5, lg: 7, xl: 7 },
    wrapperCol: { xs: 24, sm: 24, md: 19, lg: 17, xl: 17 },
};

function SignUp() {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <Row justify="center" align="middle" style={{ height: "100%" }}>
            <Col xs={23} sm={20} md={20} lg={12} xl={10}>
                <Form {...formLayout} onFinish={onFinish}>
                    <Row justify="center" style={{ margin: "20px" }}>
                        <img
                            style={{ width: "100%", maxWidth: "250px" }}
                            alt="logo fakebook"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                        />
                    </Row>
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[
                            { required: true, message: "กรุณาใส่ Username ด้วยนะครับ" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            { required: true, message: "กรุณาใส่ Password ด้วยครับ" }
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            { required: true, message: "กรุณายืนยันรหัสผ่าน" },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject("รหัสผ่านทั้งสองต้องตรงกัน");
                                }
                            })
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="fullname"
                        label="Full Name"
                        rules={[
                            { required: true, message: "กรุณาใส่ 是 ด้วยนะครับ" }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Row justify="end">
                        <Button htmlType="submit">ลงทะเบียน</Button>
                    </Row>
                </Form>
            </Col>
        </Row >
    );
}

export default SignUp;
