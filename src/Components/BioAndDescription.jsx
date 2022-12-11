import React from "react";
import '../style.css';
import Biofoto from '../assets/images/yoBio.jpeg'
// import BioAnimation from "./BioAnimation";
import Textreveal from "./Textreveal";
import { Container } from "react-bootstrap";
import Apis from "./Apis";

const BioAndDescription = () => {


    return (

        <section className="bioBackground">
            {/* <BioAnimation/> */}
            <div>
                <span className="animationText">
                {/* <Textreveal/> */}
                </span>
                <Apis className="api-container" />
            </div>
            <img src={Biofoto} className="bioimg"  alt=""/> 
        </section>

    )
}
export default BioAndDescription