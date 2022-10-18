import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps } from '@/pages/components/Panel/A11yProps';
import { TabPanel } from '@/pages/components/Panel/TabPanel';
import './index.less'
import Curve from '@/pages/components/Curve';
import {wend, wendQuantity, moth, mothQuantity, both, bothQuantity} from '@/utils/data'

const Statistics = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
    return (
        <div className='stat'>
          <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className='tab' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="七日内" {...a11yProps(0)} />
          <Tab label="30日内" {...a11yProps(1)} />
          <Tab label="全部" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Curve xData={wend} yData={wendQuantity}></Curve>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Curve xData={moth} yData={mothQuantity}></Curve>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Curve xData={both} yData={bothQuantity}></Curve>）
      </TabPanel>
    </Box>
    <p>产品规格说明</p>
    <p>产品策略介绍</p>
    <p>投资风险提示</p>
        </div>
    )
}

export default Statistics