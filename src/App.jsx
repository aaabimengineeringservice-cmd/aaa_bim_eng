import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import Card from './Components/Card'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Services from './Components/Services'
import OurProducts from './Components/OurProducts'
import ProductsShowcase from './Components/ProductsShowcase'
import WhyChooseUs from './Components/WhyChooseUs'
import BlogSection from './Components/BlogSection'
import ContactInfo from './Components/ContactInfo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Hero />
     <Services/>
     <ProductsShowcase/>
     <WhyChooseUs/>
     <BlogSection/>
      <ContactInfo/>
      <Footer  />
      
    </>
  )
}

export default App
