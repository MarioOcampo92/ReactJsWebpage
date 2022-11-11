
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavBar from './Components/Navbar2';
import BackgroundMain from './Components/BackgroundMain';
import Skills from './Components/Skills';
import { SocialMedia } from './Components/SocialMedia';
import { Footer } from './Components/Footer';
import Apis from "./Components/Apis"
import {useState} from 'react'


function App() {
  const [color, setColor] = useState(" ");
 
  


  return (
    <>
      <div className="App">
        <MainNavBar fixed="top" nvbColor={color} />
        <BackgroundMain />
        <div   
              onMouseEnter={() => setColor("#000000")}
              onMouseLeave={() => setColor("transparent")}
        >
          <Skills />
          <Apis/>
          <SocialMedia/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
