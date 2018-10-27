import React from 'react';
import { Card } from 'antd';
import HotClassItem from '../hotclassitem/HotClassItem';
import './hotclass.css';

class HotClass extends React.Component {
    render() {
        const gridStyle = {
            width: '25%',
            textAlign: 'center',
        };
        const hotClassListItem = this.props.hotclassList || [''];
        const hotClassList = hotClassListItem.map((v,index)=>(
            <Card.Grid style={gridStyle} key={index}>
                <HotClassItem 
                    classid={v.classid}
                    classphoto={v.classphoto} 
                    selectstudent={v.selectstudent} 
                    classname={v.classname} 
                    belong={v.belong}
                    teacher={v.teacher}
                    type={v.type}
                />
            </Card.Grid>
        ))
        return (
            <div style={{ background: '#fff' , padding: 24 ,boxShadow:'0 2px 8px 0 rgba(7,17,27,.66)' }}>
                <div style={{ textAlign:'center',margin:'10px 0 30px 0' }}>
                    <span className='hotclassicon-left'></span>
                    <div className='hotclasstext-center'>
                        <em>热</em>
                        /
                        <em>门</em>
                        /
                        <em>课</em>
                        /
                        <em>程</em>
                    </div>
                    <span className='hotclassicon-right'></span>
                </div>
                <Card id='hotclasscard' style={{ border:'0' }}>
                    {hotClassList}   
                </Card>
            </div>
        )
    }
}

export default HotClass;