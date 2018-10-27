import React from 'react'
import { Row, Col, Progress, Button } from 'antd'
import axios from 'axios'

class CourseTop extends React.Component {
  state = {
    number: 0,
    seenumber: 0,
    process: 0
  }
  giveSeeScore() {
    axios
      .post('/api/user/score', {
        userid: this.props.user.userid,
        classid: this.props.classinfo.classid,
        seeclassscore: this.state.process,
        testscore: '',
        offlinescore: ''
      })
      .then(res => {
        console.log(res.data)
      })
  }
  fecthData() {
    axios.post('/api/course/section', { classid: this.props.classinfo.classid }).then(res => {
      const classsection = res.data
      let number = 0
      if (classsection.length > 0) {
        classsection.map(v => {
          if (v.sectionvideo) {
            number++
          }
          if (v.sectionpdf) number++
        })
      } else {
        this.setState({
          number: 0
        })
      }
      if (this.state.seenumber != 0 && this.number != 0) {
        this.setState({
          number: number,
          process: this.state.seenumber * 100 / number
        })
        this.giveSeeScore()
      } else {
        this.setState({
          number: number
        })
      }
    })
    axios
      .post('/api/course/onejindu', { classid: this.props.classinfo.classid, userid: this.props.user.userid })
      .then(res => {
        let seenumber = 0
        res.data.map(v => {
          if (v.video === '有') {
            seenumber++
          }
          if (v.pdf === '有') {
            seenumber++
          }
        })
        if (this.state.number != 0) {
          this.setState({
            seenumber: seenumber,
            process: seenumber * 100 / this.state.number
          })
          this.giveSeeScore()
        } else {
          this.setState({
            seeclass: seenumber
          })
        }
      })
  }
  componentWillReceiveProps(nextProps) {
    this.props = nextProps
    this.fecthData()
  }
  render() {
    const { classinfo, user, isSelect } = this.props
    return (
      <Row style={{ height: '140px' }} key={this.props.classnake}>
        <Col span={6}>
          <img src={classinfo.classphoto} alt="图片" width="250px" />
        </Col>
        <Col span={13}>
          <h1> {classinfo.classname} </h1>
          <p> {classinfo.introduction} </p>
        </Col>
        <Col span={5} style={{ textAlign: 'center' }}>
          {isSelect ? (
            <Progress
              style={{ marginTop: '10px' }}
              type="dashboard"
              percent={this.state.process}
              format={p => {
                if (p === 100) {
                  return '完成'
                } else {
                  return `${p}%`
                }
              }}
            />
          ) : (
            <Button
              size="large"
              type="primary"
              style={{ marginTop: '50px' }}
              onClick={() => this.props.SelectCourse(classinfo.classid, user.userid)}
            >
              选课
            </Button>
          )}
        </Col>
      </Row>
    )
  }
}

export default CourseTop
