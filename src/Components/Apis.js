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

        <section className="container api-main-container" style={{width:"100%"}}>
            <div>
                <h2 className="text-center">
                    API's
                </h2>
                <h5 className="textresponsive" >
                    Crea algun personaje aleatorio
                </h5>
            </div>
            <div className="api-container d-flex justify-content-around" >
                <div id="rnm" className="d-flex flex-column align-items-center " style={{ gap: 30 }}>
                    <img src={RnM} className="img-rnm" />
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