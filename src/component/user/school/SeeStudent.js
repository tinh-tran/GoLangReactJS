import React from 'react'
import axios from 'axios'
import { Table, Button, Alert } from 'antd'

const { Column } = Table

class SeeStudent extends React.Component {
  state = {
    peopleList: [],
    message: '当前一共有0个学生！'
  }
  componentWillMount() {
    axios
      .post('/api/school/findpeople', {
        type: '学生',
        belong: this.props.user.belong
      })
      .then(res => {
        res.data.map((v, index) => {
          v.key = index + 1
        })
        this.setState({
          peopleList: res.data,
          message: `当前一共有${res.data.length}个学生！`
        })
      })
  }
  render() {
    return (
      <div>
        <Alert message={this.state.message} type="info" showIcon />
        <br />
        <Table dataSource={this.state.peopleList} bordered>
          <Column title="用户ID" dataIndex="userid" key="userid" />
          <Column title="用户名" dataIndex="username" key="username" />
          <Column title="昵称" dataIndex="type" key="type" />
          <Column title="显示名称" dataIndex="displayname" key="displayname" />
          <Column
            title="操作"
            key="action"
            render={text => (
              <span>
                <Button.Group>
                  <Button
                    type="primary"
                    onClick={() => {
                      this.SeeStudent(text.classid)
                    }}
                  >
                    查看选课学生
                  </Button>
                  <Button
                    type="danger"
                    onClick={() => {
                      this.GiveScore(text.classid)
                    }}
                  >
                    重置密码
                  </Button>
                </Button.Group>
              </span>
            )}
          />
        </Table>
      </div>
    )
  }
}

export default SeeStudent
