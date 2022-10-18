import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps } from '@/pages/components/Panel/A11yProps';
import { TabPanel } from '@/pages/components/Panel/TabPanel';
import './index.less'
import { Select } from 'antd';
import FormControl from '@mui/material/FormControl';
import {wend, wendQuantity, moth, mothQuantity, both, bothQuantity} from '@/utils/data'
import Curve from '@/pages/components/Curve';

const { Option } = Select;

const SelectChange = (value: string) => {
  console.log(`selected ${value}`);
};

const NetWorth = () => {
    const [value, setValue] = React.useState(0);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
    return (
        <div className='networth'>
          <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className='tab' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="七日内" {...a11yProps(0)} />
          <Tab label="30日内" {...a11yProps(1)} />
          <Tab label="全部" {...a11yProps(2)} />
          <span className='select'>
      <FormControl sx={{ m: 1, minWidth: 120 }} >
      <Select defaultValue="USD" style={{ width: 120 }} onChange={SelectChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">USD</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
      </FormControl>
          </span>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Curve xData={wend} yData={wendQuantity}></Curve>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Curve xData={moth} yData={mothQuantity}></Curve>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Curve xData={both} yData={bothQuantity}></Curve>
      </TabPanel>
    </Box>
        </div>      
    )
}

export default NetWorth