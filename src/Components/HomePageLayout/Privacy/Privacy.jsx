import "./Privacy.css"
import lockbook from "/src/assets/Images/lock-book.png"
import lock from "/src/assets/Images/lock.png"
import list from "/src/assets/Images/list-terms.png"



const Privacy = () => {

    return (

        <section className="Privacy-section">

            <div className=" container-privacy privacy-flex">
                <div>
                    <div className="privacy-policy">
                        <h3 className="pri-tab">Privacy Policy and</h3>
                        <span className="Terms">Terms</span>
                    </div>


                    <p className="pri-text-tab">Last updated on September 12, 2023</p>

                    <p className="policy-tab">Below are our privacy & policy, which outline a lot of goodies.
                        it’s our aim to always take of our participant</p>


                    <div className="content-tablist">
                        <p className="content-list">At getlinked tech Hackathon 1.0, we value your privacy
                            and are committed to protecting your personal information.
                            This Privacy Policy outlines how we collect, use, disclose,
                            and safeguard your data when you participate in our tech
                            hackathon event. By participating in our event, you consent
                            to the practices described in this policy.</p>

                        <h4 className="licence-tab">Licensing Policy</h4>

                        <p className="Standard-tab">Here are terms of our Standard License:</p>

                        <div className="flex-standard">
                            <img className="list-image" src={list} alt="list-items" />
                            <p className="list-text">
                                The Standard License grants you a non-exclusive right to
                                navigate and register for our event
                            </p>
                        </div>

                        <div className="flex-standard">

                            <img className="list-image" src={list} alt="list-items" />
                            <p className="list-text">
                                You are licensed to use the item available at any free source
                                sites, for your project developement
                            </p>
                        </div>

                        <button className="standard-btn"> Read More</button>

                    </div>

                </div>
                <div className="lock-relative">


                    <img className="lock-absolute" src={lock} />
                    <img className="lock-absolute2" src={lockbook} />


                </div>

            </div>

            <hr className="privacy-line" />


        </section>

    )
}

export default Privacy;