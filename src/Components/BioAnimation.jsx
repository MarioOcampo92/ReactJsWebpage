
import React from  "react";
import {gsap} from "gsap";
import { useLayoutEffect, useRef } from 'react';
import '../animationstyle.css';



function BioAnimation () {

  const comp = useRef(); // create a ref for the root level element (we'll use it later)

  useLayoutEffect(() => {
    const tl = gsap.timeline();
            tl.to("#uno", { duration: .5, x: 0, ease: 'expo' });
            tl.to("#x", { duration: .5, scale: 1, opacity: 1, ease: 'expo' },'-=.5');
            tl.to("#dos", { duration: .5, y: 0, opacity: 1,  ease: 'expo' })
            tl.to("#dos", { delay: 3, duration: .5, y: '-100%', opacity: 0,  ease: 'expo' })
            tl.to("#uno", { duration: .75, x: '-100%', opacity: 0, ease: 'expo' }, '-=.3');
    // -- ANIMATION CODE HERE --
    
    return () => tl.revert()     // cleanup code (optional)
    
  }, []); // <- empty dependency Array so it doesn't re-run on every render!


  return (
  
        <div id="text">
        <p id="uno"><span id="x">Programador</span></p>
        <p id="dos">Mario Ocampo</p>
        <div id="hide"></div>
       </div>
  );
 }
 export default BioAnimation 
