import React from "react";

// core components
import DemoNavbar from "@/components/Navbars/DemoNavbar.js";
import CardsFooter from "@/components/Footers/CardsFooter.js";


import Hero from "./IndexSections/Hero.js";
import Download from "./IndexSections/Download.js";




class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />

        <main ref="main">
          <Hero />

          <Download />
        </main>

        <CardsFooter />
      </>
    );
  }
}

export default Index;
