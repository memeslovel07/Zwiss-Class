import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutPreview from './components/AboutPreview'
import Gallery from './components/Gallery'
import Features from './components/Features'
import Toppers from './components/Toppers'
import Scorers2026 from './components/Scorers2026'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import CoursesList from './components/CoursesList'
import ReviewsComponent from "./components/Reviews";

function IndexPage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Scorers2026 />
      <Features />
      <Toppers />
      <Stats />
    </>
  )
}

function CoursesPage() {
  return (
    <>
      <CoursesList />
      <Pricing />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <About />
      <Contact />
    </>
  )
}

function ReviewsPage(){
  return(
<>
<ReviewsComponent />
</>

  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App
