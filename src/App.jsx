import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Components/HomePage/HomePage'
import AboutPage from './Components/AboutPage/AboutPage'
import GuideListPage from './Components/GuideListPage/GuideListPage'
import Analysistab from './Components/Analysistab/Analysistab'
import Faq from './Components/Faq/Faq'
import Timeline from './Components/Timeline/Timeline'
import Rewards from './Components/Rewards/Rewards'
import Partners from './Components/Partners/Partners'

import './App.css'






function App() {
  const [count, setCount] = useState(0)

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
    </section>
  )
}

export default App
