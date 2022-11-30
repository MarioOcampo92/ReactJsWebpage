import React from "react";
import '../style.css';
import Biofoto from '../assets/images/yoBio.jpeg'
// import BioAnimation from "./BioAnimation";
import Textreveal from "./Textreveal";
import { Container } from "react-bootstrap";
import Apis from "./Apis";

const BioAndDescription = () => {


    return (

        <div>
        <section className="bioBackground">
            {/* <BioAnimation/> */}
        <img src={Biofoto} className="bioimg"  alt=""/> 
        <span className="animationText">
        <Textreveal/>
        
        </span>
        <Apis className="api-container" style={{
            position:"absolute",
            top:"-50px",
        }}/>
        
        </section>
        </div>

    )
}
export default BioAndDescription