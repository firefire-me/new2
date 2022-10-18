import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './index.less'

const Redeem = () => {
    return (
        <div className='redeem'>
          <p>持有份额：<span>2500.0</span></p>
          <p>最大可赎回份额：<span>1200.0</span></p>
          <p className='money'>赎回份额</p>
          <TextField id="outlined-basic" label="money" variant="outlined" />
          <Button variant="contained" disableElevation>赎回</Button> 
        </div>
    )
}

export default Redeem