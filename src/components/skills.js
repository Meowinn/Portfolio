import React from "react";

const SkillSection = () => {
    return (
        <div id="skillsSection">

            <div className="skillsHeader">
                <div className="skillsTitle"><span className="highlight">Skills & Tools</span></div>
                <div className="toolBox">My Toolbox & Things I Can Do</div>
                <div>The skills, tools and technologies I use to bring your products to life:</div>
            </div>

            <div className='skillsRow'>
                <div className="skillIcons">
                    <div className="imgWrapper"><img className="skillImgs" src={require('../imgs/html.png')} alt='htmlLogo'></img></div><div className="iconText">HTML5</div>
                </div>
                <div className="skillIcons">
                    <div className="imgWrapper"><img className="skillImgs" src={require('../imgs/css-3.png')} alt='cssLogo'></img></div><div className="iconText">CSS3</div>
                </div>
                <div className="skillIcons">
                    <div className="imgWrapper"><img className="skillImgs" src={require('../imgs/java-script.png')} alt='javascriptLogo'></img></div><div className="iconText">JavaScript</div></div>
                <div className="skillIcons">
                    <div className="imgWrapper"><img className="skillImgs" src={require('../imgs/react.png')} alt='reactLogo'></img></div><div className="iconText">React</div>
                </div>
            </div>

            <div className='skillsRow'>
                <div className="skillIcons">
                    <div className="imgWrapper"><img className="skillImgs" src={require('../imgs/git.png')} alt='gitLogo'></img></div><div className="iconText">Git</div>
                </div>
                <div className="skillIcons">
                    <div className="imgWrapper"><img className="skillImgs" src={require('../imgs/github.png')} alt='gitHubLogo'></img></div><div className="iconText">Github</div>
                </div>
                <div className="skillIcons">
                    <div className="imgWrapper"><img id="vs" className="skillImgs" src={require('../imgs/vs.png')} alt='vsCodeLogo'></img></div><div className="iconText">VS Code</div>
                </div>
                <div className="skillIcons">
                    <div className="imgWrapper"><img className="skillImgs" src={require('../imgs/terminal.png')} alt='commandLineLogo'></img></div><div className="iconText">Command Line</div>
                </div>
            </div>

        </div>
    )
};

export default SkillSection;