import React from "react";
import { SocialMedia } from "./SocialMedia";

const Footer = () => {
    return (
        <section className="foot" style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#020202"
        }}>            
            <div className="d-flex justify-content-center" style={{
                   padding:"70px 0"
                }}>
                <a href="#top" className="rectangle foot-a" style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    textDecoration:"none"
                }}>
                    <i class="fa-solid fa-angles-up" style={{
                        color:"black",
                        fontSize:"25px"
                    }}></i>
                </a> 
            </div>
            <SocialMedia />
            <div className="footer-items text-center" style={{marginTop:20,color:"#a1a1a1"}}>
                <p className="footer-description text-center">
                    <i className="fa-solid fa-envelope"></i> Contact me: <span>mariocampo9203@gmail.com</span>
                </p>
                {/* <p>     
                    My CV: <a href={cv} download="marios_resume.pdf" >here </a>     
                </p> */}
            </div>
        </section>
    )
}

export {Footer};