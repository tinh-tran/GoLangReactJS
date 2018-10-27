import React from 'react'
import axios from 'axios'
import { Form, Row, Col, Button, Input, Divider } from 'antd'

class AddSchool extends React.Component {
  state = {
    username: '',
    password: '',
    belong: ''
  }
  changeName(val, type) {
    this.setState({
      [type]: val.target.value
    })
  }
  createSchool() {
    let userinfo = {
      username: this.state.username,
      password: this.state.password,
      belong: this.state.belong,
      type: '学校'
    }
    axios.post('/api/admin/createpeople', { ...userinfo }).then(res => {
      console.log(res.data)
    })
  }
  render() {
    return (
      <div>
        <Form>
          <Divider>添加学校</Divider>
          <Row>
            <Col span={12} offset={6} style={{ textAlign: 'center' }}>
              <br />
              <Row>
                <Col
                  span={4}
                  style={{
                    lineHeight: '32px',
                    textAlign: 'center'
                  }}
                >
                  学校账号 ：
                </Col>
                <Col span={20}>
                  <Input
                    placeholder="输入学生账号"
                    onChange={e => {
                      this.changeName(e, 'username')
                    }}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col
                  span={4}
                  style={{
                    lineHeight: '32px',
                    textAlign: 'center'
                  }}
                >
                  初始密码 ：
                </Col>
                <Col span={20}>
                  <Input
                    placeholder="输入学生密码"
                    onChange={e => {
                      this.changeName(e, 'password')
                    }}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col
                  span={4}
                  style={{
                    lineHeight: '32px',
                    textAlign: 'center'
                  }}
                >
                  学校名称 ：
                </Col>
                <Col span={20}>
                  <Input
                    placeholder="输入学生密码"
                    onChange={e => {
                      this.changeName(e, 'belong')
                    }}
                  />
                </Col>
              </Row>
              <br />
              <Button
                type="primary"
                onClick={() => {
                  this.createSchool()
                }}
              >
                提交
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}

export default AddSchool
