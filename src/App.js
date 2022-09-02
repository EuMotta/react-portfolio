import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Hero from './components/UI/Hero'
import Services from './components/UI/Services'
import Images from './components/UI/Images'
import About from './components/UI/About'
import Footer from './components/Footer/footer'

function App() {
  const [theme, setTheme] = useState("")
  const troggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("")
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])
  return <>
    <Home theme={theme} troggleTheme={troggleTheme} />
    <Hero theme={theme} />
    <Services />
    <Images/>
    <About />
    <Footer />
  </>
}

export default App;
