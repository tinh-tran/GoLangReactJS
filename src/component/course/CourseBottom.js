import React from 'react'
import VideoPlayer from '../videoplayer/VideoPlayer'
import { Tabs, Icon, Row, Col, Card, List, Button, message, Modal } from 'antd'
import axios from 'axios'
const TabPane = Tabs.TabPane
const ButtonGroup = Button.Group

class CourseBottom extends React.Component {
  componentWillReceiveProps(nextProps) {
    this.props = nextProps
  }
  state = {
    videoVisible: false,
    pdfVisible: false,
    pdf: '',
    videoJsOptions: {
      autoplay: true,
      controls: true,
      fluid: true,
      playbackRates: [0.75, 1, 1.5, 2],
      sources: [
        {
          src: '',
          type: 'video/mp4'
        }
      ]
    }
  }
  seeClass(video, pdf, sectionid) {
    axios
      .post('/api/course/addjindu', {
        video: video,
        pdf: pdf,
        classid: this.props.classinfo.classid,
        sectionid: sectionid,
        userid: this.props.user.userid
      })
      .then(res => {
        message.success('进度记录成功！')
        this.props.handleAdd()
      })
  }
  CloseVideo() {
    this.setState({ videoVisible: false })
  }
  ClosePdf() {
    this.setState({ pdfVisible: false })
  }
  PlayVideo(video, sectionid) {
    this.seeClass(video, '', sectionid)
    this.setState({
      videoVisible: true,
      videoJsOptions: {
        autoplay: true,
        controls: true,
        fluid: true,
        playbackRates: [0.75, 1, 1.5, 2],
        sources: [
          {
            src: video,
            type: 'video/mp4'
          }
        ]
      }
    })
  }
  PlayPdf(pdf, sectionid) {
    this.seeClass('', pdf, sectionid)
    this.setState({
      pdfVisible: true,
      pdf: pdf
    })
  }
  render() {
    const { courseInfo, isSelect } = this.props
    const TestList = (
      <div style={{ background: '#ECECEC', padding: '50px', textAlign: 'center' }}>
        <Button type="primary" icon="form" size="large">
          点击开始考试
        </Button>
      </div>
    )
    const ClassList = courseInfo.map((item, index) => (
      <Card key={index} type="inner" title={item.title} style={{ marginTop: '18px' }}>
        <List
          bordered
          dataSource={item.contain}
          renderItem={item => (
            <List.Item>
              {item.title}
              <ButtonGroup>
                {item.sectionvideo ? (
                  <Button
                    type="primary"
                    icon="play-circle"
                    onClick={() =>
                      isSelect ? this.PlayVideo(item.sectionvideo, item.classsectionid) : message.error('未选课', 0.5)
                    }
                  />
                ) : null}
                {item.sectionpdf ? (
                  <Button
                    type="primary"
                    icon="file-pdf"
                    onClick={() =>
                      isSelect ? this.PlayPdf(item.sectionpdf, item.classsectionid) : message.error('未选课', 0.5)
                    }
                  />
                ) : null}
              </ButtonGroup>
            </List.Item>
          )}
        />
      </Card>
    ))
    return (
      <Row>
        <Col span={18}>
          <Tabs defaultActiveKey="1" size="large">
            <TabPane
              tab={
                <span>
                  <Icon type="folder" />课件
                </span>
              }
              key="1"
            >
              {ClassList}
            </TabPane>
            <TabPane
              tab={
                <span>
                  <Icon type="copy" />考试
                </span>
              }
              key="2"
            >
              {TestList}
            </TabPane>
          </Tabs>
        </Col>
        <Col span={6} />
        <Modal
          className="VideoPlayer"
          title={<div style={{ textAlign: 'center' }}>课程视频</div>}
          wrapClassName="vertical-center-modal"
          visible={this.state.videoVisible}
          mask={false}
          footer={null}
          maskClosable={false}
          destroyOnClose={true}
          bodyStyle={{
            padding: '5px'
          }}
          onCancel={this.CloseVideo.bind(this)}
        >
          <VideoPlayer {...this.state.videoJsOptions} />
        </Modal>
        <Modal
          className="PdfPlayer"
          title={<div style={{ textAlign: 'center' }}>课件</div>}
          wrapClassName="vertical-center-modal"
          visible={this.state.pdfVisible}
          onCancel={this.ClosePdf.bind(this)}
          maskClosable={false}
          destroyOnClose={true}
          mask={false}
          bodyStyle={{
            padding: '5px'
          }}
          footer={null}
        >
          <embed src={this.state.pdf} width="100%" height="466px" className="pdfPlayer" />
        </Modal>
      </Row>
    )
  }
}

export default CourseBottom
