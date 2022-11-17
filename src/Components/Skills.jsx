import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ethLogo from '../assets/images/Btclogo.png'
import styles from '../App.css'
// import React {useState} from "react";



const Skills = () => {


    return (
        <section  id="Skills" className="bg-white container" style={{
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
                <div className="d-flex flex-column">
                    <div className="left-skills" style={{
                            margin: "25px 0"
                        }}>
                        <div className="skills-item1" style={{
                            margin: "25px 0"
                        }}>
                            <h4 className="title-for-skills">
                                Technologies and Languages
                            </h4>
                            <p className="description-for-skills">
                                HTML, CSS <br/>
                                JavaScript, React, NodeJs <br/>
                                Python, Django, Selenium <br/>
                                Git, GitHub <br/>
                                PHP, Wordpress
                            </p>
                        </div>
                        <div className="skills-item2 d-flex justify-content-center align-items-center">
                            <div className="rectangle position-relative d-flex justify-content-center align-items-center">
                                <svg className="position-relative" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 7V3M16 7V3M7 11H17M5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21Z" stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="left-skills" style={{
                            margin: "25px 0"
                        }}>
                        <div className="skills-item1" >
                            <h4 className="title-for-skills">
                                Other Skills and Hobbies
                            </h4>
                            <p className="description-for-skills">
                                Gaming <br/>
                                Scraping
                            </p>
                        </div>
                        <div className="skills-item2 d-flex justify-content-center align-items-center">
                            <div className="rectangle position-relative d-flex justify-content-center align-items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C4.46957 16 3.96086 15.7893 3.58579 15.4142C3.21071 15.0391 3 14.5304 3 14V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V14C21 14.5304 20.7893 15.0391 20.4142 15.4142C20.0391 15.7893 19.5304 16 19 16H14L9 21V16Z" stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={ethLogo} alt="" style={{
                        maxHeight: 250,
                        maxWidth: 180,
                    }} />
                </div>

                <div className="d-flex flex-column" >
                    <div className="right-skills" style={{
                            margin: "70px 0"
                        }}>
                        <div className="skills-item2 d-flex justify-content-center align-items-center">
                            <div className="rectangle position-relative d-flex justify-content-center align-items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13L9 17L19 7" stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="skills-item1">
                            <h4 className="title-for-skills2">
                                Translation Services
                            </h4>
                            <p className="description-for-skills2">
                               Professional and accurate translations.
                            </p>
                        </div>
                    </div>
                    <div className="right-skills" style={{
                            margin: "25px 0"
                        }}>
                        <div className="skills-item2 d-flex justify-content-center align-items-center">
                            <div className="rectangle position-relative d-flex justify-content-center align-items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 18H20M4 6H20H4ZM4 10H20H4ZM4 14H20H4Z" stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className="skills-item1">
                            <h4 className="title-for-skills2">
                                Crypto Advisor
                            </h4>
                            <p className="description-for-skills2">
                                Consulting on securing crypto assets and interacting with smart contracts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

                        


        </section>
    )
}

export default Skills