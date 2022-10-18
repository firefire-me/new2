import React from 'react';
import styles from './error.scss';

import DemoNavbar from '@/components/Navbars/DemoNavbar.js';
import SimpleFooter from '@/components/Footers/SimpleFooter.js';

import {

  Container,

} from 'reactstrap';



export default function Error() {
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

      <Container>

      <h1 className={styles.title}>  sorry , 404  ,   你迷路了吗？</h1>
      </Container>
    
  
    

    </main>
    <SimpleFooter/>

    </>
  );
}
