import React from 'react'
import './topleftbar.css'
import axios from 'axios'
import { Icon, Popover, Card } from 'antd'
import HotClassItem from '../hotclassitem/HotClassItem'

class TopLeftBar extends React.Component {
  state = {
    julinclass: [''],
    goodclass: [''],
    schoolclass: ['']
  }
  componentWillMount() {
    axios.post('/api/class', { classtype: '巨林专区', page: 1 }).then(res => {
      this.setState({
        julinclass: res.data
      })
    })
    axios.post('/api/class', { classtype: '精品专区', page: 1 }).then(res => {
      this.setState({
        goodclass: res.data
      })
    })
    axios.post('/api/class', { classtype: '学校专区', page: 1 }).then(res => {
      this.setState({
        schoolclass: res.data
      })
    })
  }
  render() {
    const gridStyle = {
      width: '25%',
      textAlign: 'center'
    }
    const julinContain = this.state.julinclass.map((v, index) => (
      <div style={{ flex: 1, marginLeft: '3px' }} key={index}>
        <HotClassItem
          classid={v.classid}
          classphoto={v.classphoto}
          selectstudent={v.selectstudent}
          classname={v.classname}
          belong={v.belong}
          teacher={v.teacher}
          type={v.type}
        />
      </div>
    ))
    const goodclassContain = this.state.goodclass.map((v, index) => (
      <div style={{ flex: 1, marginLeft: '3px' }} key={index}>
        <HotClassItem
          classid={v.classid}
          classphoto={v.classphoto}
          selectstudent={v.selectstudent}
          classname={v.classname}
          belong={v.belong}
          teacher={v.teacher}
          type={v.type}
        />
      </div>
    ))
    const schoolclassContain = this.state.schoolclass.map((v, index) => (
      <div style={{ flex: 1, marginLeft: '3px' }} key={index}>
        <HotClassItem
          classid={v.classid}
          classphoto={v.classphoto}
          selectstudent={v.selectstudent}
          classname={v.classname}
          belong={v.belong}
          teacher={v.teacher}
          type={v.type}
        />
      </div>
    ))
    const julin = <div style={{ display: 'flex', padding: '10px 5px' }}>{julinContain}</div>
    const goodclass = <div style={{ display: 'flex', padding: '10px 5px' }}>{goodclassContain}</div>
    const school = <div style={{ display: 'flex', padding: '10px 5px' }}>{schoolclassContain}</div>
    return (
      <div className="menuContent">
        <div className="item">
          <Popover content={julin} placement="right">
            <a>
              <span className="group">巨林专区</span>
              <i>
                <Icon type="right-circle-o" />
              </i>
            </a>
          </Popover>
        </div>
        <div className="item">
          <Popover content={goodclass} placement="right">
            <a>
              <span className="group">精品专区</span>
              <i>
                <Icon type="right-circle-o" />
              </i>
            </a>
          </Popover>
        </div>
        <div className="item">
          <Popover content={school} placement="right">
            <a>
              <span className="group">学校专区</span>
              <i>
                <Icon type="right-circle-o" />
              </i>
            </a>
          </Popover>
        </div>
      </div>
    )
  }
}

export default TopLeftBar
