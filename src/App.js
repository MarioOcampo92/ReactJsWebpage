
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavBar from './Components/Navbar2';
import BackgroundMain from './Components/BackgroundMain';
import Skills from './Components/Skills';
import { SocialMedia } from './Components/SocialMedia';
import { Footer } from './Components/Footer';
import Apis from "./Components/Apis"

function App() {
  return (
    <>
      <div className="App">
        <MainNavBar fixed="top" />
        <BackgroundMain />
        <Skills />
        <Apis/>
        <SocialMedia/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
