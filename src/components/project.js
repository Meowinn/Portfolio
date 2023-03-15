import React from 'react';


const ProjectSection = () => {
    return (
        <div id="projectSection">
            <div>
                <div id="projTitle"><span className="highlight">Projects</span></div>
                <div className="projDescrip">100% home-grown code, I built these sites from the ground up!</div>
            </div>

            <div className="projRow">
                <div className="projWrapper">
                    <div className="projImgWrapper"><img className="projImgs" src={require('../imgs/project_shopping.png')} alt='shopping_cart.jpg'></img></div>

                    <div className="projText">
                        <div className="workTitle">Shopping Website</div>

                        <div className="techRow">
                            <div className="techUsed">CSS</div>
                            <div className="techUsed">JavaScript</div>
                            <div className="techUsed">React</div>
                            <div className="techUsed">Router</div>
                        </div>

                        <div>An E-commerce project which uses two client-side routes. It includes a working add to cart functionality using a combination of different array methods and react state hooks.</div>

                        <div className="projBtnWrapper">
                            <a href="https://meowinn.github.io/project-shopping_page/"><button className="projBtn" type="button">Live Demo</button></a>
                            <a href="https://github.com/Meowinn/top-shopping_page"><button className="projBtn" type="button">Source Code</button></a>
                        </div>
                    </div>
                </div>

                <div className="projWrapper">
                    <div className="projImgWrapper"><img className="projImgs" src={require('../imgs/project_memory.png')} alt='memory_game.jpg'></img></div>

                    <div className="projText">
                        <div className="workTitle">Memory Game</div>

                        <div className="techRow">
                            <div className="techUsed">CSS</div>
                            <div className="techUsed">JavaScript</div>
                            <div className="techUsed">React</div>
                        </div>

                        <div>A memory card game with my favorite anime characters. This project uses react state and effect hooks to simulate the cards in a random order. A logic is included to track the best score.</div>

                        <div className="projBtnWrapper">
                            <a href="https://meowinn.github.io/project-memory_game/"><button className="projBtn" type="button">Live Demo</button></a>
                            <a href="https://github.com/Meowinn/TOP-Memory_game"><button className="projBtn" type="button">Source Code</button></a>
                        </div>
                    </div>
                </div>

                <div className="projWrapper">
                    <div className="projImgWrapper"><img className="projImgs" src={require('../imgs/project_cv.png')} alt='project_cv.jpg'></img></div>

                    <div className="projText">
                        <div className="workTitle">CV Generator</div>

                        <div className="techRow">
                            <div className="techUsed">HTML</div>
                            <div className="techUsed">CSS</div>
                            <div className="techUsed">JavaScript</div>
                            <div className="techUsed">React</div>
                        </div>

                        <div>This is the first project I've built using react. I've first finished this project using class-based components but I have refactored it to use mostly functional components.</div>

                        <div className="projBtnWrapper">
                            <a href="https://meowinn.github.io/project-cv-generator/"><button className="projBtn" type="button">Live Demo</button></a>
                            <a href="https://github.com/Meowinn/TOP-CV_Generator"><button className="projBtn" type="button">Source Code</button></a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="projRow">

                <div className="projWrapper">
                    <div className="projImgWrapper"><img className="projImgs" src={require('../imgs/project_weather.png')} alt='weather_app.jpg'></img></div>

                    <div className="projText">
                        <div className="workTitle">Weather App</div>

                        <div className="techRow">
                            <div className="techUsed">HTML</div>
                            <div className="techUsed">JavaScript</div>
                            <div className="techUsed">API</div>
                            <div className="techUsed">JSON</div>
                        </div>

                        <div>I utilized OpenWeatherMap API in this project then worked with the JSON data to display it accordingly. I also added the feature to show data in either celsius or farenheit.</div>

                        <div className="projBtnWrapper">
                            <a href="https://meowinn.github.io/project-weather_App/"><button className="projBtn" type="button">Live Demo</button></a>
                            <a href="https://github.com/Meowinn/TOP-Weather_App"><button className="projBtn" type="button">Source Code</button></a>
                        </div>
                    </div>
                </div>

                <div className="projWrapper">
                    <div className="projImgWrapper"><img className="projImgs" src={require('../imgs/project_resto.png')} alt='restaurant.jpg'></img></div>

                    <div className="projText">
                        <div className="workTitle">Restaurant</div>

                        <div className="techRow">
                            <div className="techUsed">JavaScript</div>
                            <div className="techUsed">Webpack</div>
                        </div>

                        <div>Inspired by Max's Restaurant page, I've built this responsive site using only JavaScript to render the entire contents. It also uses Webpack to bundle files.</div>

                        <div className="projBtnWrapper">
                            <a href="https://meowinn.github.io/project-restaurant_webpack/"><button className="projBtn" type="button">Live Demo</button></a>
                            <a href="https://github.com/Meowinn/TOP-Restaurant_Webpack"><button className="projBtn" type="button">Source Code</button></a>
                        </div>
                    </div>
                </div>

                <div className="projWrapper">
                    <div className="projImgWrapper"><img className="projImgs" src={require('../imgs/project_todo_app.png')} alt='todo_app.jpg'></img></div>

                    <div className="projText">
                        <div className="workTitle">Todo List App</div>

                        <div className="techRow">
                            <div className="techUsed">HTML</div>
                            <div className="techUsed">JavaScript</div>
                        </div>

                        <div>A CRUD project that was completed by mostly using JavaScript with different modules compiled by webpack. This project helped me reinforce JS topics like factory functions.</div>

                        <div className="projBtnWrapper">
                            <a href="https://meowinn.github.io/project-todo-list/"><button className="projBtn" type="button">Live Demo</button></a>
                            <a href="https://github.com/Meowinn/TOP-Todo-list"><button className="projBtn" type="button">Source Code</button></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default ProjectSection;