import React from "react";

const ContactSection = () => {
    return (
        <div id="contactSection">

            <div className="contactTitle"><span className="highlight">Contact</span></div>

            <div className="contactTextWrapper">
                <div className="aboutWrapper">
                    <div className="about">About Me</div>
                    <div className="aboutPara">Thank you for your time and Interest! I'm Darwin, an aspiring web developer 👋 <br /> After tinkering with computers for 5 years, I grew more passionate about building stuff on the web and learning new technologies. I recently focused on learning the skills needed to get into this industry </div>
                </div>


                <div className="connectDiv">
                    <div>
                        <div>Let's have a chat</div>
                        <div className="email">@darwinfagarang@gmail.com</div>
                        <a href="mailto:darwinfagarang@gmail.com"><button className="connectBtn" type="button">Get in touch</button></a>
                    </div>

                    <div id="coffeeWrap">
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

            <div className="footer">
                <div>@2023 Darwin Fagarang</div>
            </div>

        </div>
    )
};

export default ContactSection;