import React from 'react';
import './classlist.css';
import { withRouter } from 'react-router-dom';
import { List , Icon , Pagination} from 'antd';


const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class ClassList extends React.Component {
    constructor(props){
        super(props);
        this.ChangeClasspage = this.ChangeClasspage.bind(this);
        this.toClass = this.toClass.bind(this);
    }
    toClass(classid){
        this.props.history.push(`/class/${classid}`)
    }
    ChangeClasspage(v){
        let info = {
            classtype:this.props.classnum.classtype,
            page:v
        }
        this.props.LoadClass(info);
    }
    render() {
        const { classlist , classnum } = this.props;
        const listData = classlist.classdata;
        return (
            <div>
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.classid}
                            style={{ cursor:'pointer' }}
                            actions={[<IconText type="profile" text={item.belong} />, <IconText type="solution" text={item.teacher} /> , <IconText type="usergroup-add" text={item.selectstudent} />]}
                            extra={<img width={272} alt="logo" src={item.classphoto} />}
                            onClick={()=>(this.toClass(item.classid))}
                        >
                            <List.Item.Meta    
                                title={item.classname} 
                            />
                            <div style={{ height:'84px',overflow:'hidden' }}>
                                {item.introduction}
                            </div>
                        </List.Item>
                    )}
                />
                <Pagination defaultCurrent={classlist.page} total={ classnum.num } pageSize={4} style={{  textAlign:'center' , marginTop:'10px' }} onChange={v=>this.ChangeClasspage(v)}/>
            </div>
        )
    }
}

export default withRouter(ClassList);