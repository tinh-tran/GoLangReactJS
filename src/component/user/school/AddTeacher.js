import React from 'react';
import axios from 'axios';
import { Form, Row, Col, Button, Input, Alert } from 'antd';


class AddTeacher extends React.Component {
    state = {
        username: '',
        password: '',
        message: '当前可以创建50个教师账号，您已经创建了10个！账号不可以重复！'
    }
    changeName(val, type) {
        this.setState({
            [type]: val.target.value
        })
    }
    createTeacher() {
        let userinfo = {
            username: this.state.username,
            password: this.state.password,
            belong: this.props.user.belong,
            type: '教师'
        }
        console.log(userinfo);
        axios.post('/api/school/createpeople', { ...userinfo }).then(res => {
            console.log(res.data);
        })
    }
    render() {
        return (
            <Form>
                <Alert
                    message="注意事项"
                    description={this.state.message}
                    type="warning"
                    showIcon
                />
                <Row>
                    <Col span={12} offset={6} style={{ textAlign: 'center' }}>
                        <br />
                        <Row>
                            <Col
                                span={4}
                                style={{
                                    lineHeight: "32px",
                                    textAlign: "center"
                                }}
                            >
                                教师账号 ：
                            </Col>
                            <Col span={20}>
                                <Input
                                    placeholder="输入课程名称"
                                    onChange={e => {
                                        this.changeName(e, 'username');
                                    }}
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col
                                span={4}
                                style={{
                                    lineHeight: "32px",
                                    textAlign: "center"
                                }}
                            >
                                初始密码 ：
                            </Col>
                            <Col span={20}>
                                <Input
                                    placeholder="输入课程名称"
                                    onChange={e => {
                                        this.changeName(e, 'password');
                                    }}
                                />
                            </Col>
                        </Row>
                        <br />
                        <Button type="primary" onClick={() => { this.createTeacher() }}>提交</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default AddTeacher;