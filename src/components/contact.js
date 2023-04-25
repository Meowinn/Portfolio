import React from "react";

const ContactSection = () => {
    return (
        <div id="contactSection">



            <div className="contactWrapper">
                <h2 className="fs-1"><span className="highlight">Contact</span></h2>

                <div className="container">
                    <div className=" lh-lg ">
                        <div className="aboutPara">Thank you for your time and Interest! It's my goal to be a web dev and then full-stack developer 👋 <br /> After tinkering with computers for 5 years, I grew more passionate about building stuff on the web and learning new technologies. I dedicated my time on learning the fundamental skills needed to get into this industry. </div>
                    </div>

                    <div className="row text-center justify-content-center pt-5">

                        <div className="col-6 mt-4 haveChat">
                            <div className="fs-2 fw-bold">Let's have a chat</div>
                            <div className="email">@darwinfagarang@gmail.com</div>
                            <a href="mailto:darwinfagarang@gmail.com">
                                <button className="connectBtn " type="button">Get in touch</button>
                                </a>
                        </div>

                        <div id="coffeeWrap" className="col-6">
                            <div id="steam" className="steam-one"></div>
                            <div id="steam" className="steam-two"></div>
                            <div id="steam" className="steam-three"></div>
                            <div id="steam" className="steam-four"></div>
                            <div id="cup">
                                <div className="cup-body">
                                    <div className="cup-shade"></div>
                                </div>
                                <div className="cup-handle"></div>
                                <div className="saucer"></div>
                                <div className="shadow"></div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <footer className="bg-dark text-center text-lg-center py-4">
                <div className="text-light px-5">@2023 Darwin Fagarang</div>
            </footer>


        </div>
    )
};

export default ContactSection;