import dropdownbtn from "/src/assets/Icons/burger.png"
import "./Navbar.css"



// eslint-disable-next-line react/prop-types
const Navbar = ({ setShowNav }) => {

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
                <button onClick={() => setShowNav(prev => !prev)} className="btn-hide"><img src={dropdownbtn} /></button>

            </div>


            <hr />

        </nav>)
}
export default Navbar