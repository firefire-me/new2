import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps } from '@/pages/components/Panel/A11yProps';
import { TabPanel } from '@/pages/components/Panel/TabPanel';
import './index.less'
import Subscribe from './components/Subscribe';
import Redeem from './components/Redeem';

const Transaction = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
    return (
        <div className='tran'>
          <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs className='tab' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="申购" {...a11yProps(0)} />
          <Tab label="赎回" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Subscribe></Subscribe>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Redeem></Redeem>
      </TabPanel>
    </Box>
        </div>
    )
}

export default Transaction