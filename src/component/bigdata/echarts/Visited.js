import React from 'react'
import echarts from 'echarts'
import { Alert, Icon } from 'antd'

const message = (
  <span>
    <Icon type="area-chart" /> 网站访问量
  </span>
)

class Visited extends React.Component {
  componentDidMount() {
    var myChart = echarts.init(document.getElementById('visited'))
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['访问人数']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '访问人数',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210]
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <Alert showIcon={false} message={message} banner />
        <div id="visited" style={{ width: '100%', height: 400 }} />
      </div>
    )
  }
}

export default Visited
