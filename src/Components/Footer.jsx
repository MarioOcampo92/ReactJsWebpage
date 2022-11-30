import React from "react";
import cv from "../assets/images/marios_resume.pdf"

const Footer = () => {
    return (
        <section className="foot" style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <div className="d-flex justify-content-center" style={{
                   paddingBottom:150
                }}>
                <a href="#top" className="rectangle foot-a" style={{
                    position:"relative",
                    bottom:"-55px",

                }}>
                    <i class="fa-solid fa-angles-up"></i>
                </a> 
            </div>
            <div className="footer-items">
                <p className="footer-description text-center">
                    <i className="fa-solid fa-envelope"></i> Contáctame a través de mi email : <span>mariocampo9203@gmail.com</span>
                </p>
                <p>     
                    Descarga mi curriculum vitae <a href={cv} download="marios_resume.pdf" >aquí </a>     
                </p>
            </div>


        </section>

// new footer//






    )
}

export {Footer};