import "./Footer.css"
import contact from "/src/assets/Icons/phone.png"
import facebook from "/src/assets/Icons/facebook.png"
import instagram from "/src/assets/Icons/instagram.png"
import linkedin from "/src/assets/Icons/linkedin.png"
import xee from "/src/assets/Icons/xender.png"
import gps from "/src/assets/Icons/gps.png"
import line2 from "/src/assets/Icons/line.png"

const Footer = () => {

    return (<section className="footer-layout">

        <div className="container-Footer Footer-page">
            <div className=" ">
                <div className="logo-tab">
                    <h2 className="logo-text">get<span className="logo-span">linked</span></h2>
                </div>

                <p className="hack-tch">GetLinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented
                    individuals in the field of technology
                </p>


                <div className="terms-tab">
                    <p>Terms of Use </p>
                    <img src={line2} alt="line" />

                    <p>Privacy Policy</p>
                </div>

            </div>

            {/* section-two */}

            <div>
                <h3 className="usetabs">Useful Links</h3>
                <ul className="footer-links">
                    <li>Overview</li>
                    <li>Timeline</li>
                    <li>FAQs</li>
                    <li>Register</li>

                </ul>
                <div className="contact-link">
                    <p className="connect-tab">Follow us</p>
                    <img className="icon" src={instagram} />
                    <img className="icon2" src={xee} />
                    <img className="icon3" src={facebook} />
                    <img className="icon4" src={linkedin} />
                </div>

            </div>

            {/* section-three */}
            <div>
                <h3 className="connect-tab2">Contact Us</h3>

                <div className="flexs-contact">
                    <img src={contact} />
                    <p className="contact-tab">+234 6707653444</p>
                </div>

                <div className="flexs-contact">
                    <img className="locator" src={gps} />
                    <p className="location-tab">27,Alara Street
                        Yaba 100012
                        Lagos State</p>
                </div>

            </div>

        </div>
        <div className="footer-check container-Footer">
            <h3 >All rights reserved. © getlinked Ltd.</h3>
        </div>


    </section>)

}
export default Footer