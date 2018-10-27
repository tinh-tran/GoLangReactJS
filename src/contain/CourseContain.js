import React from 'react';
import Course from './../component/course/Course';
import { connect } from 'react-redux'
import { ChangeHeader , Login , SearchItem , LoadCourse , IsSelect , LoadChapter , LoadSection , SelectCourse } from '../action';
import { getCourseInfo } from '../selecter';

class CourseContain extends React.Component{
    componentWillMount(){
        this.props.LoadChapter(this.props.match.params.id);
        this.props.LoadSection(this.props.match.params.id);
        this.props.IsSelect(this.props.user.userid,this.props.match.params.id);
        this.props.LoadCourse(this.props.match.params.id);
    }
    render(){
        return(
            <Course {...this.props} />
        )
    }
}

const mapStateToProps = state=>({
    courseInfo:getCourseInfo(state.course.classchapter,state.course.classsection),
    course:state.course,
    header:state.header,
    user:state.user
})


export default connect(mapStateToProps , { ChangeHeader , Login , SearchItem , LoadCourse , IsSelect , LoadChapter , LoadSection , SelectCourse })(CourseContain);