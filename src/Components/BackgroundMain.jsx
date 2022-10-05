import React from "react";
import backgrondImg from "../assets/images/hero.jpg"
import styles from '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const BackgroundMain = () => {
  return (
    <section className="bg-hero position-relative" id="home">
      <div className="w-100 h-100 bg-overlay"></div>
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