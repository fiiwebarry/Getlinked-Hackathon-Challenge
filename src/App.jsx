
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePageLayout/HomePage/HomePage'
import AboutPage from './Components/HomePageLayout/AboutPage/AboutPage'
import GuideListPage from './Components/HomePageLayout/GuideListPage/GuideListPage'
import Analysistab from './Components/HomePageLayout/Analysistab/Analysistab'
import Faq from './Components/HomePageLayout/Faq/Faq'
import Timeline from './Components/HomePageLayout/Timeline/Timeline'
import Rewards from './Components/HomePageLayout/Rewards/Rewards'
import Partners from './Components/HomePageLayout/Partners/Partners'
import Privacy from './Components/HomePageLayout/Privacy/Privacy'
import Footer from './Components/Footer/Footer'

import './App.css'








function App() {


  return (
    <section>
      <Navbar />
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
    </section>
  )
}

export default App
