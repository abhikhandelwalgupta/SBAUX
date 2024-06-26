
import Footer from "./components/coman/Footer"
import Navbar from "./components/coman/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { Routes, Route, Navigate } from "react-router-dom"
import Product from "./pages/Product"


function App() {



  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />




    </>
  )
}

export default App
