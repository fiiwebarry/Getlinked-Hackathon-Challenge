import "./Timeline.css"
import line2 from "/src/assets/Icons/line.png"

import line from "/src/assets/Icons/line-three.png"

const Timeline = () => {

    return (
        <section>
            <div className="container-timeline Timeline-tab">
                <div className="flex-tab">
                    <h2>Timeline</h2>
                </div>
                <div className="flex-tab-tab">
                    <p>Here is the breakdown of the time we anticipate
                        using for the upcoming event.</p>
                </div>

                <div className="hack-tab-tabss">
                    <div>

                        <h3 className="Announce">Hackathon Announcement</h3>
                        <p className="p-tag">The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register</p>

                        <h3 className="time-line">November 18, 2023</h3>

                        <h3 className="Announce2">Teams Registration ends</h3>
                        <p className="p-tag2">Interested Participants are no longer Allowed to
                            register</p>

                        <h3 className="time-line2">November 18, 2023</h3>

                        <h3 className="Announce3">Getlinked Hackathon 1.0 Offically Begins</h3>
                        <p className="p-tag3">Accepted teams can now proceed to build their
                            ground breaking skill driven solutions</p>

                        <h3 className="time-line3">November 18, 2023</h3>
                    </div>

                    <div className="tab-timeline">
                        <img className="line-tab2" src={line} />
                        <div className="rounded">1</div>
                        <img className="line-tab" src={line2} />
                        <div className="rounded">2</div>

                        <img className="line-tab" src={line2} />
                        <div className="rounded">3</div>

                        <img className="line-tab" src={line2} />
                        <div className="rounded">4</div>

                        <img className="line-tab" src={line2} />
                        <div className="rounded">5</div>

                        <img className="line-tab" src={line2} />
                        <div className="rounded">6</div>


                    </div>

                    <div>
                        <h3 className="time-line4">November 18, 2023</h3>

                        <h3 className="Announce4">Teams Registration begins</h3>
                        <p className="p-tag4">Interested teams can now show their interest in the
                            getlinked tech hackathon 1.0 2023 by proceeding to register</p>


                        <h3 className="time-line5">November 18, 2023</h3>

                        <h3 className="Announce5">Announcement of the accepted teams
                            and ideas</h3>
                        <p className="p-tag5">All teams whom idea has been accepted into getlinked tech
                            hackathon 1.0 2023 are formally announced</p>

                        <h3 className="time-line6">November 18, 2023</h3>


                        <h3 className="Announce6">Demo Day</h3>
                        <p className="p-tag6">Teams get the opportunity to pitch their projects to judges.
                            The winner of the hackathon will also be announced on
                            this day</p>

                    </div>


                </div>

            </div>
            <hr />

        </section>

    )

}
export default Timeline;