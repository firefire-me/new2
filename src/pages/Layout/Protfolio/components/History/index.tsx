import { Table } from 'antd';
import 'antd/dist/antd.css'
import {historyColumns, historyData, HistoryType} from '@/utils/data'
import './index.less'
import { orderBy } from 'lodash';
import { Select } from 'antd';
import { useState, useEffect } from 'react'


const { Option } = Select;

const HistoryChange = (value: string) => {   
  console.log(`selected ${value}`);
  
};





const History = () => {
    

    let newHistoryData
    newHistoryData = orderBy(historyData, ['time'], ['asc'])
    const [timeValue, setTimeValue] = useState('时间排序')

    const TimeChange = (value: string) => {
        // console.log(`selected ${value}`);
        setTimeValue(value)
    };
    
    useEffect(() => {
        if(timeValue === 'asc') {
            newHistoryData = orderBy(historyData, ['time'], ['asc'])
        } else {
            newHistoryData = orderBy(historyData, ['time'], ['desc'])
        }
    },[timeValue])

     
    return (
        <div className='history'>
            <p>
                <span className='his'>历史记录</span> 
                <div className='both'>
                <Select defaultValue="全部记录" style={{ width: 130 }} onChange={HistoryChange}>
      <Option value="weekend">七日内</Option>
      <Option value="moth">30日内</Option>
      <Option value="both">全部记录</Option>
    </Select>
                </div>
                <div className='time'>
                <Select defaultValue={timeValue} style={{ width: 130 }}  onChange={TimeChange}>
      <Option value="asc" >升序</Option>
      <Option value="dsc">降序</Option>
    </Select>
                </div>
             </p>
            <div>
            <Table
    columns={historyColumns}
    dataSource={historyData}
    bordered
  />
        </div>
        </div>
    )
}

export default History