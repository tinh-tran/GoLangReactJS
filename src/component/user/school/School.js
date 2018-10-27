import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import UserInfo from '../admin/UserInfo';
import SeeTeacher from "./SeeTeacher";
import AddTeacher from './AddTeacher';
import AddStudent from './AddStudent';
import SeeStudent from './SeeStudent';
const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class School extends React.Component {
    state = {
        key: '1'
    }
    GetContent(key) {
        switch (key) {
            case "1":
                return <UserInfo ChangeUserInfo={this.props.ChangeUserInfo} user={this.props.user} RestartUser={this.props.RestartUser} />;
            case "2":
                return <SeeTeacher user={this.props.user} />;
            case "3":
                return <AddTeacher user={this.props.user} />;
            case "4":
                return <SeeStudent user={this.props.user} />;
            case "5":
                return <AddStudent user={this.props.user} />;
            default:
                return null;
        }
    }
    changeContain(item) {
        this.setState({
            key: item.key
        })
    }
    render() {
        const rightContent = (<div>{this.GetContent(this.state.key)}</div>)
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={[this.state.key]}
                        mode="inline"
                        onClick={(v) => (this.changeContain(v))}
                    >
                        <Menu.Item key="1">
                            <Icon type="solution" />
                            <span>学校信息</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>教师管理</span></span>}
                        >
                            <Menu.Item key="2">查看教师</Menu.Item>
                            <Menu.Item key="3">增加教师</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>学生管理</span></span>}
                        >
                            <Menu.Item key="4">查看学生</Menu.Item>
                            <Menu.Item key="5">增加学生</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="line-chart" />
                            <span>学校大数据</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        {rightContent}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default School;