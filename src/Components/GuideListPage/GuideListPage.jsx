import "./GuideListPage.css"
import desk from "/src/assets/Images/desk-lady.png";

const GuideListPage = () => {

    return (<section>

        <div className=" container-GuideList GuideList-tab">

            <div className="steps-tab-tab">
                <div className="steps-tab">
                    <h3 className="rules-tab">Rules and</h3>
                    <span className="guide-tab"> Guidelines</span>

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
            <div>
                <img src={desk} />

            </div>







        </div>
        <hr />


    </section>)
}
export default GuideListPage;