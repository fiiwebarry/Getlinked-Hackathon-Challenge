
import "./AboutPage.css"
import Bigidea from "/src/assets/Images/big-idea.png"

const AboutPage = () => {

    return (
        <section className="bigidea-tab">

            <div className=" container-ideatab bigidea-tab-tab">
                <div>
                    <img src={Bigidea} alt="big-idea" />
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

            <hr />

        </section>


    )
}
export default AboutPage;