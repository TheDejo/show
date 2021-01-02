import React from 'react';
import {Element} from 'react-scroll';

import Header from '../Components/header_footer/Header';
import '../resources/styles.css';
import Featured from '../Components/featured';
import VenueNfo from './VenueNfo' ;
import Highlight from './Highlights/';
import Pricing from './pricing';
import Location from './location';
import Footer from './header_footer/Footer';

const App = () => {
  return (
    <div>
      
        <Header />
 
      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venueinfo">
        <VenueNfo />
      </Element>

      <Element name="highlights">
        <Highlight />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
}

export default App;