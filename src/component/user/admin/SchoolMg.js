import React from 'react'
import axios from 'axios'
import { Table, Button, Alert } from 'antd'

const { Column } = Table

class SchoolMg extends React.Component {
  state = {
    peopleList: [],
    message: '当前一共有0个学校！'
  }
  componentWillMount() {
    axios.post('/api/admin/findpeople', { type: '学校' }).then(res => {
      let arr = []
      res.data.map((v, index) => {
        let obj = v
        obj.key = index
        arr.push(obj)
      })
      this.setState({
        peopleList: arr,
        message: `当前一共有${arr.length}个学校！`
      })
      console.log(this.state.peopleList)
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
          <Column title="学校名称" dataIndex="belong" key="belong" />
          <Column title="用户密码" dataIndex="password" key="password" />
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
                    管理学校
                  </Button>
                  <Button
                    type="danger"
                    onClick={() => {
                      this.GiveScore(text.classid)
                    }}
                  >
                    删除学校
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

export default SchoolMg
