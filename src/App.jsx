
import Footer from "./components/coman/Footer"
import Navbar from "./components/coman/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import { Routes, Route, Navigate } from "react-router-dom"


function App() {
  


  return (
    <>
      <div className=" max-h-screen  w-[100vw] relative bg-fixed  scroll-smooth	  font-inter  min-h-screen    ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>



    </>
  )
}

export default App
