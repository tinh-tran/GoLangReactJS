import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Layout } from 'antd';
import { withRouter} from 'react-router-dom';
import { List, Button} from 'antd';
const { Content } = Layout;

class Search extends Component {
    constructor(props){
        super(props);
        this.toClass = this.toClass.bind(this);
    }
    toClass(classid){
        this.props.history.push(`/class/${classid}`)
    }
    render() {
        const { header, user, Login, ChangeHeader,search} = this.props;
        header.currect = [''];
        return (
            <Layout className="layout">
                <Header
                    header={header}
                    user={user}
                    ChangeHeader={ChangeHeader}
                    Login={Login}
                />
                <Content style={{ boxShadow: '0 2px 8px 0 rgba(7,17,27,.06)', padding: '25px 50px' }}>
                    <div style={{ background: '#fff', padding: 24, boxShadow: '0 2px 8px 0 rgba(7,17,27,.66)' }}>
                        <List
                            itemLayout="horizontal"
                            bordered={true}
                            dataSource={search.answer}
                            renderItem={item => (
                                <List.Item key={item.classid} style={{ padding:'15px,5px' }} actions={([<Button size="large" type="primary" onClick={ ()=>(this.toClass(item.classid)) }>查看</Button>])}>
                                    <List.Item.Meta
                                        avatar={<img width={200} src={item.classphoto} alt='课程图片'/>}
                                        title={item.classname}
                                        description={item.introduction}
                                        style={{height:'110px',overflow:'hidden'}}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </Content>
                <Footer />
            </Layout>
        )
    }
}

export default withRouter(Search);