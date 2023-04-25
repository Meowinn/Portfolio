import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import 'animate.css';
import SkillSection from "./skills";
import ProjectSection from "./project";
import ContactSection from "./contact";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



const Home = () => {

    const [themeIcon, setThemeIcon] = useState("☀");

    function themeToggle() {
        let icon = document.querySelector('.themeToggle');
        let animateBg = document.querySelector('.animateBg');

        if (icon.innerText == '☀') {
            animateBg.style.setProperty('--lightAnimate', 'linear-gradient(to bottom, skyblue, cornflowerblue)')
            document.body.classList.toggle("lightTheme");
            setThemeIcon(
                '🌙'
            )
        } else {
            animateBg.style.setProperty('--lightAnimate', 'linear-gradient(to bottom, #223847, #111e27)')
            document.body.classList.toggle("lightTheme");
            setThemeIcon(
                '☀'
            )
        };
    };

    return (
        <div id="home">

            <div className="animateBg">
                <div id="header">
                    <nav className="navbar navbar-expand-lg navbar-dark " id="navbarWrapper">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav row container-fluid text-center">
                                <li className="themeToggle nav-item col-lg-3" onClick={themeToggle}><span className="nav-link">{themeIcon}</span></li>
                                <li className="nav-item col-lg-3 headerEmphasis"><HashLink smooth to='#skillsSection'> <span className="nav-link">Skills</span></HashLink></li>
                                <li className="nav-item col-lg-3 headerEmphasis"><HashLink smooth to='#projectSection'> <span className="nav-link">Projects</span></HashLink></li>
                                <li className="nav-item col-lg-3 headerEmphasis"><HashLink smooth to='#contactSection'> <span className="nav-link">Contact</span></HashLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div id="startWrapper" >
                    <div className="container-fluid">
                        <div className="pt-5"><h1 className="startTitle">Hi, I'm Darwin | <span className="positionText">Aspiring Web</span><br/><span className="positionText">Developer</span></h1></div>
                        <div className="row fs-1 startLogoWrapper py-2">
                            <div className="col-1"><a href="https://github.com/Meowinn" >  <FontAwesomeIcon className="startLogo" icon={faGithubSquare} />  </a></div>
                            <div className="col-1"><a href="https://www.linkedin.com/in/darwin-fagarang/" > <FontAwesomeIcon className="startLogo" icon={faLinkedin} /> </a></div>
                            <div className="col-1"><a href="mailto:darwinfagarang@gmail.com" > <FontAwesomeIcon className="startLogo" icon={faEnvelope} />  </a></div>
                        </div>
                        <div className="fs-4 pb-3 ">I love building and designing. I'm a life-long learner <br/> and I might have a thing for shawarma</div>
                        <a href="https://drive.google.com/uc?id=168YATp3Gcn5KQkts27Qk_lK7kcGLAUFu&export=download"><button className="dlBtn" type="button">Download CV</button></a>
                    </div>

                </div>
            </div>

            <div className="cloudContainer">
                <div className="cloud one"></div>
                <div className="cloud two"></div>
                <div className="cloud three"></div>
                <div className="cloud four"></div>
                <div className="cloud five"></div>
                <div className="cloud six"></div>
            </div>

            <SkillSection />
            <ProjectSection />
            <ContactSection />

        </div>
    )
};


export default Home;