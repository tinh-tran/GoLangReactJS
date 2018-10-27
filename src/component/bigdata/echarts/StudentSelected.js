import React from 'react'
import echarts from 'echarts'
import { Alert, Icon } from 'antd'

const message = (
  <span>
    <Icon type="team" /> 学生选课数
  </span>
)

class StudentSelected extends React.Component {
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('studentSelected'))
    // 绘制图表
    myChart.setOption({
      legend: {
        data: ['学生选课']
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: '巨林专区', max: 16000 },
          { name: '计算机', max: 16000 },
          { name: '经济管理', max: 30000 },
          { name: '心理学', max: 38000 },
          { name: '外语', max: 52000 },
          { name: '文学历史', max: 38000 },
          { name: '生命科学', max: 38000 },
          { name: '工学', max: 52000 },
          { name: '理学', max: 52000 },
          { name: '法学', max: 52000 },
          { name: '教育教学', max: 25000 }
        ]
      },
      series: [
        {
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [10000, 10000, 28000, 35000, 50000, 19000, 10000, 10000, 13000, 19000, 13000],
              name: '预算分配（Allocated Budget）'
            }
          ]
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <Alert showIcon={false} message={message} banner />
        <div id="studentSelected" style={{ width: '100%', height: 400, margin: '0 auto' }} />
      </div>
    )
  }
}

export default StudentSelected
