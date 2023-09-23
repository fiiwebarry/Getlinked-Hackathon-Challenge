import "./Analysistab.css"
import analysis from "/src/assets/Images/analysis.png"
import purple from "/src/assets/Icons/star-purple.png"
import star from "/src/assets/Icons/star.png"
import grey from "/src/assets/Icons/star-grey.png"
import blur from "/src/assets/Icons/blur-home.png"
import blur2 from "/src/assets/Icons/blur.png"
import slip from "/src/assets/Images/Ellipse2.png"



const Analysistab = () => {

    return (
        <section>
            <div className=" container-analysis-tab Analysis-tab">

                <div className="analysis-text-tab">
                    <img className="analysis-pic" src={analysis} alt="analysis" />
                    <img className="slip" src={slip} alt="slip" />

                    <img className="purple-tab" src={purple} alt="purple" />
                    <img className="grey-head" src={grey} alt="grey" />
                    <img className="blur-tabbd" src={blur} alt="blur" />




                </div>

                <div>

                    <div className="key-tab">
                        <h3 className="key-tab-text">Judging Criteria</h3>
                        <span className="key-tab-tab">Key attributes</span>


                    </div>

                    <p className="tab-text"> <span className="tab-texter">Innovation and Creativity: </span>  Evaluate the uniqueness and creativity of the
                        solution. Consider whether it addresses a real-world problem in a novel
                        way or introduces innovative features.</p>

                    <p className="tab-text">
                        <span className="tab-texter">Functionality: </span>
                        Assess how well the solution works. Does it perform its
                        intended functions effectively and without major issues? Judges would
                        consider the completeness and robustness of the solution.
                    </p>

                    <p className="tab-text">
                        <span className="tab-texter">Impact and Relevance: </span>  Determine the potential impact of the solution
                        in the real world. Does it address a significant problem, and is it relevant
                        to the target audience? Judges would assess the potential social,
                        economic, or environmental benefits.</p>

                    <p className="tab-text">
                        <span className="tab-texter">Technical Complexity: </span>  Evaluate the technical sophistication of the solution.
                        Judges would consider the complexity of the code, the use of advanced
                        technologies or algorithms, and the scalability of the solution.</p>

                    <p className="tab-text">
                        <span className="tab-texter">Adherence to Hackathon Rules: </span>  Judges will Ensure that the team adhered
                        to the rules and guidelines of the hackathon, including deadlines, use of
                        specific technologies or APIs, and any other competition-specific requirements.</p>


                    <button className="Read-tab">Read More</button>
                    <img className="start" src={star} alt="star" />
                    <img className="blur-tabt" src={blur2} alt="blur2" />


                </div>



            </div>
            <hr />

        </section>
    )
}
export default Analysistab;