
import React from "react";
import "./index.css"
import image from "/src/assets/Images/graphics-designer.png"
import image2 from "/src/assets/Images/lady-pic.png"
import line from "/src/assets/Images/Line9.png"
import avatar from "/src/assets/Images/lady-pic.png"
const index = () => {

    return (
        <section className="Registration-page">
            <div className=" container-Register register-page">


                <div>
                    <img src={image} />

                </div>

                <form className="Register-Form">

                    <h3 className="register-tab">Register</h3>
                    <div>
                        <p>Be part of this movement!</p>
                    </div>



                    <h2>CREATE YOUR ACCOUNT</h2>
                    <div className="flex-form-flex">
                        <label htmlFor="">Team's Name</label>
                        <input className="input-tab" type="text" placeholder="Enter the name of your group" />

                        <label htmlFor="">Phone</label>
                        <input type="text" className="input-tab" placeholder="Enter your phone number" />


                    </div>

                    <div className="flex-form-flex">

                        <label htmlFor="">Email</label>
                        <input type="email" className="input-tab" placeholder="Enter your email address" />

                        <label htmlFor="">Project Topic</label>
                        <input type="text" className="input-tab" placeholder="What is your group project topic" />

                    </div>



                    <label htmlFor="">Phone</label>
                    <select>

                    </select>

                    <label htmlFor="">Group Size</label>
                    <select>

                    </select>

                    <p>Please review your registration details before submitting</p>

                    <input type="checkbox" />
                    <p>
                        I agreed with the event terms and conditions  and privacy policy
                    </p>

                    <button>Register Now</button>

                </form>


            </div>
        </section>

    )

};

export default index;
