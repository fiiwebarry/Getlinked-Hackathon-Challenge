import "./Faq.css"
import casual from "/src/assets/Images/casual.png"
import quest from "/src/assets/Images/quest.png"
import quest1 from "/src/assets/Images/quest.png"
import quest2 from "/src/assets/Images/quest.png"
import plus from "/src/assets/Icons/plus.png"
import purple from "/src/assets/Icons/star-purple.png"
import star from "/src/assets/Icons/star.png"
import grey from "/src/assets/Icons/star-grey.png"
import { data } from "./data"

const Faq = () => {

    return (
        <section className="faq-tab">
            <div className=" container-faq faq-tablet">
                <div className="faq-tab-tab">
                    <div>
                        <img className="pop" src={purple} alt="tab" />
                        <div className="faq-tabs">
                            <h3 className="faq-freq">
                                Frequently Ask
                            </h3>
                            <span className="faq-quest"> Question</span>
                        </div>

                        <div className="faq-tab-p">
                            <p>We got answers to the questions that you might
                                want to ask about getlinked Hackathon 1.0</p>

                        </div>

                        {data.map((tab) => {

                            const { id, content } = tab;
                            return (
                                <div className="relate-tab" key={id}>
                                    <div className="accordion-tab">
                                        <div className="content-tab">
                                            <p>
                                                {content}
                                            </p>
                                        </div>

                                        <div>
                                            <img src={plus} alt="plus" />
                                        </div>
                                    </div>
                                    <hr className="topHr" />

                                </div>

                            )



                        })}


                    </div>

                </div>

                <div className="casual-tab">
                    <img className="pop2" src={purple} alt="tab" />
                    <img className="pop3" src={purple} alt="tab" />
                    <img className="pop4" src={grey} alt="tab" />
                    <img className="casual-bee" src={casual} alt="" />
                    <img className="quest" src={quest} alt="" />
                    <img className="quest1" src={quest1} alt="" />
                    <img className="quest2" src={quest2} alt="" />
                    <img className="pop5" src={star} alt="tab" />




                </div>



            </div>

            <hr />
        </section>
    )
}
export default Faq;