import * as echarts from 'echarts';
import * as React from 'react'

type EChartsOption = echarts.EChartsOption
var option: EChartsOption;

type Props = {
  xData: string[]
  yData: number[]
}

const Curve = (props: Props) => {

  // 挂载节点
    const chartDom = React.useRef<any>()
    const instance = React.useRef<any>()

    // 生命钩子函数
    type Callback = () => void
    React.useEffect((): Callback => {
      // 获取实例对象
        instance.current = echarts.getInstanceByDom(chartDom.current) || echarts.init(chartDom.current)

        // 销毁并清除状态
        return (): void => {
            echarts.dispose(instance.current)
        }
    }, [chartDom])


    React.useEffect(() => {
      // 渲染图表
        if(option) {
            if(instance.current) {
                instance.current.setOption(option)
            }
        }
    })


    // 渲染的数据
    option = {
      // 横轴
        xAxis: {
          type: 'category',
          data: props.xData
        },
        // 纵轴
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: props.yData,
            type: 'line',
          }
        ]
      };

      return (
        <div ref={chartDom} style={{width:600,height:300}}></div>
      )
      
}

export default Curve