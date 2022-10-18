// import { useParams } from "react-router-dom"
import Statistics from "./components/Left"
import Transaction from "./components/Right"
import { useLocation} from 'umi'
import './index.less'

import DemoNavbar from '@/components/Navbars/DemoNavbar.js';
import SimpleFooter from '@/components/Footers/SimpleFooter.js';



const Details = () => {
    
    return (
        <>
        <DemoNavbar/>
       
        <main>
        <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
      </section> 


        
        <div className="details">
            <div className="name">大鱼DeFi对冲套利1号</div>
            <div className="left">
            <Statistics></Statistics>
            </div>
            <div className="right">
            <Transaction></Transaction>
            </div>
        </div>
        
        </main>

        <SimpleFooter/>
        </>
    )
}

export default Details
