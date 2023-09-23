import "./MobileNavbar.css"


import closebtn from "/src/assets/Icons/close-button.png"
// eslint-disable-next-line react/prop-types
const MobileNavbar = ({ showNav, setShowNav }) => {

    return (

        <aside style={{ transform: `translateX(${showNav ? "0%" : "-100%"})`, transition: "500ms ease-in-out" }}>
            <button onClick={() => setShowNav(false)}>
                <img src={closebtn} />
            </button>

            <a href="#">Timeline</a>
            <a href="#">Overview</a>
            <a href="#">FAQs</a>
            <a href="#">Contact</a>


            <button className="Register-btn" type="button">Register</button>


        </aside>)
}
export default MobileNavbar;