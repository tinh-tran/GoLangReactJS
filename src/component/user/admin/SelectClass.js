import React from 'react'
import { Table, Button, message } from 'antd'
import axios from 'axios'
const { Column } = Table
class SelectClass extends React.Component {
  state = {
    classList: []
  }
  componentDidMount() {
    this.fetchData()
  }
  fetchData() {
    axios.post('/api/class/all', { type: this.props.name }).then(res => {
      res.data.map((v, index) => {
        v.key = index
        return v
      })
      this.setState({
        classList: res.data
      })
    })
  }
  handleAdd(classid) {
    axios
      .post('/api/class/add/one', { classid: classid, sqltable: this.props.sqltable, name: this.props.name })
      .then(res => {
        message.success('添加成功！')
        this.fetchData()
      })
  }
  render() {
    return (
      <div>
        <Table dataSource={this.state.classList} bordered size="small">
          <Column title="课程ID" dataIndex="classid" key="classid" />
          <Column title="课程名称" dataIndex="classname" key="classname" />
          <Column title="教师" dataIndex="teacher" key="teacher" />
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
                      this.handleAdd(record.classid)
                    }}
                  >
                    添加至{this.props.name}
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

export default SelectClass
