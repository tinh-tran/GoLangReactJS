import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import UserInfo from './UserInfo'
import HotClass from './HotClass'
import Indeximg from './Indeximg'
import SchoolMg from './SchoolMg'
import AddSchool from './AddSchool'
import JinPinClass from './JinPinClass'
import JulinClass from './JulinClass'
import SchoolClass from './SchoolClass'
import AddClass from './AddClass'
import MyOwnClass from './MyOwnClass'

const { Content, Sider } = Layout
const SubMenu = Menu.SubMenu

class Admin extends React.Component {
  state = {
    key: '1'
  }
  GetContent(key) {
    switch (key) {
      case '1':
        return (
          <UserInfo
            ChangeUserInfo={this.props.ChangeUserInfo}
            user={this.props.user}
            RestartUser={this.props.RestartUser}
          />
        )
      case '2':
        return <Indeximg indeximg={this.props.indeximg} />
      case '3':
        return <HotClass hotclass={this.props.hotclass} />
      case '4':
        return <SchoolMg />
      case '5':
        return <AddSchool />
      case '6':
        return <AddClass user={this.props.user} />
      case '7':
        return <JulinClass />
      case '8':
        return <JinPinClass />
      case '9':
        return <SchoolClass />
      case '10':
        return <MyOwnClass user={this.props.user} />
      default:
        return null
    }
  }
  changeContain(item) {
    this.setState({
      key: item.key
    })
  }
  render() {
    const rightContent = <div>{this.GetContent(this.state.key)}</div>
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <Menu theme="dark" defaultSelectedKeys={[this.state.key]} mode="inline" onClick={v => this.changeContain(v)}>
            <Menu.Item key="1">
              <Icon type="solution" />
              <span>个人信息</span>
            </Menu.Item>
            <SubMenu
              key="sub0"
              title={
                <span>
                  <Icon type="user" />
                  <span>网站管理</span>
                </span>
              }
            >
              <Menu.Item key="2">首页图片管理</Menu.Item>
              <Menu.Item key="3">热门课程管理</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>学校管理</span>
                </span>
              }
            >
              <Menu.Item key="4">查看学校</Menu.Item>
              <Menu.Item key="5">增加学校</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>课程管理</span>
                </span>
              }
            >
              <Menu.Item key="6">新增课程</Menu.Item>
              <Menu.Item key="10">我的课程</Menu.Item>
              <Menu.Item key="7">巨林专区管理</Menu.Item>
              <Menu.Item key="8">精品专区管理</Menu.Item>
              <Menu.Item key="9">学校专区管理</Menu.Item>
            </SubMenu>
            <Menu.Item key="11">
              <Icon type="line-chart" />
              <span>我的大数据</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: 24, background: '#fff', minHeight: 360 }}>{rightContent}</Content>
        </Layout>
      </Layout>
    )
  }
}

export default Admin
