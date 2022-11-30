import React from "react";
import {gsap} from "gsap";
import '../textreveal.scss'
import { useLayoutEffect } from "react";

const Textreveal = () => {

    useLayoutEffect(() =>{{


            const tl = gsap.timeline();
            tl.to(".line span", 1.8, {
            y: 100,
            ease: "bounce",
            delay: 6,
            skewY: 7,
            stagger: {
            amount: 0.3 
        }
      })
      return () => tl.revert() 


}}, []);
    



    return(
        <div style={{
            color:"white",
            position:"relative",
            top:"250px"
            }}>
            <div class="container">
      <div class="line">
    <span>Hello!</span>
   </div>
   <div class="line">
    <span>This is my bio</span>
   </div>
  <div class="line">
    <span>Hope you like it.</span>
  </div>
</div>

        </div>

    )
}

export default Textreveal