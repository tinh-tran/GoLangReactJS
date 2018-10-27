import React from 'react'
import './barcarousel.css'
import { Carousel, Row, Col } from 'antd'
import TopLeftBar from '../topleftbar/TopLeftBar'

class BarCarousel extends React.Component {
  render() {
    const CarouselContain = this.props.indeximg.map((v, index) => (
      <div key={index}>
        <img src={v.picture} alt="幻灯片" width="100%" height="100%" />
      </div>
    ))
    return (
      <div id="barcarousel" style={{ background: '#f0f2f5', marginBottom: '30px', height: '400px' }}>
        <Row>
          <Col span={5}>
            <div style={{ background: '#2b333b', height: '400px', paddingTop: '8px', paddingBottom: '8px' }}>
              <TopLeftBar />
            </div>
          </Col>
          <Col span={19}>
            <Carousel autoplay>{CarouselContain}</Carousel>
          </Col>
        </Row>
      </div>
    )
  }
}

export default BarCarousel
