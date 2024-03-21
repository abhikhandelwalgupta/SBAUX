import Footer from "./components/coman/Footer"
import Navbar from "./components/coman/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { Routes, Route, Navigate } from "react-router-dom"


function App() {


  return (
    <>
      <div className=" max-h-screen maxh w-[100vw] relative bg-fixed  scroll-smooth	 bg-richblack-900 font-inter  min-h-screen   bg-richblack-900 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>



    </>
  )
}

export default App
