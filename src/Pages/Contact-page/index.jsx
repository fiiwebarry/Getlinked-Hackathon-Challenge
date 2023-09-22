
import React from "react";
import "./index.css"
import facebook from "/src/assets/Icons/facebook.png"
import instagram from "/src/assets/Icons/instagram.png"
import linkedin from "/src/assets/Icons/linkedin.png"
import xee from "/src/assets/Icons/xender.png"

const index = () => {
    return (
        <div className="contact-section">

            <div className="container-form flex-contact">
                <div className="contact-layout-tab">

                    <h3 className="touch-tab">Get in touch</h3>
                    <p className="contact-info">Contact
                        Information</p>


                    <p className="add-tab">27,Alara Street
                        Yaba 100012
                        Lagos State</p>

                    <p className="contactUs-tab">Call Us : 07067981819</p>

                    <p className="openings-tab">we are open from Monday-Friday
                        08:00am - 05:00pm</p>


                    <p className="share-tab">Share on</p>
                    <div className="tab-list">
                        <img className="icon" src={instagram} />
                        <img className="icon2" src={xee} />
                        <img className="icon3" src={facebook} />
                        <img className="icon4" src={linkedin} />
                    </div>


                </div>
                <form className="form-submit">

                    <h3 className="question-tab">Questions or need assistance?</h3>
                    <h3 className="about-tabs">Let us know  about it!</h3>

                    <input type="text" placeholder="First Name" />
                    <input type="mail" placeholder="Mail" />


                    <textarea>



                    </textarea>
                    <button className="submit-btn">Submit</button>



                </form>


            </div>


        </div>
    )

};

export default index;