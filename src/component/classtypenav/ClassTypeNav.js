import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import ClassList from '../classlist/ClassList';
const { Content, Sider } = Layout;

class ClassTypeNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            classkey:"1"
        }
        this.ChangeClassType = this.ChangeClassType.bind(this);
    }
    componentWillMount(){
        let info = {
            classtype:this.props.classnum.classtype,
            page:this.props.classlist.page
        }
        this.props.LoadClass(info); 
        this.props.GetClassNum('全部');
    }
    ChangeClassType(item){     
        let currectList = this.props.classtype.find(v=>(
            v.typeid === parseInt(item.key,10)
        ))
        console.log(currectList)
        if(!currectList){
            this.props.GetClassNum('全部');
            let info = {
                classtype:'全部',
                page:this.props.classlist.page
            }
            this.props.LoadClass(info);
        }else{
            this.props.GetClassNum(currectList.typename);
            let info = {
                classtype:currectList.typename,
                page:this.props.classlist.page
            }
            this.props.LoadClass(info);
        }
    }
    render() {
        const { classtype , classlist , LoadClass ,classnum,GetClassNum} = this.props;
        const menuItemLeft = classtype.map(v =>(
            <Menu.Item key={v.typeid}><Icon type={v.icon} />{v.typename}</Menu.Item>
        ))
        return (
            <Layout>
                <Content style={{ padding: '50px 70px 20px 70px' }}>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                onClick={item=>this.ChangeClassType(item)}
                            >
                                <Menu.Item key="1"><Icon type="appstore-o" />全部</Menu.Item>
                               { menuItemLeft }   
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <ClassList classnum={ classnum }  classtype={ classtype } classlist={ classlist } LoadClass={LoadClass} GetClassNum={GetClassNum}/>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        )

    }
}

export default ClassTypeNav;