
import "./Navbar.css"


const Navbar = () => {

    return (


        <nav className="getlinked-nav">
            <div className="container-tab logo-flex-tab">
                <div className="logo-tab">
                    <h2 className="logo-text">get<span className="logo-span">linked</span></h2>
                </div>
                <div className="nav-flex">

                    <ul>
                        <li>Timeline</li>
                        <li>Overview</li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>

                    <button className="Register-btn" type="button">Register</button>
                </div>

            </div>


            <hr />

        </nav>)
}
export default Navbar