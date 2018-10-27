import React, { Component } from 'react'
import { Layout } from 'antd'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import BarCarousel from '../barcarousel/BarCarousel'
import Hotclass from '../hotclass/HotClass'
const { Content } = Layout

class Home extends Component {
  componentWillMount() {
    this.props.LoadHotClass()
    this.props.LoadPicture()
  }
  render() {
    const {
      header,
      user,
      ChangeHeader,
      Login,
      init,
      SearchItem,
      indeximg
    } = this.props
    header.currect = ['1']
    return (
      <Layout className="layout">
        <Header
          header={header}
          user={user}
          ChangeHeader={ChangeHeader}
          Login={Login}
          SearchItem={SearchItem}
        />
        <Content
          style={{
            boxShadow: '0 2px 8px 0 rgba(7,17,27,.06)',
            padding: '25px 50px'
          }}
        >
          <BarCarousel indeximg={indeximg} />
          <Hotclass hotclassList={init.hotclass} />
        </Content>
        <Footer />
      </Layout>
    )
  }
}

export default Home
