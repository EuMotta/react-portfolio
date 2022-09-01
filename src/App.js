import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero'
import Services from './components/UI/Services'
import Images from './components/UI/Images'
import About from './components/UI/About'

function App() {
  const [theme, setTheme] = useState("")
  const troggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("")
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])
  return <>
    <Header theme={theme} troggleTheme={troggleTheme} />
    <Hero theme={theme} />
    <Services />
    <Images/>
    <About />
  </>
}

export default App;
