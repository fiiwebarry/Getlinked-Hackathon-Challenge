
import { BrowserRouter as Router, createBrowserRouter, RouterProvider, } from "react-router-dom";
import { BrowserRouter as Switch, Route } from "react-router-dom";


import Home from "./Pages/Home/index";
import RootLayout from "/src/Root";
import Register from "./Pages/Register-page/index";
import ContactUs from "./Pages/Contact-page/index";


import './App.css'








function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/register-page", element: <Register /> },
        { path: "/contact-page", element: <ContactUs /> },

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
