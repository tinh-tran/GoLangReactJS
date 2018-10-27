import React from 'react';
import { Layout, Menu, Input, Row, Col, Button, Icon, Avatar, Popconfirm , Modal, Form } from 'antd';
import { withRouter } from 'react-router-dom';
import './header.css';
import HeaderLogo from '../logo/logo';
const { Header } = Layout;
const Search = Input.Search;
const ButtonGroup = Button.Group;
const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;

function logout() {
    let mylocal =  localStorage
    mylocal.clear('persist:intell-learn-www.heikunan.vip')
    window.location.reload()
}

class CommonHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            visible: false
        }
        this.showModel = this.showModel.bind(this);
        this.login = this.login.bind(this);
        this.MenuClick = this.MenuClick.bind(this);
        this.modelCancel = this.modelCancel.bind(this);
        this.toUser = this.toUser.bind(this);
        this.searchItem = this.searchItem.bind(this);
    }
    searchItem(v){
        this.props.SearchItem(v);
        this.props.history.push('/search');
    }
    modelCancel() {
        this.setState({
            visible: false
        });
    }
    showModel() {
        this.setState({
            visible: true
        });
    }
    login() {
        const userinfo = {
            username:this.state.username,
            password:this.state.password
        }
        this.props.Login(userinfo);    
        this.setState({
            visible: false,
        })
    }
    MenuClick(key) {
        switch (key) {
            case '1':
                this.props.ChangeHeader(['1']);
                this.props.history.push('/');
                break;
            case '2':
                this.props.ChangeHeader(['2']);
                this.props.history.push('/class');
                break;
            case '3':
                this.props.ChangeHeader(['3']);
                this.props.history.push('/bigdata');
                break;
            default:
                return null;
        }
    }
    toUser(){
        this.props.ChangeHeader(['']);
        this.props.history.push('/user')
    }
    render() {
        const suffix = this.state.username ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        const psuffix = this.state.password ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        const loginTitle = (<div style={{ textAlign: 'center' }}>登陆</div>)
        return (
            <Header>
                <Row gutter={16}>
                    <Col span={6}>
                        <div className="logo" >
                            <HeaderLogo />
                        </div>
                    </Col>
                    <Col span={10} style={{ textAlign: 'center' }}>
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={this.props.header.currect}
                            style={{ lineHeight: '64px', display: 'inline-block' }}
                            onClick={item => this.MenuClick(item.key)}
                        >
                            <Menu.Item key="1" onClick={this.tohome}><Icon type="home" />首页</Menu.Item>
                            <Menu.Item key="2" onClick={this.toclass}><Icon type="book" />课程</Menu.Item>
                            <Menu.Item key="3" onClick={this.tobigdata}><Icon type="dot-chart" />智慧大数据</Menu.Item>
                            <SubMenu title={'学习助手'}>
                                <Menu.Item key="4"><Icon type="android" />安卓</Menu.Item>
                                <Menu.Item key="5"><Icon type="apple" />苹果</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col span={4}>
                        <Search
                            placeholder="输入课程名称"
                            onSearch={v => this.searchItem(v)}
                            enterButton
                        />
                    </Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                        {!this.props.user.isAuth ?
                            <ButtonGroup style={{ display: 'inline-block' }}>
                                <Button type="primary" icon="user" onClick={this.showModel}>登陆</Button>
                            </ButtonGroup>
                            :
                            <span>
                                <span key="left" style={{ marginRight: 24,cursor:'pointer' }} onClick={this.toUser}>
                                    <Avatar shape="square" src={ this.props.user.userphoto || "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"  } />
                                </span>
                                <span key="right">
                                    <Popconfirm title="确定注销当前账户？" okText="是" cancelText="否" onConfirm={logout}>
                                        <a href="#">注销</a>
                                    </Popconfirm>
                                </span>
                            </span>
                        }
                        <Modal
                            title={loginTitle}
                            okText="登陆"
                            cancelText="取消"
                            visible={this.state.visible}
                            onOk={this.login}
                            wrapClassName="vertical-center-modal"
                            onCancel={this.modelCancel}
                        >
                            <Form>
                                <FormItem>
                                    <Input
                                        placeholder="请输入用户名"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        suffix={suffix}
                                        value={this.state.username}
                                        onChange={e => this.setState({ username: e.target.value })}
                                    />
                                </FormItem>
                                <FormItem>
                                    <Input
                                        placeholder="请输入密码"
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        suffix={psuffix}
                                        value={this.state.password}
                                        onChange={e => this.setState({ password: e.target.value })}
                                        type="password"
                                    />
                                </FormItem>
                            </Form>
                        </Modal>
                    </Col>
                </Row>
            </Header>
        )
    }
}

export default withRouter(CommonHeader);