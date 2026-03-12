import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import ScrollToTop from "./component/ScrollToTop"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"


import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import Bookings from "./pages/Bookings"
import PricingPage from "./pages/PricingPage"
import ServicesPage from "./pages/ServicePage"


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App