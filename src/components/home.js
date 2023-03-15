import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import 'animate.css';
import SkillSection from "./skills";
import ProjectSection from "./project";
import ContactSection from "./contact";

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
                    <nav>
                        <ul className="headerLists">
                            <li className="themeToggle" onClick={themeToggle}>{themeIcon}</li>
                            <li><HashLink smooth to='#skillsSection'> <span className="headerEmphasis">Skills</span></HashLink></li>
                            <li><HashLink smooth to='#projectSection'> <span className="headerEmphasis">Projects</span></HashLink></li>
                            <li><HashLink smooth to='#contactSection'> <span className="headerEmphasis">Contact</span></HashLink></li>
                        </ul>
                    </nav>
                </div>
                <div id="startWrapper" >
                    <div className="startText">
                        <div >Hi, I'm Darwin | <span className="positionText">Aspiring Web</span> <br /><span className="positionText">Developer</span></div>
                        <div className="iconRow">
                            <a href="https://github.com/Meowinn" className="startIconLink"><img className="startIcons" src={require('../imgs/github.png')} alt="gitHub_logo"></img></a>
                            <a href="https://www.linkedin.com/" className="startIconLink"><img className="startIcons" src={require('../imgs/linkedin-logo.png')} alt='linkedin_logo'></img></a>
                            <a href="mailto:darwinfagarang@gmail.com" className="startIconLink"><img className="startIcons" src={require('../imgs/gmail-logo.png')} alt='gmail_logo'></img></a>
                        </div>
                        <div className="aboutText">I love building and designing. I'm a life-long learner and I might have a thing for shawarma</div>
                        <a href="https://drive.google.com/u/0/uc?id=1if6juzp52xovgsYdyACCrpoQ_NPBBnT9&export=download"><button className="dlBtn" type="button">Download CV</button></a>
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