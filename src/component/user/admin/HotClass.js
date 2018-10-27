import React from 'react';
import { Table, Button } from 'antd';


class HotClass extends React.Component {
    handleClick(a){
        console.log(a)
    }
    render() {
        const columns = [{
            title: '课程ID',
            dataIndex: 'classid',
            key: 'classid',
        }, {
            title: '课程名称',
            dataIndex: 'classname',
            key: 'classname',
        }, {
            title: '所属单位',
            dataIndex: 'belong',
            key: 'belong',
        }, {
            title: '授课教师',
            dataIndex: 'teacher',
            key: 'teacher',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <div>
                    <Button type="primary" onClick={()=>{this.handleClick(record.classid)}}>修改</Button>
                </div>
            ),
        }];
        const hotclassList = this.props.hotclass.map((v, index) => {
            v.key = index;
            return v
        })
        return (
            <Table columns={columns} dataSource={hotclassList} />
        );
    }
}

export default HotClass;