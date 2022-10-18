import Held from "./components/Held"
import History from "./components/History"
import NetWorth from "./components/NetWorth"


import DemoNavbar from '@/components/Navbars/DemoNavbar.js';
import SimpleFooter from '@/components/Footers/SimpleFooter.js';





const Protfolio = () => {
    return (
        <>
        <DemoNavbar />
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
        <div>
            <NetWorth></NetWorth>
            <Held></Held>
            <History></History>
        </div>

        </main>

        <SimpleFooter />


        </>
    )
}

export default Protfolio
