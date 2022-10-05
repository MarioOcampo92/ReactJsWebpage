import React from "react";
import cv from "../assets/images/cv-mario-ocampo.pdf"

const Footer = () => {
    return (
        <section className="foot" style={{
            position:"relative",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <div className="d-flex justify-content-center" style={{
                   paddingBottom:60
                }}>
                <a href="#top" className="rectangle foot-a" >
                    <i class="fa-solid fa-angles-up"></i>
                </a> 
            </div>
            <div className="footer-items">
                <p className="footer-description text-center">
                    <i className="fa-solid fa-envelope"></i> Contáctame a través de mi email : <span>mariocampo9203@gmail.com</span>
                </p>
                <p>     
                    Descarga mi curriculum vitae <a href={cv} download="cv-mario-ocampo.pdf" >aquí </a>     
                </p>
            </div>


        </section>
    )
}

export {Footer};