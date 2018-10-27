import React from 'react'
import axios from 'axios'
import { Table, Button, Alert, Divider, message, Modal } from 'antd'
import SelectClass from './SelectClass'
const { Column } = Table

class JulinClass extends React.Component {
  state = {
    classList: [],
    message: '当前一共有0门课程！',
    visible: false
  }
  handleCancel() {
    this.setState({
      visible: false
    })
    this.fecthdata()
  }
  online(classid) {
    axios.post('/api/class/changedisplay', { classid: classid, sqltable: 'julinclass', display: '是' }).then(res => {
      message.success('上线成功')
      this.fecthdata()
    })
  }
  outline(classid) {
    axios.post('/api/class/changedisplay', { classid: classid, sqltable: 'julinclass', display: '否' }).then(res => {
      message.success('下线成功')
      this.fecthdata()
    })
  }
  fecthdata() {
    axios.post('/api/class/julin/get').then(res => {
      this.setState({
        classList: res.data.map((v, index) => {
          v.key = index
          return v
        }),
        message: `当前一共有${res.data.length}门课程！`
      })
    })
  }
  componentDidMount() {
    this.fecthdata()
  }
  render() {
    return (
      <div>
        <Divider>巨林专区</Divider>
        <Alert message={this.state.message} type="info" showIcon />
        <br />
        <div style={{ background: '#e8e8e8', height: '34px', paddingTop: '5px', paddingLeft: '5px' }}>
          <Button
            type="primary"
            size="small"
            onClick={() => {
              this.setState({ visible: true })
            }}
          >
            添加一门课程到巨林专区
          </Button>
        </div>
        <Table dataSource={this.state.classList} bordered>
          <Column title="课程名称" dataIndex="classname" key="classname" />
          <Column title="教师" dataIndex="teacher" key="teacher" />
          <Column title="选课人数" dataIndex="selectstudent" key="selectstudent" />
          <Column title="是否上线" dataIndex="display" key="display" />
          <Column
            title="操作"
            key="action"
            render={(text, record) => (
              <span>
                <Button.Group>
                  {record.display === '是' ? (
                    <Button
                      type="danger"
                      onClick={() => {
                        this.outline(record.classid)
                      }}
                    >
                      下线课程
                    </Button>
                  ) : (
                    <Button
                      type="danger"
                      onClick={() => {
                        this.online(record.classid)
                      }}
                    >
                      上线课程
                    </Button>
                  )}
                </Button.Group>
              </span>
            )}
          />
        </Table>
        <Modal
          title="添加课程"
          visible={this.state.visible}
          width="1000px"
          closable={false}
          footer={[
            <Button key="back" onClick={this.handleCancel.bind(this)}>
              关闭
            </Button>
          ]}
        >
          <SelectClass sqltable="julinclass" name="巨林专区" />
        </Modal>
      </div>
    )
  }
}

export default JulinClass
