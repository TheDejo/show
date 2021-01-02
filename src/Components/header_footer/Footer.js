import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">King Rudy</div><br/><br/>
        <div className="foter_copyright">
          Rudeboy 2020.All rights reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;