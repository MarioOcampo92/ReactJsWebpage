import React, { useState } from "react";

// Components

import ModalRnM from "./ModalRnM";
import ModalPoke from "./ModalPoke";

// Assets

import RnM from '../assets/images/rnm.png'
import poke from '../assets/images/poke.png'
import "../style.css"

function Apis() {
    const [openModalRnM, setOpenModalRnM] = useState(false);
    const [openModalPoke, setOpenModalPoke] = useState(false);

    return (

        <section className="container" style={{
             padding: "0px 0px 80px",
             position: "relative",
             top: "450px",
             left: "-350px"
             
         }} >
            <h2 className="text-center" style={{ 
                paddingBottom:"50",
                position:"relative",
                top: "-350px",
                color:"white",
                }}>
                API's
            </h2>
            <h5 style={{
                color:"white",
                position:"absolute",
                bottom:"500px"
            }}>
                Crea algun personaje aleatorio
            </h5>
            <div className="api-container d-flex justify-content-around" >
                <div id="rnm" className="d-flex flex-column align-items-center " style={{ gap: 30 }}>
                    <img src={RnM} width="200px" />
                    <button
                        type="button"
                        className="openModalBtn btn btn-outline-success "
                        onClick={() => {
                            setOpenModalRnM(!openModalRnM);
                        }}
                    >
                        Character Creator
                    </button>
                    {openModalRnM && <ModalRnM closeModal={setOpenModalRnM} />}
                </div>
                <div id="poke" className="d-flex flex-column align-items-center " style={{ gap: 30 }} >
                    <img src={poke} width="200px" />
                    <button
                        type="button"
                        className="openModalBtn btn btn-outline-info "
                        onClick={() => {
                            setOpenModalPoke(!openModalPoke);
                        }}
                    >
                        Pokemon Creator
                    </button>
                    {openModalPoke && <ModalPoke closeModal={setOpenModalPoke} />}

                </div>
            </div>

        </section>

    );
}

export default Apis