import React from "react";

const SocialMedia = () => {
    return(
        <section className="social-media" id="social">
            <div className="container social-rectangle">
                <a href="https://www.instagram.com/mariocampo9203/" target="_blank" rel="noopener noreferrer" className="rectangle" style={{
                    margin:"10px 10px 5px"
                }}>
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://github.com/MarioOcampo92" target="_blank" rel="noopener noreferrer" className="rectangle" style={{
                    margin:"10px 10px 5px"
                }}>
                  <i className="fa-brands fa-github"></i> 
                </a>
                <a href="https://www.linkedin.com/in/mario-fernando-ocampo/" target="_blank" rel="noopener noreferrer" className="rectangle" style={{
                    margin:"10px 10px 5px"
                }}>
                  <i className="fa-brands fa-linkedin"></i> 
                </a>
            </div>
        </section>
    )
}

export {SocialMedia}