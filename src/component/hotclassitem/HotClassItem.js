import React from 'react';
import { Icon , Row , Col } from 'antd';
import { withRouter } from 'react-router-dom'

class HotClassItem extends React.Component{
    toClass(classid){
        this.props.history.push(`/class/${classid}`)
    }
    render(){
        const { classphoto , selectstudent , classname , belong , teacher , type } = this.props
        return(
            <div style={{ width:'216px',margin:'0 auto',cursor:'pointer' }} onClick={()=>(this.toClass(this.props.classid))}>
                <img src={classphoto} alt='热门课程' style={{height:'121px', width:'215px'}} />
                <div style={{ padding:'12px 8px' }}>
                    <div className='hotclassitem-classname' style={{fontSize:'16px' , fontWeight:'500' , width:'200px',wordWrap:'break-word',textAlign:'left',height:'46px',overflow:'hidden' }}>
                        <p style={{  lineHeight:'24px' }}>{classname}</p>
                    </div>
                    <div className='hotclassitem-classinfo' style={{ width:'200px',height:'24px' }}>
                        <Row>
                            <Col span={17} >
                                <span style={{ float:'left' }}><Icon type="profile" />{belong}</span> 
                            </Col>
                            <Col span={7}>
                                <span style={{ float:'right' }}><Icon type="solution"/>{teacher}</span> 
                            </Col>     
                        </Row>                           
                    </div>
                    <div className='hotclassitem-classinfo' style={{ width:'200px',height:'24px',marginTop:'5px' }}>
                        <Row>
                            <Col span={10} >
                                <span style={{ float:'left' }}><Icon type="book" />{type}</span> 
                            </Col>
                            <Col span={14}>
                                <span style={{ float:'right' }}><Icon type="usergroup-add" />{selectstudent}人选课</span> 
                            </Col>     
                        </Row>                           
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HotClassItem);