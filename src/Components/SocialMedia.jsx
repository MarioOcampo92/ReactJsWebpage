import React from "react";
// import '../socialmediastyles.css'

const SocialMedia = () => {
    return(
     <div style={{
        
     }}>   
     <section 
     style={{
        display:"flex",
        justifyContent:"center",
     }}
       >
        
        <ul className="container-social" style={{
            marginBottom:0,
            padding:0
        }}>
       
  
    <li><a href="https://www.instagram.com/mariocampo9203"target="_blank">
        <i className="fa-brands fa-instagram instagram" ></i></a></li>
    <li><a href="https://wa.me/34641813988?text=I'm%20interested%20in%20your%20Application%20for%20sale" target="_blank">
        <i class="fa-brands fa-whatsapp whatsapp"></i></a></li>
    <li><a href="https://twitter.com/Cryptokakaroto" target="_blank">
        <i class="fa-brands fa-twitter twitter"></i></a></li>
    <li><a href="https://github.com/MarioOcampo92" target="_blank">
        <i class="fa-brands fa-github github"></i></a></li>
    <li><a href="https://www.linkedin.com/in/mario-fernando-ocampo" target="_blank">
        <i class="fa-brands fa-linkedin linkedin"></i></a></li>

</ul>   
</section>
</div>



        
    )
}

export {SocialMedia}