import React from 'react'
import axios from 'axios'
import { Row, Col, Button, Input, Divider, Upload, message, Icon } from 'antd'

class CommonUpdate extends React.Component {
  state = {
    fileList: []
  }
  componentWillReceiveProps(nextProps) {
    this.props = nextProps
  }
  handleSubmit() {
    const { fileList } = this.state
    const formData = new FormData()
    formData.append('classinfo', ...fileList)
    formData.append('type', this.props.way)
    formData.append('classsectionid', this.props.classsectionid)
    formData.append('classid', this.props.classid)
    axios
      .post('/api/course/addOneResources', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(res => {
        message.success('上传成功！')
        this.props.handleChange()
        this.setState({
          fileList: []
        })
      })
  }
  render() {
    const props = {
      name: 'classinfo',
      action: '/api/course/addOneResources',
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
      <div style={{ display: 'inline' }}>
        {this.state.fileList.length < 1 ? (
          <Upload {...props} onRemove={() => this.setState({ fileList: [] })}>
            <Button type={this.props.type}>
              <Icon type="upload" /> {this.props.name}
            </Button>
          </Upload>
        ) : (
          <Button
            size="small"
            type="primary"
            onClick={() => {
              this.handleSubmit()
            }}
          >
            提交
          </Button>
        )}
      </div>
    )
  }
}

export default CommonUpdate
