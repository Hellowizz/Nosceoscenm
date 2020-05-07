import React from 'react';
import Section from './section.js';
import Footer from './footer.js';
import './App.css';

import ShiniIcon from './img/icons/shinichi.png';
import ShiniChibi from './img/chibis/shinichi.png'
import KinuiIcon from './img/icons/unkinuito.png';
import KinuiChibi from './img/chibis/unkinuito.png'
import KuraiIcon from './img/icons/unkurai.png';
import KuraiChibi from './img/chibis/unkurai.png'
import NoIcon from './img/icons/no.png';
import NoChibi from './img/chibis/no.png'
import PimzIcon from './img/icons/pimz.png';
import PimzChibi from './img/chibis/pimz.png'

import { KinuiText } from './descriptions.js';

function App() {
  return (
    <div className="app-container">
      <div className="sections-container">
        <Section 
          name="Shinichi"
          image={ShiniIcon}
          chibi={ShiniChibi} 
          description="Shinichi is an Efertik who's cuuuuute I like him yayya ya ya yayyayay trololo best description eveeeeeeeeeer" 
        />
        <Section 
          image={KinuiIcon} 
          name="Un'Kinuito" 
          chibi={KinuiChibi} 
          description={KinuiText} 
        />
        <Section 
          image={KuraiIcon} 
          name="Un'Kurai" 
          chibi={KuraiChibi} 
          description="Un'Kurai is the guardian of the wire of hate nieeeeeeeeeeh ~~~" 
        />
        <Section 
          image={NoIcon} 
          name="No" 
          chibi={NoChibi} 
          description="No is a strange gril who only shakes her heard to make the no sign to comunicate." 
        />
        <Section 
          image={PimzIcon} 
          name="Pimz" 
          chibi={PimzChibi} 
          description="UNICOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORN" 
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
