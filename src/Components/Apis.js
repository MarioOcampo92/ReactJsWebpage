import React, { useState } from "react";

// Components

import ModalRnM from "./ModalRnM";
import ModalPoke from "./ModalPoke";

// Assets

import RnM from '../assets/images/rnm.webp'
import poke from '../assets/images/poke.webp'
import "../style.css"

function Apis() {
    const [openModalRnM, setOpenModalRnM] = useState(false);
    const [openModalPoke, setOpenModalPoke] = useState(false);

    return (

        <section class="container" style={{ padding: "0px 0px 80px" }} >
            <div class="api-container d-flex justify-content-around" >
                <div className="d-flex flex-column align-items-center " style={{ gap: 30 }}>
                    <img src={RnM} width="200px"/>
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
                <div class="d-flex flex-column align-items-center " style={{ gap: 30 }} >
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