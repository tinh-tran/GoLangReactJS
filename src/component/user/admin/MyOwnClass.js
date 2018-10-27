import React from 'react'
import axios from 'axios'
import { Table, Button, Divider, message, Modal, Tabs, Icon } from 'antd'
import UpdateClass from './UpdateClass'
import AddVideoPdf from './AddVideoPdf'
const TabPane = Tabs.TabPane
const { Column } = Table

class MyOwnClass extends React.Component {
  state = {
    classList: [],
    visible: false,
    openModalkey: 0,
    UpdateData: {}
  }
  handleCancel() {
    this.setState({
      visible: false
    })
  }
  openModal(row) {
    this.setState({ visible: true, UpdateData: row, openModalkey: this.state.openModalkey++ })
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
    axios.post('/api/user/class', { createid: this.props.user.userid }).then(res => {
      res.data.map((v, index) => {
        v.key = index
        return v
      })
      this.setState({
        classList: res.data
      })
    })
  }
  componentDidMount() {
    this.fecthdata()
  }
  render() {
    return (
      <div>
        <Divider>我的课程</Divider>
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
                  <Button
                    type="primary"
                    onClick={() => {
                      this.openModal(record)
                    }}
                  >
                    管理课程
                  </Button>
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
          title="管理课程"
          visible={this.state.visible}
          width="800px"
          closable={false}
          footer={[
            <Button key="back" onClick={this.handleCancel.bind(this)}>
              关闭
            </Button>
          ]}
        >
          <Tabs defaultActiveKey="2">
            <TabPane
              tab={
                <span>
                  <Icon type="edit" />修改课程基本信息
                </span>
              }
              key="1"
            >
              <UpdateClass
                key={this.state.UpdateData.classid}
                classinfo={this.state.UpdateData}
                openModalkey={this.state.openModalkey}
              />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="folder-add" />添加课件
                </span>
              }
              key="2"
            >
              <AddVideoPdf
                key={this.state.openModalkey}
                classinfo={this.state.UpdateData}
                classid={this.state.UpdateData.classid}
                openModalkey={this.state.openModalkey}
              />
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    )
  }
}

export default MyOwnClass
