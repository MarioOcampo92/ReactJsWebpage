import React from "react";
import backgrondImg from "../assets/images/hero.jpg"
import styles from '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import neon from '../assets/Videos/neon.mp4'


const BackgroundMain = () => {
  return (
    <section className="bg-hero position-relative" id="home">
      <video className="video" src={neon} autoPlay muted loop /> 
   
      <div className="text-white" style={{
        color:"white",
        zIndex:10
      }}>
        <div className="center__text">
          <div className='title text-center '>
            <h3 className="hero-title"> Mario Ocampo </h3>
            <p class="font-weight-bold ocupationText ocupation-hero">I'm Crypto-addict, Gamer, Coder & Entrepeneur </p>
            <p2 class="font-weight-bold micro-desc"> Libertarian & Anarcho-capitalist</p2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundMain;