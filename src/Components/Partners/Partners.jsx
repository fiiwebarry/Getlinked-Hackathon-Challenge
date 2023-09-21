import "./Partners.css"
import image from "/src/assets/Images/Winwise-logo-White-colour.png"
import image1 from "/src/assets/Images/wisper-logo-white.png"
import image2 from "/src/assets/Images/liberty.png"
import image3 from "/src/assets/Images/liberty-tab.png"
import image4 from "/src/assets/Icons/line.png"
import line from "/src/assets/Images/Line12.png"

const Partners = () => {

    return (
        <section className=" ">
            <div className="container-partner partners-tab-tab">
                <h3>Partners and Sponsors</h3>

                <p>Getlinked Hackathon 1.0 is honored to have the following major
                    companies as its partners and sponsors</p>



                <div className="partners-tab">

                    <div className="partners-tab-tabs">
                        <div className="flex-partners">
                            <img className="pic-tab" src={image2} />
                            <img src={image4} />
                            <img className="liberty-pic" src={image3} />
                            <img src={image4} />
                            <img className="pic-tab2" src={image} />

                        </div>

                        <div className="part-lines">
                            <img className="line-ttab" src={line} />
                            <img className="line-ttab2" src={line} />
                            <img className="line-ttab" src={line} />


                        </div>

                        <div className="flex-partners3">
                            <img className="pic-tab3 " src={image1} />
                            <img src={image4} />
                            <div className="paybox">
                                <h3 className="pay-box">pay<span className="span-box">box</span></h3>
                            </div>

                            <img src={image4} />
                            <div className="paybox">
                                <div>
                                    <h3 className="Vizual">pay<span className="span-box">plus</span></h3>
                                    <p>Design Studios</p>

                                </div>

                            </div>

                        </div>



                    </div>



                </div>


            </div>

        </section>)
}
export default Partners;