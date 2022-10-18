import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './index.less'

const Subscribe = () => {
    return (
        <div className='subsrcibe'>
            <p>投资金额 (USDT)</p>
            <TextField id="outlined-basic" label="money" variant="outlined" />
            <p>钱包余额<span>1500.0 USDT</span></p>
            <Button variant="contained" disableElevation>申购</Button>
        </div>
    )
}

export default Subscribe