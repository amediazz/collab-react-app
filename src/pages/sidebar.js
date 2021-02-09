import React from 'react';
import { slide as Menu } from 'react-burger-menu';


const fn =() =>  {
  return (
   

    <Menu class="mobile-navigation">
        
      <a className="mobile--navigation--item" href="/">
        Home
      </a>
      <a className="mobile--navigation--item" href="/about">
        About
      </a>
      <a className="mobile--navigation--item" href="/services">
        Services
      </a>
      <a className="mobile--navigation--item" href="/contact">
        Contact
      </a>
    </Menu>
     
  );
};

export default fn;