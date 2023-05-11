import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';

const SkillSection = () => {
    return (
        <div id="skillsSection" >

            <div className="skillsHeader pb-3 ">
                <h2><span className="highlight fs-1">Skills & Tools</span></h2>
                <div className="toolBox py-2">My Toolbox & Things I Can Do</div>
                <div>The skills, tools and technologies I use to bring your products to life:</div>
            </div>

            <div className='row container text-center pt-2 pb-4 gy-4 g-0 skillRow'>

                <div className="skillIcons col-lg-3 col-md-4" data-aos="zoom-in">
                    <div className="imgWrapper"> <FontAwesomeIcon icon={faHtml5} /></div>
                    <div className="iconText">HTML5</div>
                </div>
                <div className="skillIcons col-lg-3 col-md-4" data-aos="zoom-in">
                    <div className="imgWrapper"><FontAwesomeIcon icon={faCss3Alt} /></div>
                    <div className="iconText">CSS3</div>
                </div>
                <div className="skillIcons col-lg-3 col-md-4" data-aos="zoom-in">
                    <div className="imgWrapper"><FontAwesomeIcon icon={faBootstrap} /></div>
                    <div className="iconText">Bootstrap</div>
                </div>
                <div className="skillIcons col-lg-3 col-md-4" data-aos="zoom-in">
                    <div className="imgWrapper"><FontAwesomeIcon icon={faJsSquare} /></div>
                    <div className="iconText">JavaScript</div>
                </div>
                <div className="skillIcons col-lg-3 col-md-4" data-aos="zoom-in">
                    <div className="imgWrapper"><FontAwesomeIcon icon={faReact} /></div>
                    <div className="iconText">React</div>
                </div>

                <div className="skillIcons col-lg-3 col-md-4" data-aos="zoom-in">
                    <div className="imgWrapper"><FontAwesomeIcon icon={faVuejs} /></div>
                    <div className="iconText">Vue</div>
                </div>

                <div className="skillIcons col-lg-3 col-md-4" data-aos="zoom-in">
                    <div className="imgWrapper"><FontAwesomeIcon icon={faDatabase} /></div>
                    <div className="iconText">SQL</div>
                </div>
                <div className="skillIcons col-lg-3 col-md-4" data-aos="zoom-in">
                    <div className="imgWrapper"><FontAwesomeIcon icon={faServer} /></div>
                    <div className="iconText">MySQL</div>
                </div>

                <div className="skillIcons col-lg-3 col-md-4" data-aos="zoom-in">
                    <div className="imgWrapper"><FontAwesomeIcon icon={faCodeBranch} /></div>
                    <div className="iconText">Git</div>
                </div>
                <div className="skillIcons col-lg-3 col-md-4" data-aos="zoom-in">
                    <div className="imgWrapper"><FontAwesomeIcon icon={faGithub} /></div>
                    <div className="iconText">Github</div>
                </div>
                <div className="skillIcons col-lg-3 col-md-4" data-aos="zoom-in">
                    <div className="imgWrapper"><FontAwesomeIcon icon={faTerminal} /></div>
                    <div className="iconText">Command Line</div>
                </div>
            </div>
        </div>
    )
};

export default SkillSection;