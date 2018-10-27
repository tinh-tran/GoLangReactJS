import React from 'react'
import axios from 'axios'
import { Row, Col, Button, Input, Divider, Upload, message, Icon } from 'antd'

const { TextArea } = Input

class CreateClass extends React.Component {
  state = {
    classname: '',
    introduction: '',
    teacher: '',
    belong: this.props.user.belong,
    see: 0,
    test: 0,
    offline: 0,
    fileList: []
  }
  SubmitAction() {
    const { fileList } = this.state
    const formData = new FormData()
    formData.append('classphoto', ...fileList)
    formData.append('classname', this.state.classname)
    formData.append('introduction', this.state.introduction)
    formData.append('belong', this.state.belong)
    formData.append('teacher', this.state.teacher)
    formData.append('see', this.state.see)
    formData.append('test', this.state.test)
    formData.append('offline', this.state.offline)
    formData.append('createid', this.props.user.userid)
    formData.append('type','学校专区')
    axios.post('/api/school/create/one', formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => {
      if (res.data === 'ok') {
        this.setState({
          fileList: [],
          classname: '',
          introduction: '',
          belong: '',
          teacher: '',
          see: 0,
          test: 0,
          offline: 0
        })
        message.success('添加成功')
      } else {
        message.error('请完善信息')
      }
    })
  }
  handleSubmit() {
    if (
      this.state.fileList.length > 0 &&
      this.state.classname &&
      this.state.introduction &&
      this.state.belong &&
      this.state.teacher
    ) {
      let see = parseInt(this.state.see)
      let test = parseInt(this.state.test)
      let offline = parseInt(this.state.offline)
      if (see + test + offline === 100) {
        this.SubmitAction()
      } else {
        message.error('成绩总百分比应该为100%')
      }
    } else {
      message.error('新增失败')
    }
  }
  changeName(val, type) {
    const { value } = val.target
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/
    switch (type) {
      case 'see':
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
          this.setState({
            [type]: value
          })
        }
        break
      case 'test':
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
          this.setState({
            [type]: value
          })
        }
        break
      case 'offline':
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
          this.setState({
            [type]: value
          })
        }
        break
      default:
        this.setState({
          [type]: value
        })
    }
  }
  render() {
    const props = {
      name: 'classphoto',
      action: '/api/class/photo',
      headers: {
        authorization: 'authorization-text'
      },
      beforeUpload: file => {
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file]
        }))
        return false
      }
    }
    return (
      <div>
        <Divider>新增一门课程</Divider>
        <br />
        <Row>
          <Col
            span={4}
            style={{
              lineHeight: '32px',
              textAlign: 'center'
            }}
          >
            课程名称 ：
          </Col>
          <Col span={20}>
            <Input
              placeholder="请输入课程名称"
              value={this.state.classname}
              onChange={e => {
                this.changeName(e, 'classname')
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
            教师名称 ：
          </Col>
          <Col span={20}>
            <Input
              placeholder="输入教师名称"
              value={this.state.teacher}
              onChange={e => {
                this.changeName(e, 'teacher')
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
            所属单位 ：
          </Col>
          <Col span={20}>
            <Input
              placeholder="输入所属单位"
              value={this.props.user.belong}
              onChange={e => {
                this.changeName(e, 'belong')
              }}
              disabled
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
            上传课程图片 ：
          </Col>
          <Col span={20}>
            <Upload {...props} accept="image/*" onRemove={() => this.setState({ fileList: [] })}>
              {this.state.fileList.length >= 1 ? null : (
                <Button>
                  <Icon type="picture" /> 点击上传图片
                </Button>
              )}
            </Upload>
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
            课程介绍 ：
          </Col>
          <Col span={20}>
            <TextArea
              placeholder="请输入课程介绍"
              autosize={{ minRows: 2, maxRows: 6 }}
              value={this.state.introduction}
              onChange={e => {
                this.changeName(e, 'introduction')
              }}
            />
          </Col>
        </Row>
        <br />
        <Divider>课程成绩-总共100%</Divider>
        <Row>
          <Col
            span={4}
            style={{
              lineHeight: '32px',
              textAlign: 'center'
            }}
          >
            课件成绩占比 ：
          </Col>
          <Col span={4}>
            <Input
              addonAfter="%"
              value={this.state.see}
              onChange={e => {
                this.changeName(e, 'see')
              }}
            />
          </Col>
          <Col
            span={4}
            style={{
              lineHeight: '32px',
              textAlign: 'center'
            }}
          >
            考试成绩占比 ：
          </Col>
          <Col span={4}>
            <Input
              addonAfter="%"
              value={this.state.test}
              onChange={e => {
                this.changeName(e, 'test')
              }}
            />
          </Col>
          <Col
            span={4}
            style={{
              lineHeight: '32px',
              textAlign: 'center'
            }}
          >
            线下成绩占比 ：
          </Col>
          <Col span={4}>
            <Input
              addonAfter="%"
              value={this.state.offline}
              onChange={e => {
                this.changeName(e, 'offline')
              }}
            />
          </Col>
        </Row>
        <br />
        <div style={{ textAlign: 'center' }}>
          <Button
            type="primary"
            onClick={() => {
              this.handleSubmit()
            }}
          >
            提交
          </Button>
        </div>
      </div>
    )
  }
}

export default CreateClass
