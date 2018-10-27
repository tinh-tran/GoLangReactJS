import React from 'react'
import axios from 'axios'
import { Card, List, Button, message, Icon, Modal, Row, Col, Input } from 'antd'
import swal from 'sweetalert2'
import { getCourseInfo } from '../../../selecter'
import CommonUpdate from './CommonUpdate'
const ButtonGroup = Button.Group
class AddVideoPdf extends React.Component {
  state = {
    classinfo: [],
    visible: false,
    classchapter: [],
    classsection: [],
    chaptername: ''
  }
  handleChange = newData => {
    this.fecthData()
  }
  handleCancel() {
    this.setState({
      visible: false
    })
  }
  openModel() {
    this.setState({
      visible: true
    })
  }
  openModel1(item, chapterid) {
    swal({
      title: '增加课程小节',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: '提交'
    }).then(res => {
      axios
        .post('/api/course/section/add', {
          chapterid: chapterid,
          classid: this.props.classid,
          sectionname: res.value,
          sectionorder: item.contain.length + 1 || 1
        })
        .then(res => {
          message.success('添加成功')
          this.fecthData()
        })
    })
  }

  componentWillMount() {
    this.fecthData()
  }
  componentWillReceiveProps(nextProps) {
    this.props = nextProps
    this.fecthData()
  }
  fecthData() {
    axios.post('/api/course/chapter', { classid: this.props.classinfo.classid }).then(chapter => {
      const classchapter = chapter.data
      this.setState({
        classchapter: classchapter
      })
      axios.post('/api/course/section', { classid: this.props.classinfo.classid }).then(section => {
        const classsection = section.data
        this.setState({
          classinfo: getCourseInfo(classchapter, classsection),
          classsection: classsection
        })
      })
    })
  }
  AddChapter() {
    axios
      .post('/api/course/chapter/add', {
        classid: this.props.classid,
        chaptername: this.state.chaptername,
        chapterorder: this.state.classinfo.length + 1 || 1
      })
      .then(res => {
        message.success('添加成功')
        this.handleCancel()
        this.fecthData()
      })
  }
  render() {
    const ClassList = this.state.classinfo.map((item, index) => (
      <div>
        <Card key={index} type="inner" title={item.title} style={{ marginTop: '18px' }}>
          <Button
            onClick={() => {
              this.openModel1(item, this.state.classchapter[index].chapterid)
            }}
          >
            <Icon type="plus" />添加课程小节
          </Button>
          <List
            bordered
            dataSource={item.contain}
            renderItem={item => (
              <List.Item>
                {item.title}
                {item.sectionvideo ? (
                  <CommonUpdate
                    type="danger"
                    name="修改视频"
                    way="video"
                    classsectionid={item.classsectionid}
                    classid={this.props.classid}
                    handleChange={this.handleChange}
                  />
                ) : (
                  <CommonUpdate
                    type=""
                    name="上传视频"
                    way="video"
                    classsectionid={item.classsectionid}
                    classid={this.props.classid}
                    handleChange={this.handleChange}
                  />
                )}
                {item.sectionpdf ? (
                  <CommonUpdate
                    type="danger"
                    name="修改PDF"
                    way="pdf"
                    classsectionid={item.classsectionid}
                    classid={this.props.classid}
                    handleChange={this.handleChange}
                  />
                ) : (
                  <CommonUpdate
                    type=""
                    name="上传PDF"
                    way="pdf"
                    classsectionid={item.classsectionid}
                    classid={this.props.classid}
                    handleChange={this.handleChange}
                  />
                )}
              </List.Item>
            )}
          />
        </Card>
      </div>
    ))
    return (
      <div>
        <ButtonGroup>
          <Button
            onClick={() => {
              this.openModel()
            }}
          >
            <Icon type="plus" />添加课程大节
          </Button>
        </ButtonGroup>
        {ClassList}
        <Modal
          title="新增大节"
          visible={this.state.visible}
          closable={false}
          footer={[
            <Button key="backone" onClick={this.handleCancel.bind(this)}>
              关闭
            </Button>,
            <Button key="asdasd" type="primary" onClick={this.AddChapter.bind(this)}>
              提交
            </Button>
          ]}
        >
          <Row>
            <Col
              span={4}
              style={{
                lineHeight: '32px',
                textAlign: 'center'
              }}
            >
              章节名称 ：
            </Col>
            <Col span={20}>
              <Input
                placeholder="输入章节名称"
                value={this.state.chaptername}
                onChange={e => {
                  this.setState({ chaptername: e.target.value })
                }}
              />
            </Col>
          </Row>
        </Modal>
      </div>
    )
  }
}

export default AddVideoPdf
