
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavBar from './Components/Navbar2';
import BackgroundMain from './Components/BackgroundMain';
import Skills from './Components/Skills';

function App() {
  return (
    <>
      <div className="App">
        <MainNavBar fixed="top" />
        <BackgroundMain />

        <Skills />

      </div>
    </>
  );
}

export default App;
