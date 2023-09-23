
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./Pages/Home/index";
import RootLayout from "/src/Root";

import Register from "./Pages/Register-page/index";
import ContactUs from "./Pages/Contact-page/index";


import './App.css'


import { useState } from "react";

function App() {

  const [showNav, setShowNav] = useState(false);





  return (
    <BrowserRouter>
      <RootLayout setShowNav={setShowNav}>
        <Routes>
          <Route path="/" index element={<Home setShowNav={setShowNav} showNav={showNav} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>

  )
}

export default App
