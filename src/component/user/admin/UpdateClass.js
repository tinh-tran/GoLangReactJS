import React from 'react'
import axios from 'axios'
import { Row, Col, Button, Input, Upload, message, Icon } from 'antd'

const { TextArea } = Input

class UpdateClass extends React.Component {
  state = {
    classname: '',
    introduction: '',
    teacher: '',
    belong: '',
    fileList: []
  }
  handleSubmit() {
    if (
      this.state.fileList.length > 0 &&
      this.state.classname &&
      this.state.introduction &&
      this.state.belong &&
      this.state.teacher
    ) {
      const { fileList } = this.state
      const formData = new FormData()
      formData.append('classphoto', ...fileList)
      formData.append('classname', this.state.classname)
      formData.append('introduction', this.state.introduction)
      formData.append('belong', this.state.belong)
      formData.append('teacher', this.state.teacher)
      formData.append('createid', this.props.user.userid)
      axios
        .post('/api/class/create/one', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(res => {
          if (res.data === 'ok') {
            this.setState({
              fileList: [],
              classname: '',
              introduction: '',
              belong: '',
              teacher: ''
            })
            message.success('添加成功')
          } else {
            message.error('添加失败')
          }
        })
    } else {
      message.error('新增失败')
    }
  }
  changeName(val, type) {
    this.setState({
      [type]: val.target.value
    })
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
              placeholder={this.props.classinfo.classname}
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
              placeholder={this.props.classinfo.teacher}
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
              placeholder={this.props.classinfo.belong}
              value={this.state.belong}
              onChange={e => {
                this.changeName(e, 'belong')
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
              placeholder={this.props.classinfo.introduction}
              autosize={{ minRows: 2, maxRows: 6 }}
              value={this.state.introduction}
              onChange={e => {
                this.changeName(e, 'introduction')
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

export default UpdateClass
