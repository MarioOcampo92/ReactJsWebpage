import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ethLogo from '../assets/images/eth-logo.png'
import styles from '../App.css'




const Skills = () => {
    return (
        <section className="bg-white container" style={{
            paddingTop: 100,
            paddingBottom: 100
        }}>
            <div>
                <h3 style={{ textAlign: "center" }}>
                    WELCOME!
                </h3>
                <p className="section-subtitle">
                    <span>
                        EXPLORE MY WORLD
                    </span>
                </p>

            </div>
            <div className="grid-skills" style={{
                marginTop: 70
            }}>
                <div className="">
                    <div className="left-skills">
                        <div className="skills-item1">
                        
                        </div>
                        <div className="skills-item2">

                        </div>
                    </div>
                    <div>
                        <div>
                        </div>
                        <div></div>
                    </div>

                </div>
                <div className="d-flex justify-content-center">
                    <img src={ethLogo} alt="" style={{
                        maxHeight:250,
                        maxWidth:180,

                    }}/>
                </div>

                <div className="" >

                </div>
            </div>

        </section>
    )
}

export default Skills