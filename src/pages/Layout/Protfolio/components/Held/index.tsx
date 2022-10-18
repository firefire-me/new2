import { Table } from 'antd';
import 'antd/dist/antd.css'
import './index.less'
import {heldColumns, heldData} from '@/utils/data'



const Held = () => {
    return (
        <div className='held'>
            <Table
    columns={heldColumns}
    dataSource={heldData}
    bordered
  />
        </div>
    )
}

export default Held