import './index.less'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps } from '@/pages/components/Panel/A11yProps';
import { TabPanel } from '@/pages/components/Panel/TabPanel';
import ProductMain from './components/Main';
import {hot, market, interest, option, reunite} from '@/utils/data'

const Product = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
    return (
        <div className="product">
            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="热门" {...a11yProps(0)} />
          <Tab label="做市" {...a11yProps(1)} />
          <Tab label="套利" {...a11yProps(2)} />
          <Tab label="期权" {...a11yProps(3)} />
          <Tab label="复合" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProductMain product={hot}></ProductMain>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProductMain product={market}></ProductMain>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProductMain product={interest}></ProductMain>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ProductMain product={option}></ProductMain>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ProductMain product={reunite}></ProductMain>
      </TabPanel>
    </Box>

        </div>
    )
}

export default Product