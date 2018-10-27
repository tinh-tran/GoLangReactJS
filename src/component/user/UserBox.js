import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Student from './student/Student';
import Teacher from './teacher/Teacher';
import School from './school/School';
import Admin from './admin/Admin';
import { Layout } from 'antd';
const { Content } = Layout;


class UserBox extends React.Component {
    render() {
        const { header, user, ChangeHeader, Login, SearchItem, RestartUser, ChangeUserInfo, hotclass, indeximg, GET_MYCLASS } = this.props;
        header.currect = [''];
        const { type } = user;
        return (
            <Layout className="layout">
                <Header
                    header={header}
                    user={user}
                    ChangeHeader={ChangeHeader}
                    Login={Login}
                    SearchItem={SearchItem}
                />
                <Content style={{ boxShadow: '0 2px 8px 0 rgba(7,17,27,.06)', padding: '25px 50px' }}>
                    <div style={{ background: '#fff', boxShadow: '0 2px 8px 0 rgba(7,17,27,.66)' }}>
                        {
                            (type === '学生') ?
                                <Student user={user} RestartUser={RestartUser} ChangeUserInfo={ChangeUserInfo} />
                                : (type === '教师') ?
                                    <Teacher user={user} RestartUser={RestartUser} ChangeUserInfo={ChangeUserInfo} GET_MYCLASS={GET_MYCLASS} />
                                    : (type === '学校') ?
                                        <School user={user} RestartUser={RestartUser} ChangeUserInfo={ChangeUserInfo} />
                                        : (type === '管理员') ?
                                            <Admin user={user} hotclass={hotclass} RestartUser={RestartUser} ChangeUserInfo={ChangeUserInfo} indeximg={indeximg} />
                                            : this.props.history.push('/')
                        }
                    </div>
                </Content>
                <Footer />
            </Layout>
        )
    }
}


export default withRouter(UserBox);