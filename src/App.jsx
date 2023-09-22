
import { BrowserRouter as Router, createBrowserRouter, RouterProvider, } from "react-router-dom";
import { BrowserRouter as Switch, Route } from "react-router-dom";


import Home from "./Pages/Home/index";


import Navbar from './Components/Generic-Layout/Navbar/Navbar'

import Footer from './Components/Footer/Footer'

import './App.css'








function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },

      ],
    },
  ]);


  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
