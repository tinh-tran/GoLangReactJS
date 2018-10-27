import React from 'react';
import axios from "axios";
import { Table, Button, Alert } from "antd";

const { Column } = Table;

class SeeStudents extends React.Component {
    state = {
        myclass: [],
        selectStudent: "一共有0个学生选了您的课程！"
    };
    SeeStudent(classid) {
        console.log(classid);
    }
    GiveScore(classid) {
        console.log(classid);
    }
    componentWillMount() {
        axios
            .post("/api/teacher/class", { userid: this.props.user.userid })
            .then(
                res => {
                    let arr = [];
                    let studentnumber = 0;
                    res.data.filter(v =>
                        v.display !== '否'
                    ).map((v, index) => {
                        let obj = {};
                        obj.key = index + 1;
                        obj.classid = v.classid;
                        obj.classname = v.classname;
                        obj.selectstudent = v.selectstudent;
                        studentnumber += v.selectstudent;
                        obj.type = v.type;
                        arr.push(obj);
                        return null;
                    });
                    this.setState({
                        myclass: arr,
                        selectStudent: `一共有${studentnumber}个学生选了您的课程！`
                    })
                }
            )
    }
    render() {
        return (
            <div>
                <Alert message={this.state.selectStudent} type="success" />
                <br />
                <Table dataSource={this.state.myclass} bordered>
                    <Column title="课程ID" dataIndex="classid" key="classid" />
                    <Column
                        title="课程名称"
                        dataIndex="classname"
                        key="classname"
                    />
                    <Column title="课程类型" dataIndex="type" key="type" />
                    <Column
                        title="选课学生"
                        dataIndex="selectstudent"
                        key="selectstudent"
                    />
                    <Column
                        title="操作"
                        key="action"
                        render={text => (
                            <span>
                                <Button.Group>
                                    <Button
                                        type="primary"
                                        onClick={() => {
                                            this.SeeStudent(text.classid);
                                        }}
                                    >
                                        查看选课学生
                                    </Button>
                                    <Button
                                        type="danger"
                                        onClick={() => {
                                            this.GiveScore(text.classid);
                                        }}
                                    >
                                        录入学生成绩
                                    </Button>
                                </Button.Group>
                            </span>
                        )}
                    />
                </Table>
            </div>
        )
    }
}

export default SeeStudents;