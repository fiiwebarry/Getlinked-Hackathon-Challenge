
import "./index.css"
import MobileNavbar from "/src/Components/HomePageLayout/MobileNavbar/MobileNavbar"
import HomePage from "/src/Components/HomePageLayout/HomePage/HomePage"
import AboutPage from '/src/Components/HomePageLayout/AboutPage/AboutPage'
import GuideListPage from '/src/Components/HomePageLayout/GuideListPage/GuideListPage'
import Analysistab from '/src/Components/HomePageLayout/Analysistab/Analysistab'
import Faq from '/src/Components/HomePageLayout/Faq/Faq'
import Timeline from '/src/Components/HomePageLayout/Timeline/Timeline'
import Rewards from '/src/Components/HomePageLayout/Rewards/Rewards'
import Partners from '/src/Components/HomePageLayout/Partners/Partners'
import Privacy from '/src/Components/HomePageLayout/Privacy/Privacy'
import Footer from "/src/Components/HomePageLayout/Footer/Footer"




const index = ({ showNav, setShowNav }) => {






    return (
        <div className="home-page">
            <HomePage />
            <AboutPage />
            <GuideListPage />
            <Analysistab />
            <Faq />
            <Timeline />
            <Rewards />
            <Partners />
            <Privacy />
            <Footer />
            <MobileNavbar setShowNav={setShowNav} showNav={showNav} />



        </div>


    )
}

export default index;