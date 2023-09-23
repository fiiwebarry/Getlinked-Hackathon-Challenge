import "./HomePage.css"
import bulb from "/src/assets/Icons/bulb.png";
import bubble from "/src/assets/Images/bubble.png";
import chain from "/src/assets/Icons/chain.png";
import icon from "/src/assets/Icons/star.png";
import blaze from "/src/assets/Icons/blaze.png";
import coder from "/src/assets/Images/hackathon-game.png";
import gray from "/src/assets/Icons/star-grey.png"
import blur from "/src/assets/Icons/blur-home.png"


const HomePage = () => {

    return (

        <section className="HomePage-tab">
            <div className="heading-tab">
                <div><img className="star-light" src={icon} alt="icon" /></div>
                <img className="blur-image" src={blur} alt="blur" />
                <div>
                    <h2 className="header-text">Igniting a Revolution in HR Innovation</h2>
                    <svg className="stroke-tab" xmlns="http://www.w3.org/2000/svg" width="255" height="17" viewBox="0 0 255 17" fill="none">
                        <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5" />
                    </svg>
                </div>


            </div>



            <div className=" container-tabb linked-flex">

                <div className="linked-tab">
                    <div className="linked-tab-tab">
                        <img className="bulb-image" src={bulb} alt="bulb" />
                        <h4 className="linked-tech">getlinked Tech</h4>
                    </div>

                    <div className="hack-tab-tabb">
                        <div className="hack-tab">
                            <h4 className="hack-text">Hackathon <span className="hack-span">1.0</span> </h4>
                        </div>

                        <div className="chain-tab">
                            <img className="chainer" src={chain} alt="chain" />
                            <img className="blaze" src={blaze} alt="blaze" />

                        </div>


                    </div>
                    <div className="hack-tab-p">
                        <p>Participate in getlinked tech Hackathon 2023 stand
                            a chance to win a Big prize</p>

                    </div>

                    <button className="Reg-btn">Register</button>

                    <div className="flex-timer">
                        <p className="time">00<span className="timer">H</span></p>
                        <p className="time">00<span className="timer">M</span></p>
                        <p className="time">00<span className="timer">S</span></p>

                        <img className="timer-star" src={gray} alt="gray-star" />

                    </div>

                </div>

                <div className="hack-image-tab">
                    <img className="bubble-star" src={gray} alt="gray-star" />
                    <img className="bubble" src={bubble} />
                    <img className="hack-guy" src={coder} alt="hackathon-guy" />
                </div>



            </div>

            <hr className="hr-tag" />



        </section>

    )
}
export default HomePage;