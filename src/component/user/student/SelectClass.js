import React from 'react'
import axios from 'axios'
import { Table, Button, Popconfirm } from 'antd'
import { withRouter } from 'react-router-dom'

const { Column } = Table

class SelectClass extends React.Component {
  state = {
    myclass: []
  }
  fecthData() {
    axios.post('/api/user/selectclass/info', { userid: this.props.user.userid }).then(res => {
      let arr = []
      res.data.map((v, index) => {
        let obj = v
        obj.key = index
        arr.push(obj)
        return null
      })
      this.setState({
        myclass: arr
      })
    })
  }
  componentWillMount() {
    this.fecthData()
  }
  toClass(classid) {
    this.props.history.push(`/class/${classid}`)
    console.log(classid)
  }
  DelectClass(classid) {
    console.log(classid)
  }
  render() {
    return (
      <div>
        <Table dataSource={this.state.myclass} bordered size="small">
          <Column title="课程ID" dataIndex="classid" key="classid" />
          <Column title="课程名称" dataIndex="classname" key="classname" />
          <Column title="课程类型" dataIndex="type" key="type" />
          <Column title="学习成绩" dataIndex="seeclassscore" key="seeclassscore" />
          <Column title="学习成绩占比" dataIndex="see" key="see" />
          <Column title="考试成绩" dataIndex="testscore" key="testscore" />
          <Column title="考试成绩占比" dataIndex="test" key="test" />
          <Column title="线下成绩" dataIndex="offlinescore" key="offlinescore" />
          <Column title="线下成绩占比" dataIndex="offline" key="offline" />
          <Column
            title="操作"
            key="action"
            render={text => (
              <span>
                <Button.Group>
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => {
                      this.toClass(text.classid)
                    }}
                  >
                    学习
                  </Button>
                  <Popconfirm
                    title="确定要退课吗？"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => {
                      this.DelectClass(text.classid)
                    }}
                  >
                    <Button type="danger" size="small">
                      退课
                    </Button>
                  </Popconfirm>
                </Button.Group>
              </span>
            )}
          />
        </Table>
      </div>
    )
  }
}

export default withRouter(SelectClass)
