
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Image from './Components/Background';

import MainNavBar from './Components/Navbar2';

function App() {
  return (
    <>
    <div className="App">
    <MainNavBar fixed="top" />
    <div className = "head-text">
        <div className = "head-image">
          <img src = {require ('../src/hero.png')} alt = "Freedom Blog" className="Imgbackground" />
        </div>
        <div className="center__text">
          <div className='title'>
          <h3> Mario Ocampo </h3>
          </div>
          <div className='ocupationText'>
          <p class="font-weight-bold">I'm Crypto-addict, Gamer, Coder & Entrepeneur </p>
          </div>
          <p2 class="font-weight-bold"> Libertarian & Anarcho-capitalist</p2>

        </div>
</div>





      
      <h1> entrepeneur and codefreak</h1>
    

      
    
    
     
      
    </div>
    </>
  );
}

export default App;
