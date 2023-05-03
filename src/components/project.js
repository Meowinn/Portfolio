import React from 'react';

const ProjectSection = () => {
    return (
        <div id="projectSection">
            <div>
                <h2 className='fs-1'><span className="highlight">Projects</span></h2>
                <div className="toolBox">100% home-grown code, I built these sites from the ground up!</div>
            </div>

            <div className="container">
                <div className="row gx-5 gy-5">

                    <div className='col-lg-4 col-md-6 col-sm-12 px-4' data-aos="zoom-in">
                        <div className="card">
                            <img className="projImgs card-img-top" src={require('../imgs/project_shopping.png')} alt='shopping_cart.jpg'></img>
                            <div className="card-body px-4 text-justify">
                                <h5 className="card-title fw-bold">Shopping Website</h5>
                                <div className="techRow">
                                    <div className="techUsed">Bootstrap</div>
                                    <div className="techUsed">JS</div>
                                    <div className="techUsed">React</div>
                                    <div className="techUsed">Router</div>
                                </div>
                                <p className="card-text">An E-commerce project which uses two client-side routes. It includes a working add to cart functionality using a combination of different array methods and react state hooks.</p>
                                <div className="projBtnWrapper">
                                    <a href="https://meowinn.github.io/project-shopping_page/" className='pe-3'><button className="projBtn" type="button">Live Demo</button></a>
                                    <a href="https://github.com/Meowinn/top-shopping_page"><button className="projBtn" type="button">Source Code</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12 px-4' data-aos="zoom-in">
                        <div className="card">
                            <img className="projImgs card-img-top" src={require('../imgs/project_memory.png')} alt='memory_game.jpg'></img>
                            <div className="card-body px-4 text-justify">
                                <h5 className="card-title fw-bold">Memory Game</h5>
                                <div className="techRow">
                                    <div className="techUsed">CSS</div>
                                    <div className="techUsed">JS</div>
                                    <div className="techUsed">React</div>
                                </div>
                                <p className="card-text">A memory card game with my favorite anime characters. This project uses react state and effect hooks to simulate the cards in a random order. A logic is included to track the best score.</p>
                                <div className="projBtnWrapper">
                                    <a href="https://meowinn.github.io/project-memory_game/" className='pe-3'><button className="projBtn" type="button">Live Demo</button></a>
                                    <a href="https://github.com/Meowinn/TOP-Memory_game"><button className="projBtn" type="button">Source Code</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12 px-4' data-aos="zoom-in">
                        <div className="card ">
                            <img className="projImgs card-img-top" src={require('../imgs/project_cv.png')} alt='project_cv.jpg'></img>
                            <div className="card-body px-4 text-justify">
                                <h5 className="card-title fw-bold">CV Generator</h5>
                                <div className="techRow">
                                    <div className="techUsed">HTML</div>
                                    <div className="techUsed">CSS</div>
                                    <div className="techUsed">JS</div>
                                    <div className="techUsed">React</div>
                                </div>
                                <p className="card-text">This is the first project I've built using react. I've first finished this project using class-based components but I have refactored it to use mostly functional components.</p>
                                <div className="projBtnWrapper">
                                    <a href="https://meowinn.github.io/project-cv-generator/" className='pe-3'><button className="projBtn" type="button">Live Demo</button></a>
                                    <a href="https://github.com/Meowinn/TOP-CV_Generator"><button className="projBtn" type="button">Source Code</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12 px-4' data-aos="zoom-in">
                        <div className="card">
                            <img className="projImgs card-img-top" src={require('../imgs/project_weather.png')} alt='weather_app.jpg'></img>
                            <div className="card-body px-4 text-justify">
                                <h5 className="card-title fw-bold">Weather App</h5>
                                <div className="techRow">
                                    <div className="techUsed">JS</div>
                                    <div className="techUsed">API</div>
                                    <div className="techUsed">JSON</div>
                                </div>
                                <p className="card-text">I utilized OpenWeather Map API in this project then worked with the JSON data to display it accordingly. I also added the feature to show data in either celsius or farenheit.</p>
                                <div className="projBtnWrapper">
                                    <a href="https://meowinn.github.io/project-weather_App/" className='pe-3'><button className="projBtn" type="button">Live Demo</button></a>
                                    <a href="https://github.com/Meowinn/TOP-Weather_App"><button className="projBtn" type="button">Source Code</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12 px-4' data-aos="zoom-in">
                        <div className="card">
                            <img className="projImgs card-img-top" src={require('../imgs/project_resto.png')} alt='restaurant.jpg'></img>
                            <div className="card-body px-4 text-justify">
                                <h5 className="card-title fw-bold">Restaurant Page</h5>
                                <div className="techRow">
                                    <div className="techUsed">JS</div>
                                    <div className="techUsed">Webpack</div>
                                </div>
                                <p className="card-text">Inspired by official Max's Restaurant website, I've built this responsive site using only JavaScript to render the entire contents. It also uses Webpack to bundle files.</p>
                                <div className="projBtnWrapper">
                                    <a href="https://meowinn.github.io/project-restaurant_webpack/" className='pe-3'><button className="projBtn" type="button">Live Demo</button></a>
                                    <a href="https://github.com/Meowinn/TOP-Restaurant_Webpack"><button className="projBtn" type="button">Source Code</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-12 px-4' data-aos="zoom-in">
                        <div className="card">
                            <img className="projImgs card-img-top" src={require('../imgs/project_todo_app.png')} alt='todo_app.jpg'></img>
                            <div className="card-body px-4 text-justify">
                                <h5 className="card-title fw-bold">Todo List App</h5>
                                <div className="techRow">
                                    <div className="techUsed">HTML</div>
                                    <div className="techUsed">JS</div>
                                </div>
                                <p className="card-text">A CRUD project that was completed by using JavaScript with different modules compiled by webpack. This project helped me reinforce JS topics like factory functions.</p>
                                <div className="projBtnWrapper">
                                    <a href="https://meowinn.github.io/project-todo-list/" className='pe-3'><button className="projBtn" type="button">Live Demo</button></a>
                                    <a href="https://github.com/Meowinn/TOP-Todo-list"><button className="projBtn" type="button">Source Code</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default ProjectSection;