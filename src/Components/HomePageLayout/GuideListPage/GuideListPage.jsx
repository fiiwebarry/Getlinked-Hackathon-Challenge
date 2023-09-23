import "./GuideListPage.css"
import gray from "/src/assets/Icons/star-grey.png"
import star from "/src/assets/Icons/star.png"
import blur from "/src/assets/Icons/blur-home.png"
import blur2 from "/src/assets/Icons/blur.png"

import desk from "/src/assets/Images/desk-lady.png";

const GuideListPage = () => {

    return (<section>

        <div className=" container-GuideList GuideList-tab">

            <div className="steps-tab-tab">
                <div className="steps-tab">
                    <h3 className="rules-tab">Rules and</h3>
                    <span className="guide-tab"> Guidelines</span>
                    <img className="blur-tab" src={blur} alt="tab" />
                    <img className="gray-tab" src={star} alt="star" />

                </div>
                <div className="Guide-tab">
                    <p className="guide-tab-text">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a
                        design maverick, or a concept wizard, you'll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!</p>


                </div>

            </div>
            <div className="tab-desk">
                <img className="desk-lady" src={desk} />
                <img className="star-pic" src={gray} alt="star" />
                <img className="blur-tab-tab" src={blur2} alt="blur" />
                <img className="gray-tab-tab" src={star} alt="star" />
            </div>







        </div>
        <hr />


    </section>)
}
export default GuideListPage;