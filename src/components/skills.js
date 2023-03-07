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
                    <div><img className="skillImgs" src={require('../imgs/html.png')} alt='htmlLogo'></img><div className="iconText">HTML5</div></div>
                </div>
                <div className="skillIcons">
                    <div><img className="skillImgs" src={require('../imgs/css-3.png')} alt='cssLogo'></img><div className="iconText">CSS3</div></div>
                </div>
                <div className="skillIcons">
                    <div><img className="skillImgs" src={require('../imgs/java-script.png')} alt='javascriptLogo'></img><div className="iconText">JavaScript</div></div>
                </div>
                <div className="skillIcons">
                    <div><img className="skillImgs" src={require('../imgs/react.png')} alt='reactLogo'></img><div className="iconText">React</div></div>
                </div>
            </div>

            <div className='skillsRow'>
                <div className="skillIcons">
                    <div><img className="skillImgs" src={require('../imgs/git.png')} alt='gitLogo'></img><div className="iconText">Git</div></div>
                </div>
                <div className="skillIcons">
                    <div><img className="skillImgs" src={require('../imgs/github.png')} alt='gitHubLogo'></img><div className="iconText">Github</div></div>
                </div>
                <div className="skillIcons">
                    <div><img id="vs" className="skillImgs" src={require('../imgs/vs.png')} alt='vsCodeLogo'></img><div className="iconText">VS Code</div></div>
                </div>
                <div className="skillIcons">
                    <div><img className="skillImgs" src={require('../imgs/terminal.png')} alt='commandLineLogo'></img><div className="iconText">Command Line</div></div>
                </div>
            </div>

        </div>
    )
};

export default SkillSection;