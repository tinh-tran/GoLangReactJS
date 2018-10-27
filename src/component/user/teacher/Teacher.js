import React from "react";
import { Layout, Menu, Icon } from "antd";
import UserInfo from "../admin/UserInfo";
import CreateClass from "./CreateClass";
import MyOwnClass from "./MyOwnClass";
import SeeStudent from "./SeeStudent";
const { Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Teacher extends React.Component {
    state = {
        key: "1"
    };
    GetContent(key) {
        switch (key) {
            case "1":
                return (
                    <UserInfo
                        ChangeUserInfo={this.props.ChangeUserInfo}
                        user={this.props.user}
                        RestartUser={this.props.RestartUser}
                    />
                );
            case "3":
                return <CreateClass user={this.props.user} />;
            case "4":
                return (
                    <MyOwnClass
                        user={this.props.user}
                        GET_MYCLASS={this.props.GET_MYCLASS}
                    />
                );
            case "5":
                return <SeeStudent user={this.props.user} />;
            default:
                return null;
        }
    }
    changeContain(item) {
        this.setState({
            key: item.key
        });
    }
    render() {
        const rightContent = <div>{this.GetContent(this.state.key)}</div>;
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <Sider>
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={[this.state.key]}
                        mode="inline"
                        onClick={v => this.changeContain(v)}
                    >
                        <Menu.Item key="1">
                            <Icon type="solution" />
                            <span>个人信息</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    <span>课程管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="4">我的课程</Menu.Item>
                            <Menu.Item key="3">创建课程</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="team" />
                                    <span>学生管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="5">查看课程学生</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="7">
                            <Icon type="line-chart" />
                            <span>我的大数据</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content
                        style={{
                            padding: 24,
                            background: "#fff",
                            minHeight: 360
                        }}
                    >
                        {rightContent}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Teacher;
