// import { useParams } from "react-router-dom"
import Statistics from "./components/Left"
import Transaction from "./components/Right"
import { useLocation} from 'umi'
import './index.less'

const Details = () => {
    
    return (
        <div className="details">
            <div className="name">大鱼DeFi对冲套利1号</div>
            <div className="left">
            <Statistics></Statistics>
            </div>
            <div className="right">
            <Transaction></Transaction>
            </div>
        </div>
    )
}

export default Details
