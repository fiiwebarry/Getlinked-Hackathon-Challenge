import "./Analysistab.css"
import analysis from "/src/assets/Images/analysis.png"

const Analysistab = () => {

    return (
        <section>
            <div className=" container-analysis-tab Analysis-tab">

                <div className="analysis-text-tab">
                    <img src={analysis} />

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

                </div>



            </div>
            <hr />

        </section>
    )
}
export default Analysistab;