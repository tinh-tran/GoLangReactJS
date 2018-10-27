import React from 'react'
import echarts from 'echarts'
import { Alert, Icon } from 'antd'

const message = (
  <span>
    <Icon type="profile" /> 教师上传课程数
  </span>
)

class TeacherClass extends React.Component {
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('teacherClass'))
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['上传课程数']
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          axisLabel: {
            show: true,
            interval: 0
          },
          data: [
            {
              value: '巨林专区',
              textStyle: {
                fontSize: 9
              }
            },
            {
              value: '计算机',
              textStyle: {
                fontSize: 9
              }
            },
            {
              value: '经济管理',
              textStyle: {
                fontSize: 9
              }
            },
            {
              value: '心理学',
              textStyle: {
                fontSize: 9
              }
            },
            {
              value: '外语',
              textStyle: {
                fontSize: 9
              }
            },
            {
              value: '文学历史',
              textStyle: {
                fontSize: 9
              }
            },
            {
              value: '工学',
              textStyle: {
                fontSize: 9
              }
            },
            {
              value: '理学',
              textStyle: {
                fontSize: 9
              }
            },
            {
              value: '生命科学',
              textStyle: {
                fontSize: 9
              }
            },
            {
              value: '法学',
              textStyle: {
                fontSize: 9
              }
            },
            {
              value: '教育教学',
              textStyle: {
                fontSize: 9
              }
            }
          ]
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '上传课程数',
          type: 'bar',
          data: [80, 46, 18, 23, 25, 76, 135, 162, 32, 20, 64],
          markPoint: {
            data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }]
          }
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <Alert showIcon={false} message={message} banner />
        <div id="teacherClass" style={{ width: '100%', height: 400, margin: '0 auto' }} />
      </div>
    )
  }
}

export default TeacherClass
