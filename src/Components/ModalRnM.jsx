import React, { useState, useEffect } from "react";
import Character from "./Character";

const ModalRnM = ({closeModal}) => {

    const getRndInteger = () => {
      let num = Math.floor(Math.random() * (82 - 0)) + 0;
      return num;
    };
    
    const character_id = getRndInteger();
  
    const [character, setCharacter] = useState([]);
    const [characterName, setCharacterName] = useState([]);
  
    const initUrl = `https://rickandmortyapi.com/api/character/${character_id}`;



   function fetchCharacter(url){
     fetch(url)
     .then((res) => res.json())
     .then((data) => [setCharacter(data.image), setCharacterName(data.name)])
  };


  
  useEffect(() => {
    fetchCharacter(initUrl);
  }, []);

  return (
    <div className="modalBg modalrandm">
      <div className="modalContainer" style={{
        position:"relative",
        top:"-660px"
      }}>
        <div className="card-img-text">
          <Character avatar={character} chrName={characterName} closeModal={closeModal}/>
        </div>
      </div>
    </div>
  );
};

export default ModalRnM;
