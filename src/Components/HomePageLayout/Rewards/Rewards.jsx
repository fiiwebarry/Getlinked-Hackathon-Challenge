import "./Rewards.css"
import icon from "/src/assets/Icons/star-purple.png"
import trophy from "/src/assets/Images/trophy.png"
import gold from "/src/assets/Images/gold_medal.png"
import silver from "/src/assets/Images/silver_medal.png"
import bronze from "/src/assets/Images/bronze_medal.png"


const Rewards = () => {

    return (

        <section className="rewards-tab">
            <div className="container-rewards rewards-tab-tab">
                <div className="flex-item">
                    <img className="item-tab" src={icon} />
                    <div>
                        <div className="prize-tab">
                            <h4 className="price">Prizes and</h4>
                            <span className="reward">Rewards</span>
                        </div>

                        <p className="winners-tab">Highlight of the prizes or rewards for winners
                            and for participants.
                        </p>
                    </div>
                </div>

                <div className="flex-cabinet">
                    <div> <img className="trophy-main" src={trophy} /></div>
                    <div className="flex-trophy">
                        <div className="trophy-box">
                            <div className="absolute-tab">
                                <img className="silver" src={silver} />
                            </div>

                            <div className="silver-tab">
                                <div className="box-tab">
                                    <h4>2nd</h4>
                                </div>
                                <div className="Runner-tab">
                                    <h4>Runner</h4>
                                </div>
                                <div className="tab-price">
                                    <h4>N300,000</h4>
                                </div>
                            </div>

                        </div>
                        <div className="trophy-box">

                            <div className="absolute-tab3">
                                <img className="silver" src={gold} />
                            </div>
                            <div className="gold-tab">
                                <div className="box-tab2">
                                    <h4>1st</h4>
                                </div>
                                <div className="Runner-tab">
                                    <h4>Runner</h4>
                                </div>
                                <div className="tab-price">
                                    <h4>N400,000</h4>
                                </div>

                            </div>

                        </div>
                        <div className="trophy-box">

                            <div className="absolute-tab2">
                                <img className="silver" src={bronze} />
                            </div>
                            <div className="silver-tab">
                                <div className="box-tab">
                                    <h4>3rd</h4>
                                </div>
                                <div className="Runner-tab">
                                    <h4>Runner</h4>
                                </div>
                                <div className="tab-price">
                                    <h4>N150,000</h4>
                                </div>

                            </div>

                        </div>
                    </div>




                </div>






            </div>
            <hr className="hr-line-tab" />



        </section>)
}

export default Rewards;