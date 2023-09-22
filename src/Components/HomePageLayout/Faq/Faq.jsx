import "./Faq.css"
import casual from "/src/assets/Images/casual.png"
import quest from "/src/assets/Images/quest.png"
import quest1 from "/src/assets/Images/quest.png"
import quest2 from "/src/assets/Images/quest.png"
import plus from "/src/assets/Icons/plus.png"
import { data } from "./data"

const Faq = () => {

    return (
        <section className="faq-tab">
            <div className=" container-faq faq-tablet">
                <div className="faq-tab-tab">
                    <div>
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
                                <div key={id}>
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

                <div>
                    <img src={casual} alt="" />
                    <img src={quest} alt="" />
                    <img src={quest1} alt="" />
                    <img src={quest2} alt="" />




                </div>



            </div>

            <hr />
        </section>
    )
}
export default Faq;