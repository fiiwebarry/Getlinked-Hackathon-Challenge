
import "./AboutPage.css"
import Bigidea from "/src/assets/Images/big-idea.png"
import arrow from "/src/assets/Icons/arrow.png"
import purple from "/src/assets/Icons/star-purple.png"

const AboutPage = () => {

    return (
        <section className="bigidea-tab">

            <div className=" container-ideatab bigidea-tab-tab">
                <div className="idea-tab">
                    <img className="star-purple" src={purple} alt="star" />
                    <img className="big-idea" src={Bigidea} alt="big-idea" />
                    <img className="arrow-tab" src={arrow} alt="arrow" />
                </div>

                <div className="bigidea-linked">
                    <div className="big-idea-intro">
                        <h3 className="">Introduction to getlinked</h3>
                        <span className="tech-intro">techHackathon 1.0</span>

                    </div>

                    <p className="tech-tag">Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a
                        design maverick, or a concept wizard, you'll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!</p>



                </div>
            </div>

            <hr className="tech-hr" />

        </section>


    )
}
export default AboutPage;